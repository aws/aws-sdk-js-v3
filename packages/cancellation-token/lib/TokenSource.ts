import {Token} from "./Token";

/**
 * The AWS SDK uses a TokenSource/Token model to allow for cooperative
 * cancellation of asynchronous operations. When initiating such an operation,
 * the caller can create a TokenSource and then provide linked tokens to
 * subtasks. This allows a single source to signal to multiple consumers that a
 * cancellation has been requested without dictating how that cancellation
 * should be handled.
 *
 * Holders of a TokenSource object may create new tokens, register cancellation
 * handlers, or declare an operation cancelled (thereby invoking any registered
 * handlers).
 */
export class TokenSource {
    private _cancellationRequested: boolean = false;
    private _invokeAfterCancellation: Array<() => void> = [];

    /**
     * Whether the operation associated with this TokenSource has been
     * cancelled.
     */
    get isCancellationRequested(): boolean {
        return this._cancellationRequested;
    }

    /**
     * Creates a new Token object linked to this TokenSource (i.e., one that
     * will signal cancellation when this source has been cancelled).
     */
    get token(): Token {
        return new Token(this);
    }

    /**
     * Declares the operation associated with this TokenSource to be cancelled
     * and invokes any registered cancellation handlers. The latter may be
     * skipped if so desired.
     */
    cancel(invokeRegisteredActions: boolean = true): void {
        this._cancellationRequested = true;

        if (invokeRegisteredActions) {
            while (this._invokeAfterCancellation.length > 0) {
                let action = this._invokeAfterCancellation.shift();
                if (action) {
                    setTimeout(action, 0);
                }
            }
        }
    }

    /**
     * Adds a handler to be invoked when cancellation of the associated
     * operation has been requested. If cancellation has already been requested,
     * the handler will be invoked on the next tick of the event loop.
     */
    registerCancellationHandler(handler: () => void): void {
        if (this._cancellationRequested) {
            setTimeout(handler, 0);
        } else {
            this._invokeAfterCancellation.push(handler);
        }
    }
}
