"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Token_1 = require("./Token");
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
var TokenSource = (function () {
    function TokenSource() {
        this._cancellationRequested = false;
        this._invokeAfterCancellation = [];
    }
    Object.defineProperty(TokenSource.prototype, "isCancellationRequested", {
        /**
         * Whether the operation associated with this TokenSource has been
         * cancelled.
         */
        get: function () {
            return this._cancellationRequested;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Declares the operation associated with this TokenSource to be cancelled
     * and invokes any registered cancellation handlers. The latter may be
     * skipped if so desired.
     */
    TokenSource.prototype.cancel = function (invokeRegisteredActions) {
        if (invokeRegisteredActions === void 0) { invokeRegisteredActions = true; }
        this._cancellationRequested = true;
        if (invokeRegisteredActions) {
            while (this._invokeAfterCancellation.length > 0) {
                var action = this._invokeAfterCancellation.shift();
                if (action) {
                    setTimeout(action, 0);
                }
            }
        }
    };
    /**
     * Creates a new Token object linked to this TokenSource (i.e., one that
     * will signal cancellation when this source has been cancelled).
     */
    TokenSource.prototype.getToken = function () {
        return new Token_1.Token(this);
    };
    /**
     * Adds a handler to be invoked when cancellation of the associated
     * operation has been requested. If cancellation has already been requested,
     * the handler will be invoked on the next tick of the event loop.
     */
    TokenSource.prototype.registerCancellationHandler = function (handler) {
        if (this._cancellationRequested) {
            setTimeout(handler, 0);
        }
        else {
            this._invokeAfterCancellation.push(handler);
        }
    };
    return TokenSource;
}());
exports.TokenSource = TokenSource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW5Tb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvVG9rZW5Tb3VyY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQ0FBOEI7QUFFOUI7Ozs7Ozs7Ozs7O0dBV0c7QUFDSDtJQUFBO1FBQ1ksMkJBQXNCLEdBQVksS0FBSyxDQUFDO1FBQ3hDLDZCQUF3QixHQUFzQixFQUFFLENBQUM7SUFnRDdELENBQUM7SUExQ0csc0JBQUksZ0RBQXVCO1FBSjNCOzs7V0FHRzthQUNIO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztRQUN2QyxDQUFDOzs7T0FBQTtJQUVEOzs7O09BSUc7SUFDSCw0QkFBTSxHQUFOLFVBQU8sdUJBQXVDO1FBQXZDLHdDQUFBLEVBQUEsOEJBQXVDO1FBQzFDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDOUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNuRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNULFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCw4QkFBUSxHQUFSO1FBQ0ksTUFBTSxDQUFDLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaURBQTJCLEdBQTNCLFVBQTRCLE9BQW1CO1FBQzNDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDOUIsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDTCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUb2tlbn0gZnJvbSBcIi4vVG9rZW5cIjtcblxuLyoqXG4gKiBUaGUgQVdTIFNESyB1c2VzIGEgVG9rZW5Tb3VyY2UvVG9rZW4gbW9kZWwgdG8gYWxsb3cgZm9yIGNvb3BlcmF0aXZlXG4gKiBjYW5jZWxsYXRpb24gb2YgYXN5bmNocm9ub3VzIG9wZXJhdGlvbnMuIFdoZW4gaW5pdGlhdGluZyBzdWNoIGFuIG9wZXJhdGlvbixcbiAqIHRoZSBjYWxsZXIgY2FuIGNyZWF0ZSBhIFRva2VuU291cmNlIGFuZCB0aGVuIHByb3ZpZGUgbGlua2VkIHRva2VucyB0b1xuICogc3VidGFza3MuIFRoaXMgYWxsb3dzIGEgc2luZ2xlIHNvdXJjZSB0byBzaWduYWwgdG8gbXVsdGlwbGUgY29uc3VtZXJzIHRoYXQgYVxuICogY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZCB3aXRob3V0IGRpY3RhdGluZyBob3cgdGhhdCBjYW5jZWxsYXRpb25cbiAqIHNob3VsZCBiZSBoYW5kbGVkLlxuICpcbiAqIEhvbGRlcnMgb2YgYSBUb2tlblNvdXJjZSBvYmplY3QgbWF5IGNyZWF0ZSBuZXcgdG9rZW5zLCByZWdpc3RlciBjYW5jZWxsYXRpb25cbiAqIGhhbmRsZXJzLCBvciBkZWNsYXJlIGFuIG9wZXJhdGlvbiBjYW5jZWxsZWQgKHRoZXJlYnkgaW52b2tpbmcgYW55IHJlZ2lzdGVyZWRcbiAqIGhhbmRsZXJzKS5cbiAqL1xuZXhwb3J0IGNsYXNzIFRva2VuU291cmNlIHtcbiAgICBwcml2YXRlIF9jYW5jZWxsYXRpb25SZXF1ZXN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9pbnZva2VBZnRlckNhbmNlbGxhdGlvbjogQXJyYXk8KCkgPT4gdm9pZD4gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIG9wZXJhdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhpcyBUb2tlblNvdXJjZSBoYXMgYmVlblxuICAgICAqIGNhbmNlbGxlZC5cbiAgICAgKi9cbiAgICBnZXQgaXNDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW5jZWxsYXRpb25SZXF1ZXN0ZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVjbGFyZXMgdGhlIG9wZXJhdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhpcyBUb2tlblNvdXJjZSB0byBiZSBjYW5jZWxsZWRcbiAgICAgKiBhbmQgaW52b2tlcyBhbnkgcmVnaXN0ZXJlZCBjYW5jZWxsYXRpb24gaGFuZGxlcnMuIFRoZSBsYXR0ZXIgbWF5IGJlXG4gICAgICogc2tpcHBlZCBpZiBzbyBkZXNpcmVkLlxuICAgICAqL1xuICAgIGNhbmNlbChpbnZva2VSZWdpc3RlcmVkQWN0aW9uczogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fY2FuY2VsbGF0aW9uUmVxdWVzdGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoaW52b2tlUmVnaXN0ZXJlZEFjdGlvbnMpIHtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9pbnZva2VBZnRlckNhbmNlbGxhdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFjdGlvbiA9IHRoaXMuX2ludm9rZUFmdGVyQ2FuY2VsbGF0aW9uLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGFjdGlvbiwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBUb2tlbiBvYmplY3QgbGlua2VkIHRvIHRoaXMgVG9rZW5Tb3VyY2UgKGkuZS4sIG9uZSB0aGF0XG4gICAgICogd2lsbCBzaWduYWwgY2FuY2VsbGF0aW9uIHdoZW4gdGhpcyBzb3VyY2UgaGFzIGJlZW4gY2FuY2VsbGVkKS5cbiAgICAgKi9cbiAgICBnZXRUb2tlbigpOiBUb2tlbiB7XG4gICAgICAgIHJldHVybiBuZXcgVG9rZW4odGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGhhbmRsZXIgdG8gYmUgaW52b2tlZCB3aGVuIGNhbmNlbGxhdGlvbiBvZiB0aGUgYXNzb2NpYXRlZFxuICAgICAqIG9wZXJhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuIElmIGNhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZCxcbiAgICAgKiB0aGUgaGFuZGxlciB3aWxsIGJlIGludm9rZWQgb24gdGhlIG5leHQgdGljayBvZiB0aGUgZXZlbnQgbG9vcC5cbiAgICAgKi9cbiAgICByZWdpc3RlckNhbmNlbGxhdGlvbkhhbmRsZXIoaGFuZGxlcjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fY2FuY2VsbGF0aW9uUmVxdWVzdGVkKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGhhbmRsZXIsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5faW52b2tlQWZ0ZXJDYW5jZWxsYXRpb24ucHVzaChoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==