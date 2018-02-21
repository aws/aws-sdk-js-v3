class AbortSignal {
    constructor() {
        Object.defineProperty(this, '_aborted', {
            value: false,
            writable: true,
        });
    }
    /**
     * Whether the associated operation has already been cancelled.
     */
    get aborted() {
        return this._aborted;
    }
    /**
     * @internal
     */
    abort() {
        this._aborted = true;
        if (this.onabort) {
            this.onabort();
            this.onabort = undefined;
        }
    }
}

class AbortController {
    constructor() {
        this.signal = new AbortSignal();
    }
    abort() {
        this.signal.abort();
    }
}

export { AbortController, AbortSignal };
