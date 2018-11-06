import {randomValues} from './';

jest.mock('@aws-sdk/crypto-ie11-detection', () => {
    return { isMsWindow: jest.fn() };
});
import {isMsWindow} from '@aws-sdk/crypto-ie11-detection';
jest.mock('@aws-sdk/crypto-supports-webCrypto', () => {
    return { supportsWebCrypto: jest.fn() };
});
import {supportsWebCrypto} from '@aws-sdk/crypto-supports-webCrypto';

jest.mock('./ie11RandomValues', () => {
    return { randomValues: jest.fn() };
});
import {randomValues as ie11RandomValues} from './ie11RandomValues';

jest.mock('./webCryptoRandomValues', () => {
    return { randomValues: jest.fn() };
});
import {randomValues as webCryptoRandomValues} from './webCryptoRandomValues';

beforeEach(() => {
    (isMsWindow as any).mockReset();
    (supportsWebCrypto as any).mockReset();
    (ie11RandomValues as any).mockReset();
    (webCryptoRandomValues as any).mockReset();
});

describe('implementation selection', () => {
    it('should use WebCrypto when available', async () => {
        (supportsWebCrypto as any).mockImplementation(() => true);

        await randomValues(1);

        expect((webCryptoRandomValues as any).mock.calls.length).toBe(1);
        expect((ie11RandomValues as any).mock.calls.length).toBe(0);
    });

    it('should use IE 11 WebCrypto when available', async () => {
        (isMsWindow as any).mockImplementation(() => true);

        await randomValues(1);

        expect((ie11RandomValues as any).mock.calls.length).toBe(1);
        expect((webCryptoRandomValues as any).mock.calls.length).toBe(0);
    });

    it(
        'should prefer standards-compliant WebCrypto over IE 11 WebCrypto',
        async () => {
            (supportsWebCrypto as any).mockImplementation(() => true);
            (isMsWindow as any).mockImplementation(() => true);

            await randomValues(1);

            expect((webCryptoRandomValues as any).mock.calls.length).toBe(1);
            expect((ie11RandomValues as any).mock.calls.length).toBe(0);
        }
    );

    it(
        'should throw if neither WebCrypto nor IE 11 Crypto is available',
        async () => {
            await expect(randomValues(1)).rejects.toMatchObject(
                new Error('Unable to locate secure random source.')
            );

            expect((webCryptoRandomValues as any).mock.calls.length).toBe(0);
            expect((ie11RandomValues as any).mock.calls.length).toBe(0);
        }
    );
});

describe('global detection', () => {
    const _window = (global as any).window || {};
    const _self = (global as any).self || {};

    beforeEach(() => {
        (global as any).window = undefined;
        (global as any).self = undefined;
    });

    afterAll(() => {
        (global as any).window = _window;
        (global as any).self = _self;
    });

    it('should throw if neither window nor self is defined', async () => {
        await expect(randomValues(1)).rejects.toMatchObject(
            new Error('Unable to locate secure random source.')
        );

        expect((webCryptoRandomValues as any).mock.calls.length).toBe(0);
        expect((ie11RandomValues as any).mock.calls.length).toBe(0);
    });

    it('should use `self` if window is not defined', async () => {
        (global as any).self = _self;

        try {
            await randomValues(1);
        } catch {}

        expect((supportsWebCrypto as any).mock.calls.length).toBe(1);
        expect((supportsWebCrypto as any).mock.calls[0][0]).toBe(_self);
    });
});
