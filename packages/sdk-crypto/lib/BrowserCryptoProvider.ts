import CryptoProvider, {ProviderOptions, SourceData} from "./CryptoProvider";
import {isSafariWindow} from "./SafariWindow";
import isEmptyData, {emptyDataSha256} from './isEmptyData';

const SHA_256_HASH = {name: 'SHA-256'};
const SHA_256_HMAC_ALGO = {name: 'HMAC', hash: SHA_256_HASH};

export default class BrowserCryptoProvider implements CryptoProvider {
    private readonly encoder: TextEncoding.TextEncoder|undefined;
    private readonly inputEncoding: string;

    constructor(options: ProviderOptions = {}) {
        const {inputEncoding = 'utf8'} = options;
        this.inputEncoding = inputEncoding;
        if ('TextEncoder' in window) {
            this.encoder = new TextEncoder(inputEncoding);
        }
    }

    sha256Digest(toHash: SourceData): Promise<Uint8Array> {
        if (isEmptyData(toHash)) {
            return emptyDataSha256();
        }

        return this.convertToBuffer(toHash)
            .then<ArrayBuffer>(data => getSubtleCryptoInstance().digest(SHA_256_HASH, data))
            .then<Uint8Array>(buffer => new Uint8Array(buffer));
    }

    hmacSha256(toHash: SourceData, secret: SourceData): Promise<Uint8Array> {
        if (isEmptyData(secret)) {
            return Promise.reject('HMAC signatures cannot be generated with empty key data.');
        }

        const subtle = getSubtleCryptoInstance();

        return this.convertToBuffer(secret)
            .then(keyData => subtle.importKey(
                'raw',
                keyData,
                SHA_256_HMAC_ALGO,
                false,
                ['sign']
            )).then<ArrayBuffer>(key => {
                return this.convertToBuffer(toHash)
                    .then(data => subtle.sign(SHA_256_HMAC_ALGO, key, data));
            }).then<Uint8Array>(buffer => new Uint8Array(buffer))
    }

    randomValues(length: number): Promise<Uint8Array> {
        const randomBytes = new Uint8Array(length);
        window.crypto.getRandomValues(randomBytes);

        return Promise.resolve<Uint8Array>(randomBytes);
    }

    private convertToBuffer(data: SourceData): Promise<ArrayBuffer|ArrayBufferView> {
        if (typeof data === 'string') {
            if (this.encoder) {
                return Promise.resolve(this.encoder.encode(data));
            }

            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    resolve(reader.result);
                };
                reader.onerror = () => {
                    reject(reader.error);
                };
                reader.readAsArrayBuffer(new Blob([data]));
            });
        }

        return Promise.resolve(data);
    }
}

let subtle: SubtleCrypto|undefined;
function getSubtleCryptoInstance(): SubtleCrypto {
    if (subtle) {
        return subtle;
    }

    if (isSafariWindow(window)) {
        subtle = window.crypto.webkitSubtle;
    } else {
        subtle = window.crypto.subtle;
    }

    return subtle;
}
