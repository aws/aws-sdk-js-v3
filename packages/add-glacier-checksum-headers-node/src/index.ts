import {createReadStream} from 'fs';
import {
    BuildHandler,
    BuildHandlerArguments,
    Decoder,
    HandlerExecutionContext,
    HashConstructor
} from '@aws/types';
import {streamReader} from '@aws/chunked-stream-reader-node';
import {isArrayBuffer} from '@aws/is-array-buffer';
import {toHex} from '@aws/util-hex-encoding';
import {TreeHash} from '@aws/sha256-tree-hash';

export function addChecksumHeaders(
    Sha256: HashConstructor,
    fromUtf8: Decoder,
) {
    return (next: BuildHandler<any, any, any>) => {
        return async(args: BuildHandlerArguments<any, any>) => {
            const request = args.request;
            if (!request) {
                throw new Error('Unable to add checksums due to missing request.');
            }

            const hasTreeHash = !!request.headers['x-amz-sha256-tree-hash'];
            const hasContentHash = !!request.headers['x-amz-content-sha256'];

            const body = request.body;
            if (body) {
                const treeHash = !hasTreeHash ? new TreeHash(Sha256, fromUtf8) : null;
                const contentHash = !hasContentHash ? new Sha256() : null;
                const MiB = 1048576;

                const buffer = convertToUint8Array(body, fromUtf8);

                if (buffer) {
                    contentHash && contentHash.update(buffer);
                    if (treeHash) {
                        for (let i = 0; i < buffer.length; i += MiB) {
                            treeHash.update(
                                buffer.subarray(
                                    i,
                                    Math.min(i + MiB, buffer.byteLength)
                                )
                            );
                        }
                    }
                } else {
                    // eventually we'll want to support rewindable streams as well
                    if (typeof body.path !== 'string') {
                        throw new Error(
                            'Unable to calculate checksums for non-file streams.'
                        );
                    }
                    const bodyTee = createReadStream(body.path, {
                        start: body.start,
                        end: body.end
                    });

                    await streamReader(
                        bodyTee,
                        (chunk) => {
                            treeHash && treeHash.update(chunk);
                            contentHash && contentHash.update(chunk);
                        },
                        MiB
                    );
                }

                if (contentHash) {
                    request.headers['x-amz-content-sha256'] = toHex(await contentHash.digest());
                }
                if (treeHash) {
                    request.headers['x-amz-sha256-tree-hash'] = toHex(await treeHash.digest());
                }
            }

            return next(args);
        }
    }
}

function convertToUint8Array(
    data: string|ArrayBuffer|ArrayBufferView,
    fromUtf8: Decoder
): Uint8Array|undefined {
    if (typeof data === 'string') {
        return fromUtf8(data);
    }
    
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(
            data.buffer,
            data.byteOffset,
            data.byteLength
        );
    }
    
    if (isArrayBuffer(data)) {
        return new Uint8Array(
            data,
            0,
            data.byteLength
        );
    }
}