import {Sha256 as BrowserSha256} from '@aws/crypto-sha256-browser';
import {Sha256 as NodeSha256} from '@aws/crypto-sha256-node';
import {Hash, SourceData} from '@aws/types';

export class Sha256 implements Hash {
    private readonly hash: Hash;

    constructor(secret?: SourceData) {
        if (supportsCryptoModule()) {
            this.hash = new NodeSha256(secret);
        } else {
            this.hash = new BrowserSha256(secret);
        }
    }

    update(data: SourceData, encoding?: 'utf8' | 'ascii' | 'latin1'): void {
        this.hash.update(data, encoding);
    }

    digest(): Promise<Uint8Array> {
        return this.hash.digest();
    }
}

function supportsCryptoModule(): boolean {
    try {
        require('crypto');
        return true;
    } catch {
        return false;
    }
}
