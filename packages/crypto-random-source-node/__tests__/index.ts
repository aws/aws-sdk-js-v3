import {randomValues} from "../";
import {fromString} from "@aws/util-buffer-from";

jest.mock('crypto', () => {
    interface ByteSource {
        (size: number): Buffer;
    }

    interface CryptoModule {
        __setByteSource(source: ByteSource): void;
        __clearByteSource(): void;
        randomBytes(
            size: number,
            cb: (err: Error|null, buf?: Buffer) => void
        ): void;
    }

    let byteSource: ByteSource|undefined;
    const cryptoModule = <CryptoModule>jest.genMockFromModule('crypto');
    cryptoModule.__setByteSource = (source: ByteSource) => {
        byteSource = source;
    };
    cryptoModule.__clearByteSource = () => { byteSource = void 0; };
    cryptoModule.randomBytes = (size, cb) => {
        if (byteSource) {
            try {
                cb(null, byteSource(size));
            } catch (e) {
                cb(e);
            }
        } else {
            throw new Error('No byte source defined');
        }
    };

    return cryptoModule;
});
import * as crypto from 'crypto';
const {__setByteSource, __clearByteSource} = crypto as any;

beforeEach(__clearByteSource);

describe('randomValues', () => {
    it('should return a promise fulfilled with random bytes', async () => {
        __setByteSource(
            (size: number) => fromString(new Array(size + 1).join('ee'), 'hex')
        );

        expect((await randomValues(10)).byteLength).toEqual(10);
    });

    it(
        'should reject the promise when the Node crypto source is unavailable',
        async () => {
            __setByteSource(
                () => { throw new Error('Not on my watch!'); }
            );

            await randomValues(10).then(
                () => { throw new Error('The promise should have been rejected'); },
                () => { /* promise rejected, just as expected */ }
            );
        }
    )
});
