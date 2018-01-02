import {
    Decoder,
    BuildHandler,
    BuildHandlerArguments,
    HandlerExecutionContext,
    HashConstructor,
} from '@aws/types';

import {toHex} from '@aws/util-hex-encoding';
import {ChecksumGenerator} from '@aws/glacier-checksum-generator';

export function addChecksumHeaders(
    Sha256: HashConstructor,
    utf8Decoder: Decoder
) {
    const checksumGenerator = new ChecksumGenerator(Sha256);

    return (next: BuildHandler<any, any, any>) => {
        return async(args: BuildHandlerArguments<any, any>) => {
            const request = args.request;
            if (!request) {
                throw new Error('Unable to add checksums due to missing request.');
            }

            if (request.body) {
                const body = typeof request.body === 'string' ? utf8Decoder(request.body) : request.body;
                const hashes = await checksumGenerator.computeChecksum(body);
                request.headers['x-amz-content-sha256'] = toHex(hashes.linearHash);
                if (!request.headers['x-amz-sha256-tree-hash']) {
                    request.headers['x-amz-sha256-tree-hash'] = toHex(hashes.treeHash);
                }
            }

            return next(args);
        }
    }
}