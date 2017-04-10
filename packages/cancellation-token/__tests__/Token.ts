import {Token} from "../lib/Token";
import {TokenSource} from "../lib/TokenSource";

describe('Token', () => {
    it('should not be cancellable if no source provided at construction', () => {
        const token = new Token();

        expect(token.cancellable).toBe(false);
        expect(token.canceled).toBe(false);
    });

    it('should defer cancellation queries to parent token source', () => {
        const source = {isCancellationRequested: true};
        const token = new Token(<TokenSource>source);

        expect(token.canceled).toBe(true);
        source.isCancellationRequested = false;
        expect(token.isCancellationRequested).toBe(false);
    });

    it(
        'should register cancellation handlers when onCancellationRequested called',
        () => {
            const source = new TokenSource();
            source.registerCancellationHandler = jest.fn();
            const token = new Token(source);

            const cb = () => {};
            token.onCancellationRequested(cb);
            expect(source.registerCancellationHandler).toHaveBeenCalledWith(cb);
        }
    );

    it(
        'should throw if cancellation requested and throwIfCancellationRequested called',
        () => {
            const token = new Token(<TokenSource>{isCancellationRequested: true});

            expect(() => {
                token.throwIfCancellationRequested('PANIC PANIC PANIC');
            }).toThrow('PANIC PANIC PANIC');
        }
    );
});
