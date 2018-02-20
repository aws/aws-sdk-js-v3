import { Readable } from 'stream';
import { isNode } from '@aws/is-node';
import {
    addChecksumHeaders as browserAddChecksumHeaders
} from '@aws/add-glacier-checksum-headers-browser';
import {
    addChecksumHeaders as nodeAddChecksumHeaders
} from '@aws/add-glacier-checksum-headers-node';
import {
    BuildMiddleware,
    HashConstructor,
    Decoder,
} from '@aws/types';

export function addChecksumHeaders(
    Sha256: HashConstructor,
    fromUtf8: Decoder
): BuildMiddleware<any, any, any> {
    if (isNode()) {
        return nodeAddChecksumHeaders(Sha256, fromUtf8);
    }

    return browserAddChecksumHeaders(Sha256, fromUtf8);
}
