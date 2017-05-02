import {CryptoProvider, SourceData} from "@aws/types";
import {isEmptyData, emptyDataSha256} from '../isEmptyData';
import {Key} from './Key';
import {isMsWindow, MsCrypto} from './MsWindow';
import {KeyUsage} from "./MsSubtleCrypto";
import {ProviderOptions} from "../ProviderOptions";

export class Ie11CryptoProvider implements CryptoProvider {
    private readonly crypto: MsCrypto;

    constructor(options: ProviderOptions = {}) {
        if (isMsWindow(window)) {
            this.crypto = window.msCrypto;
        } else {
            throw new Error('The IE11 Crypto Provider may only be used in IE11');
        }
    }

    sha256Digest(toHash: SourceData): Promise<Uint8Array> {
        if (isEmptyData(toHash)) {
            return emptyDataSha256();
        }

        return new Promise<Uint8Array>((resolve, reject) => {
            const digestOperation = this.crypto.subtle.digest('SHA-256');

            digestOperation.oncomplete = () => {
                if (digestOperation.result) {
                    resolve(new Uint8Array(digestOperation.result));
                } else {
                    reject('Digest operation completed without providing result.');
                }
            };

            digestOperation.onerror = () => {
                reject('Digest operation failed.');
            };

            toArrayBufferView(toHash)
                .then(data => {
                    digestOperation.process(data);
                    digestOperation.finish();
                });
        });
    }

    hmacSha256(toHash: SourceData, secret: SourceData): Promise<Uint8Array> {
        if (isEmptyData(toHash) || isEmptyData(secret)) {
            return Promise.reject('HMAC signatures cannot be generated with empty source data or empty key data.');
        }

        return toArrayBufferView(secret)
            .then<Key>(data => this.getSigningKey(
                data,
                {name: 'HMAC', hash: {name: 'SHA-256'}},
                false,
                ['sign']
            )).then<Uint8Array>(key => {
                return new Promise((resolve, reject) => {
                    const operation = this.crypto.subtle
                        .sign({name: 'HMAC', hash: {name: 'SHA-256'}}, key);

                    operation.oncomplete = () => {
                        if (operation.result) {
                            resolve(new Uint8Array(operation.result));
                        } else {
                            reject('Signing operation completed without providing result.');
                        }
                    };
                    operation.onerror = () => {
                        reject('Signing operation failed.');
                    };

                    toArrayBufferView(toHash).then(data => {
                        operation.process(data);
                        operation.finish();
                    });
                });
            });
    }

    randomValues(length: number): Promise<Uint8Array> {
        return new Promise<Uint8Array>(resolve => {
            const bytes = new Uint8Array(length);
            this.crypto.getRandomValues(bytes);
            resolve(bytes);
        });
    }

    private getSigningKey(
        keyData: ArrayBufferView,
        algorithm: any,
        extractable: boolean,
        usages: Array<KeyUsage>
    ): Promise<Key> {
        return new Promise<Key>((resolve, reject) => {
            const keyOperation = getCryptoInstance().subtle.importKey(
                'raw',
                keyData,
                algorithm,
                extractable,
                usages
            );

            keyOperation.oncomplete = () => {
                if (keyOperation.result) {
                    resolve(keyOperation.result);
                }

                reject('ImportKey completed without importing key.');
            };
            keyOperation.onerror = () => {
                reject('ImportKey failed to import key.');
            };
        });
    }
}

function toArrayBufferView(data: SourceData): Promise<ArrayBufferView> {
    if (typeof data === 'string') {
        return new Promise<ArrayBufferView>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(new Uint8Array(reader.result));
            };
            reader.onerror = () => {
                reject(reader.error);
            };
            reader.readAsArrayBuffer(new Blob([data]));
        });
    } else if (data instanceof ArrayBuffer) {
        return Promise.resolve<Uint8Array>(new Uint8Array(data));
    }

    return Promise.resolve(data);
}

let crypto: MsCrypto|undefined;
function getCryptoInstance(): MsCrypto {
    if (crypto) {
        return crypto;
    }

    if (!isMsWindow(window)) {
        throw new Error('The IE11 Crypto Provider may only be used in IE11');
    }
    crypto = window.msCrypto;

    return crypto;
}
