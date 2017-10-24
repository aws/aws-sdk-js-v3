import { TokenSource } from './TokenSource';
/**
 * @see {TokenSource}
 *
 * Holders of a Token object may query if the associated operation has been
 * cancelled, register cancellation handlers, and conditionally throw an Error
 * if the operation has already been cancelled.
 */
export declare class Token {
    private readonly source;
    /**
     * Whether the associated operation may be cancelled at some point in the
     * future.
     */
    readonly cancellable: boolean;
    /**
     * Creates a new Token linked to a provided TokenSource. If no source is
     * provided, the Token cannot be cancelled.
     */
    constructor(source?: TokenSource | undefined);
    /**
     * Whether the associated operation has already been cancelled.
     */
    readonly isCancellationRequested: boolean;
    /**
     * Registers a handler to be invoked when cancellation is requested. If
     * cancellation has already been requested, the handler will be invoked on
     * the next tick of the event loop.
     */
    onCancellationRequested(cb: () => void): void;
    /**
     * Throws an error if the associated operation has already been cancelled.
     */
    throwIfCancellationRequested(reason?: string): void;
}
