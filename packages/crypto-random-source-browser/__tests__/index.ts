import {randomValues} from '../';

jest.mock('@aws/crypto-ie11-detection', () => {
    return { isMsWindow: jest.fn() };
});
import {isMsWindow} from '@aws/crypto-ie11-detection';
jest.mock('@aws/crypto-supports-webCrypto', () => {
    return { supportsWebCrypto: jest.fn() };
});
import {supportsWebCrypto} from '@aws/crypto-supports-webCrypto';

jest.mock('../lib/ie11RandomValues', () => {
    return { randomValues: jest.fn() };
});
import {randomValues as ie11RandomValues} from '../lib/ie11RandomValues';

jest.mock('../lib/jsRandomValues', () => {
    return { randomValues: jest.fn() };
});
import {randomValues as jsRandomValues} from '../lib/jsRandomValues';

jest.mock('../lib/webCryptoRandomValues', () => {
    return { randomValues: jest.fn() };
});
import {randomValues as webCryptoRandomValues} from '../lib/webCryptoRandomValues';

beforeEach(() => {
    (isMsWindow as any).mockReset();
    (supportsWebCrypto as any).mockReset();
    (ie11RandomValues as any).mockReset();
    (jsRandomValues as any).mockReset();
    (webCryptoRandomValues as any).mockReset();
});

describe('implementation selection', () => {
    it('should use WebCrypto when available', async () => {
        (supportsWebCrypto as any).mockImplementation(() => true);

        await randomValues(1);

        expect((webCryptoRandomValues as any).mock.calls.length).toBe(1);
        expect((jsRandomValues as any).mock.calls.length).toBe(0);
    });

    it('should use IE 11 WebCrypto when available', async () => {
        (isMsWindow as any).mockImplementation(() => true);

        await randomValues(1);

        expect((ie11RandomValues as any).mock.calls.length).toBe(1);
        expect((jsRandomValues as any).mock.calls.length).toBe(0);
    });

    it(
        'should prefer standards-compliant WebCrypto over IE 11 WebCrypto',
        async () => {
            (supportsWebCrypto as any).mockImplementation(() => true);
            (isMsWindow as any).mockImplementation(() => true);

            await randomValues(1);

            expect((webCryptoRandomValues as any).mock.calls.length).toBe(1);
            expect((ie11RandomValues as any).mock.calls.length).toBe(0);
            expect((jsRandomValues as any).mock.calls.length).toBe(0);
        }
    );

    it('should fall back on the SJCL', async () => {
        (supportsWebCrypto as any).mockImplementation(() => false);
        (isMsWindow as any).mockImplementation(() => false);

        await randomValues(1);

        expect((webCryptoRandomValues as any).mock.calls.length).toBe(0);
        expect((ie11RandomValues as any).mock.calls.length).toBe(0);
        expect((jsRandomValues as any).mock.calls.length).toBe(1);
    });
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

    it(
        'should fall back to the SJCL if neither window nor self is defined',
        async () => {
            await randomValues(1);

            expect((webCryptoRandomValues as any).mock.calls.length).toBe(0);
            expect((ie11RandomValues as any).mock.calls.length).toBe(0);
            expect((jsRandomValues as any).mock.calls.length).toBe(1);
        }
    );

    it('should use `self` if window is not defined', async () => {
        (global as any).self = _self;

        await randomValues(1);

        expect((supportsWebCrypto as any).mock.calls.length).toBe(1);
        expect((supportsWebCrypto as any).mock.calls[0][0]).toBe(_self);
    });
});
