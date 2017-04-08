import TokenSource from './TokenSource';

export default class Token {
    public readonly cancellable: boolean;

    constructor(private readonly source?: TokenSource) {
        this.cancellable = Boolean(source);
    }

    get canBeCanceled(): boolean {
        return this.cancellable;
    }

    get canceled(): boolean {
        if (this.source) {
            return this.source.isCancellationRequested;
        }

        return false;
    }

    get isCancellationRequested(): boolean {
        return this.canceled;
    }

    onCancellationRequested(cb: () => void): void {
        if (this.source) {
            this.source.registerCancellationHandler(cb);
        }
    }

    throwIfCancellationRequested(reason?: string): void {
        if (this.canceled) {
            throw new Error(reason);
        }
    }
}
