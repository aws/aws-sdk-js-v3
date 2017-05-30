import {supportsWebCrypto} from "../lib/supportsWebCrypto";

const fakeWindow: Window = {
    crypto: {
        getRandomValues: () => {},
        subtle: {
            decrypt(alg: any, key: any) { return {} as any; },
            digest(alg: any) { return {} as any; },
            encrypt(alg: any, key: any) { return {} as any; },
            exportKey(format: any, key: any) { return {} as any; },
            generateKey(alg: any) { return {} as any; },
            importKey(format: any, keyData: any, alg: any) { return {} as any; },
            sign(alg: any, key: any) { return {} as any; },
            verify(alg: any, key: any, signature: any) { return {} as any; },
        },
    },
} as any;

describe('isMsWindow', () => {
    it(
        'should return false if an object does not fulfill the WebCrypto interface',
        () => {
            expect(supportsWebCrypto({} as any)).toBe(false);
        }
    );

    it(
        'should return false if an object fulfills the WebCrypto interface',
        () => {
            expect(supportsWebCrypto(fakeWindow)).toBe(true);
        }
    );
});
