import {isEmptyData} from './isEmptyData';
import {SHA_256_HMAC_ALGO} from './constants';
import {Hash, SourceData} from "@aws/types";
import {
    CryptoOperation,
    Key,
    MsWindow,
} from '@aws/crypto-ie11-detection';

export class Sha256 implements Hash {
    private operation: Promise<CryptoOperation>;

    constructor(secret?: SourceData) {
        if (secret) {
            this.operation = getKeyPromise(secret).then(keyData => (
                (window as MsWindow).msCrypto.subtle
                    .sign(SHA_256_HMAC_ALGO, keyData)
            ));
            this.operation.catch(() => {});
        } else {
            this.operation = Promise.resolve(
                (window as MsWindow).msCrypto.subtle
                    .digest('SHA-256')
            );
        }
    }

    update(toHash: SourceData): void {
        if (isEmptyData(toHash)) {
            return;
        }

        this.operation = this.operation.then(operation => {
            return toArrayBufferView(toHash).then(data => {
                operation.onerror = () => {
                    this.operation = Promise.reject(
                        new Error('Error encountered updating hash')
                    );
                };
                operation.process(data);

                return operation;
            });
        });
        this.operation.catch(() => {});
    }

    digest(): Promise<Uint8Array> {
        return this.operation.then(operation => new Promise((
            resolve,
            reject
        ) => {
            operation.onerror = () => {
                reject('Error encountered finalizing hash');
            };
            operation.oncomplete = () => {
                if (operation.result) {
                    resolve(new Uint8Array(operation.result));
                }
                reject('Error encountered finalizing hash');
            };

            operation.finish();
        }));
    }
}

function getKeyPromise(secret: SourceData): Promise<Key> {
    return toArrayBufferView(secret)
        .then(keyData => new Promise((resolve, reject) => {
            const keyOperation = (window as MsWindow).msCrypto.subtle.importKey(
                'raw',
                keyData,
                SHA_256_HMAC_ALGO,
                false,
                ['sign']
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
        }));
}

function toArrayBufferView(data: SourceData): Promise<ArrayBufferView> {
    if (typeof data === 'string') {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(new Uint8Array(reader.result));
            };
            reader.onerror = () => {
                reject(reader.error);
            };
            reader.readAsArrayBuffer(new Blob([data]));
        });
    }

    if (ArrayBuffer.isView(data)) {
        return Promise.resolve(data);
    }

    return Promise.resolve(new Uint8Array(data));
}

