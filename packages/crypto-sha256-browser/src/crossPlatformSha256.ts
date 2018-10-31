import {Sha256 as Ie11Sha256} from './ie11Sha256';
import {Sha256 as WebCryptoSha256} from './webCryptoSha256';
import {Sha256 as JsSha256} from '@aws-sdk/crypto-sha256-js';
import {Hash, SourceData} from '@aws-sdk/types';
import {supportsWebCrypto} from '@aws-sdk/crypto-supports-webCrypto';
import {isMsWindow} from "@aws-sdk/crypto-ie11-detection";
import {locateWindow} from '@aws-sdk/util-locate-window';

export class Sha256 implements Hash {
    private readonly hash: Hash;

    constructor(secret?: SourceData) {
        if (supportsWebCrypto(locateWindow())) {
            this.hash = new WebCryptoSha256(secret);
        } else if (isMsWindow(locateWindow())) {
            this.hash = new Ie11Sha256(secret);
        } else {
            this.hash = new JsSha256(secret);
        }
    }

    update(data: SourceData, encoding?: 'utf8' | 'ascii' | 'latin1'): void {
        this.hash.update(data, encoding);
    }

    digest(): Promise<Uint8Array> {
        return this.hash.digest();
    }
}
