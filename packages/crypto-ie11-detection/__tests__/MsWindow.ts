import {isMsWindow, MsWindow} from "../lib/MsWindow";

const fakeMsWindow: MsWindow = {
    MSInputMethodContext: {},
    msCrypto: {
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

jest.mock('../lib/isNativeCode', () => {
    return { isNativeCode: jest.fn() };
});
import {isNativeCode as isNativeCodeMock} from '../lib/isNativeCode';

beforeEach(() => {
    (isNativeCodeMock as any).mockClear();
});

describe('isMsWindow', () => {
    it(
        'should return false if an object does not fulfill the MsWindow interface',
        () => {
            expect(isMsWindow({} as any)).toBe(false);
        }
    );

    it(
        'should return false if an object fulfills the MsWindow interface but SubtleCrypto methods are user-defined',
        () => {
            (isNativeCodeMock as any).mockReturnValue(false);
            expect(isMsWindow(fakeMsWindow)).toBe(false);
        }
    );

    it(
        'should return true if an object fulfills the MsWindow interface and the SubtleCrypto methods are native code',
        () => {
            (isNativeCodeMock as any).mockReturnValue(true);
            expect(isMsWindow(fakeMsWindow)).toBe(true);
        }
    );
});
