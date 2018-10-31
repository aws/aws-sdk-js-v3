import {
    BuildHandler,
    BuildHandlerArguments,
    Decoder,
    HashConstructor,
    Hash
} from '@aws-sdk/types';
import {blobReader} from '@aws-sdk/chunked-blob-reader';
import {isArrayBuffer} from '@aws-sdk/is-array-buffer';
import {toHex} from '@aws-sdk/util-hex-encoding';
import {TreeHash} from '@aws-sdk/sha256-tree-hash';

const MiB = 1024 * 1024;

export function addChecksumHeaders(
    Sha256: HashConstructor,
    fromUtf8: Decoder,
) {
    return (next: BuildHandler<any, any, Blob>) => async ({
        request: { body, headers, ...requestRest },
        ...rest
    }: BuildHandlerArguments<any, Blob>) => {
        if (body) {
            const treeHash = !('x-amz-sha256-tree-hash' in headers)
                ? new TreeHash(Sha256, fromUtf8)
                : null;
            const contentHash = !('x-amz-content-sha256' in headers)
                ? new Sha256()
                : null;

            if (
                typeof body === 'string' ||
                ArrayBuffer.isView(body) ||
                isArrayBuffer(body)
            ) {
                contentHash && contentHash.update(body);
                treeHash && treeHash.update(body);
            } else if (isBlob(body)) {
                await blobReader(
                    body,
                    (chunk) => {
                        treeHash && treeHash.update(chunk);
                        contentHash && contentHash.update(chunk);
                    },
                    MiB
                );
            }

            for (const [headerName, hash] of <Array<[string, Hash]>>[
                ['x-amz-content-sha256', contentHash],
                ['x-amz-sha256-tree-hash', treeHash],
            ]) {
                if (hash) {
                    headers = {
                        ...headers,
                        [headerName]: toHex(await hash.digest()),
                    }
                }
            }
        }

        return next({
            ...rest,
            request: {
                ...requestRest,
                headers,
                body,
            }
        });
    }
}

function isBlob(arg: any): arg is Blob {
    return Boolean(arg)
        && Object.prototype.toString.call(arg) === '[object Blob]';
}
