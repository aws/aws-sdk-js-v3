import {isEmptyData} from './isEmptyData';
import {SHA_256_HMAC_ALGO} from './constants';
import {Hash, SourceData} from "@aws/types";
import {fromUtf8} from '@aws/util-utf8-browser';
import {
    CryptoOperation,
    Key,
    MsWindow,
} from '@aws/crypto-ie11-detection';
import {locateWindow} from '@aws/util-locate-window';

export class Sha256 implements Hash {
    private operation: Promise<CryptoOperation>;

    constructor(secret?: SourceData) {
        if (secret) {
            this.operation = getKeyPromise(secret).then(keyData => (
                (locateWindow() as MsWindow).msCrypto.subtle
                    .sign(SHA_256_HMAC_ALGO, keyData)
            ));
            this.operation.catch(() => {});
        } else {
            this.operation = Promise.resolve(
                (locateWindow() as MsWindow).msCrypto.subtle
                    .digest('SHA-256')
            );
        }
    }

    update(toHash: SourceData): void {
        if (isEmptyData(toHash)) {
            return;
        }

        this.operation = this.operation.then(operation => {
            operation.onerror = () => {
                this.operation = Promise.reject(
                    new Error('Error encountered updating hash')
                );
            };
            operation.process(toArrayBufferView(toHash));

            return operation;
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
    return new Promise((resolve, reject) => {
        const keyOperation = (locateWindow() as MsWindow).msCrypto.subtle
            .importKey(
                'raw',
                toArrayBufferView(secret),
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
    });
}

function toArrayBufferView(data: SourceData): Uint8Array {
    if (typeof data === 'string') {
        return fromUtf8(data);
    }

    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(
            data.buffer,
            data.byteOffset,
            data.byteLength / Uint8Array.BYTES_PER_ELEMENT
        );
    }

    return new Uint8Array(data);
}

