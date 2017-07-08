import {Sha256} from '../lib/crossPlatformSha256';
import {Sha256 as Ie11Sha256} from '../lib/ie11Sha256';
import {Sha256 as JsSha256} from '../lib/jsSha256';
import {Sha256 as WebCryptoSha256} from '../lib/webCryptoSha256';
import {locateWindow} from '@aws/util-locate-window';

jest.mock('@aws/crypto-ie11-detection', () => {
    return { isMsWindow: jest.fn() };
});
import {isMsWindow} from '@aws/crypto-ie11-detection';
jest.mock('@aws/crypto-supports-webCrypto', () => {
    return { supportsWebCrypto: jest.fn() };
});
import {supportsWebCrypto} from '@aws/crypto-supports-webCrypto';

beforeEach(() => {
    (isMsWindow as any).mockReset();
    (supportsWebCrypto as any).mockReset();
});

describe('Sha256', () => {
    it('should use the WebCrypto implementation where supported', () => {
        (supportsWebCrypto as any).mockReturnValue(true);

        const sha256 = new Sha256();
        expect((sha256 as any).hash).toBeInstanceOf(WebCryptoSha256);
    });

    it('should use the IE 11 implementation when in IE 11', () => {
        (isMsWindow as any).mockReturnValue(true);

        // Ensure Ie11Sha256 is able to refer to the symbols guaranteed by a
        // `true` response from `isMsWindow`
        (locateWindow() as any).msCrypto = {subtle: {digest: jest.fn()}};

        const sha256 = new Sha256();
        expect((sha256 as any).hash).toBeInstanceOf(Ie11Sha256);
    });

    it('should prefer the WebCrypto implementation over the IE 11 one', () => {
        (supportsWebCrypto as any).mockReturnValue(true);
        (isMsWindow as any).mockReturnValue(true);

        const sha256 = new Sha256();
        expect((sha256 as any).hash).toBeInstanceOf(WebCryptoSha256);
    });

    it(
        'should fall back on the SJCL when WebCrypto and IE 11 WebCrypto are not available',
        () => {
            (supportsWebCrypto as any).mockReturnValue(false);
            (isMsWindow as any).mockReturnValue(false);

            const sha256 = new Sha256();
            expect((sha256 as any).hash).toBeInstanceOf(JsSha256);
        }
    );

    it('should proxy method calls to underlying implementation', () => {
        const sha256 = new Sha256();
        const hashMock = {
            update: jest.fn(),
            digest: jest.fn(),
        };
        (sha256 as any).hash = hashMock;

        sha256.update('foo', 'utf8');
        expect(hashMock.update.mock.calls.length).toBe(1);
        expect(hashMock.update.mock.calls[0]).toEqual(['foo', 'utf8']);

        const promise = sha256.digest();
        expect(hashMock.digest.mock.calls.length).toBe(1);
    });
});
