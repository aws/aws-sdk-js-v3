import {Token} from "../lib/Token";
import {TokenSource} from "../lib/TokenSource";

jest.useFakeTimers();

describe('TokenSource', () => {
    it('should return a new token on each property access', () => {
        const source = new TokenSource();
        const token = source.token;
        expect(token).toBeInstanceOf(Token);
        expect(source.token).not.toBe(token);
    });

    it(
        'should report that cancellation was requested after cancel called',
        () => {
            const source = new TokenSource();
            expect(source.isCancellationRequested).toBe(false);
            source.cancel();
            expect(source.isCancellationRequested).toBe(true);
        }
    );

    it('should invoke registered cancellation handlers on cancellation', () => {
        const source = new TokenSource();
        const cb = jest.fn();
        source.registerCancellationHandler(cb);
        expect(cb).not.toHaveBeenCalled();
        source.cancel();
        jest.runAllTimers();
        expect(cb).toHaveBeenCalled();
    });

    it(
        'should not invoke registered handlers if silent cancellation requested',
        () => {
            const source = new TokenSource();
            const cb = jest.fn();
            source.registerCancellationHandler(cb);
            expect(cb).not.toHaveBeenCalled();
            source.cancel(false);
            jest.runAllTimers();
            expect(cb).not.toHaveBeenCalled();
        }
    );

    it(
        'should invoke cancellation handlers immediately if cancellation already requested',
        () => {
            const timeoutMock = <any>setTimeout;

            const source = new TokenSource();
            const cb = jest.fn();
            source.cancel(false);
            source.registerCancellationHandler(cb);
            expect(timeoutMock).toHaveBeenCalledWith(cb, 0);
            jest.runAllTimers();
            expect(cb).toHaveBeenCalled();
        }
    );
});
