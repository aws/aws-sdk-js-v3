import {
    BuildHandler,
    BuildHandlerArguments,
    Decoder,
    HandlerExecutionContext,
    HashConstructor
} from '@aws/types';
import {blobReader} from '@aws/chunked-blob-reader';
import {isArrayBuffer} from '@aws/is-array-buffer';
import {toHex} from '@aws/util-hex-encoding';
import {TreeHash} from '@aws/sha256-tree-hash';
import {streamCollector} from '@aws/stream-collector-browser';

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

            let body = request.body;
            if (body) {
                const treeHash = !hasTreeHash ? new TreeHash(Sha256, fromUtf8) : null;
                const contentHash = !hasContentHash ? new Sha256() : null;
                const MiB = 1048576;

                let buffer: Uint8Array|undefined;
                if (typeof ReadableStream !== void 0 && body instanceof ReadableStream) {
                    // since the body was consumed, reset the body
                    body = buffer = await streamCollector(body);
                } else {
                    buffer = await convertToUint8Array(body, fromUtf8);
                }

                // working with a Uint8Array
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
                } else if (typeof body.size === 'number') {
                    await blobReader(
                        body,
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

            return next({
                ...args,
                request: {
                    ...request,
                    body
                }
            });
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