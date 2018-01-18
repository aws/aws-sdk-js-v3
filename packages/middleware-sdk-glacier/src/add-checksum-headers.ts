import {
    BuildHandler,
    BuildHandlerArguments,
    ConvertToUint8Array,
    HandlerExecutionContext,
    HashConstructor
} from '@aws/types';

import {toHex} from '@aws/util-hex-encoding';
import {ChecksumGenerator} from '@aws/glacier-checksum-generator';

export function addChecksumHeaders(
    Sha256: HashConstructor,
    bodyResolver: ConvertToUint8Array
) {
    const checksumGenerator = new ChecksumGenerator(Sha256);

    return (next: BuildHandler<any, any, any>) => {
        return async(args: BuildHandlerArguments<any, any>) => {
            const request = args.request;
            if (!request) {
                throw new Error('Unable to add checksums due to missing request.');
            }

            const hasTreeHash = !!request.headers['x-amz-sha256-tree-hash'];
            const hasContentHash = !!request.headers['x-amz-content-sha256'];
            if (request.body && (!hasTreeHash || !hasContentHash)) {
                const body = await bodyResolver(request.body);
                const hashes = await checksumGenerator.computeChecksum(body);
                if (!hasContentHash) {
                    request.headers['x-amz-content-sha256'] = toHex(hashes.linearHash);
                }
                if (!hasTreeHash) {
                    request.headers['x-amz-sha256-tree-hash'] = toHex(hashes.treeHash);
                }
            }

            return next(args);
        }
    }
}