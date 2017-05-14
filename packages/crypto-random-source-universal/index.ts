import {isNode} from '@aws/is-node';
import {
    randomValues as browserRandomValues
} from '@aws/crypto-random-source-browser';
import {
    randomValues as nodeRandomValues
} from '@aws/crypto-random-source-node';

export function randomValues(byteLength: number): Promise<Uint8Array> {
    if (isNode()) {
        return nodeRandomValues(byteLength);
    }

    return browserRandomValues(byteLength);
}
