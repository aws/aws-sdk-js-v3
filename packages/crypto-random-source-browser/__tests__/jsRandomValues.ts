import {randomValues} from '../lib/jsRandomValues';

jest.mock('@aws/crypto-sjcl-random', () => {
    return {
        isReady: jest.fn(),
        randomWords: jest.fn(),
        startCollectors: jest.fn(),
        stopCollectors: jest.fn(),
    };
});
import {
    isReady,
    randomWords,
    startCollectors,
    stopCollectors,
} from '@aws/crypto-sjcl-random';

beforeEach(() => {
    jest.resetAllMocks();
});

describe('randomValues', () => {
    it('should call the SJCL random source', async () => {
        (isReady as any).mockReturnValue(true);
        (randomWords as any).mockReturnValue([0]);

        expect(await randomValues(3))
            .toMatchObject(Uint8Array.from([0, 0, 0]));
    });

    it(
        'should convert a failed random generation into a promise rejection',
        async () => {
            (isReady as any).mockReturnValue(true);
            (randomWords as any).mockImplementation(() => {
                throw new Error('PANIC PANIC')
            });

            await randomValues(12).then(
                () => { throw new Error('The promise should have been rejected'); },
                () => { /* promise rejected, just as expected */ }
            );
        }
    );

    it(
        'should start and stop entropy collection if the source is not ready',
        async () => {
            jest.useFakeTimers();

            (isReady as any).mockReturnValueOnce(false);
            (isReady as any).mockReturnValueOnce(true);
            (randomWords as any).mockReturnValue([0]);

            const promise = randomValues(3);

            expect((isReady as any).mock.calls.length).toBe(1);
            expect((startCollectors as any).mock.calls.length).toBe(1);
            expect((stopCollectors as any).mock.calls.length).toBe(0);

            jest.runAllTimers();

            expect((isReady as any).mock.calls.length).toBe(2);
            expect((stopCollectors as any).mock.calls.length).toBe(1);

            expect(await promise)
                .toMatchObject(Uint8Array.from([0, 0, 0]));
        }
    );
});
