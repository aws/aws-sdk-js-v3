"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @see {TokenSource}
 *
 * Holders of a Token object may query if the associated operation has been
 * cancelled, register cancellation handlers, and conditionally throw an Error
 * if the operation has already been cancelled.
 */
var Token = (function () {
    /**
     * Creates a new Token linked to a provided TokenSource. If no source is
     * provided, the Token cannot be cancelled.
     */
    function Token(source) {
        this.source = source;
        this.cancellable = Boolean(source);
    }
    Object.defineProperty(Token.prototype, "isCancellationRequested", {
        /**
         * Whether the associated operation has already been cancelled.
         */
        get: function () {
            if (this.source) {
                return this.source.isCancellationRequested;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Registers a handler to be invoked when cancellation is requested. If
     * cancellation has already been requested, the handler will be invoked on
     * the next tick of the event loop.
     */
    Token.prototype.onCancellationRequested = function (cb) {
        if (this.source) {
            this.source.registerCancellationHandler(cb);
        }
    };
    /**
     * Throws an error if the associated operation has already been cancelled.
     */
    Token.prototype.throwIfCancellationRequested = function (reason) {
        if (this.isCancellationRequested) {
            throw new Error("Operation cancelled" + (reason ? ": " + reason : ''));
        }
    };
    return Token;
}());
exports.Token = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9rZW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvVG9rZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTs7Ozs7O0dBTUc7QUFDSDtJQU9JOzs7T0FHRztJQUNILGVBQTZCLE1BQW9CO1FBQXBCLFdBQU0sR0FBTixNQUFNLENBQWM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUtELHNCQUFJLDBDQUF1QjtRQUgzQjs7V0FFRzthQUNIO1lBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7WUFDL0MsQ0FBQztZQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDakIsQ0FBQzs7O09BQUE7SUFFRDs7OztPQUlHO0lBQ0gsdUNBQXVCLEdBQXZCLFVBQXdCLEVBQWM7UUFDbEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLDJCQUEyQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCw0Q0FBNEIsR0FBNUIsVUFBNkIsTUFBZTtRQUN4QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXNCLE1BQU0sR0FBRyxPQUFLLE1BQVEsR0FBRyxFQUFFLENBQUUsQ0FBQyxDQUFDO1FBQ3pFLENBQUM7SUFDTCxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0M7QUE3Q1ksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Rva2VuU291cmNlfSBmcm9tICcuL1Rva2VuU291cmNlJztcblxuLyoqXG4gKiBAc2VlIHtUb2tlblNvdXJjZX1cbiAqXG4gKiBIb2xkZXJzIG9mIGEgVG9rZW4gb2JqZWN0IG1heSBxdWVyeSBpZiB0aGUgYXNzb2NpYXRlZCBvcGVyYXRpb24gaGFzIGJlZW5cbiAqIGNhbmNlbGxlZCwgcmVnaXN0ZXIgY2FuY2VsbGF0aW9uIGhhbmRsZXJzLCBhbmQgY29uZGl0aW9uYWxseSB0aHJvdyBhbiBFcnJvclxuICogaWYgdGhlIG9wZXJhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGNhbmNlbGxlZC5cbiAqL1xuZXhwb3J0IGNsYXNzIFRva2VuIHtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBhc3NvY2lhdGVkIG9wZXJhdGlvbiBtYXkgYmUgY2FuY2VsbGVkIGF0IHNvbWUgcG9pbnQgaW4gdGhlXG4gICAgICogZnV0dXJlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBjYW5jZWxsYWJsZTogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgVG9rZW4gbGlua2VkIHRvIGEgcHJvdmlkZWQgVG9rZW5Tb3VyY2UuIElmIG5vIHNvdXJjZSBpc1xuICAgICAqIHByb3ZpZGVkLCB0aGUgVG9rZW4gY2Fubm90IGJlIGNhbmNlbGxlZC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNvdXJjZT86IFRva2VuU291cmNlKSB7XG4gICAgICAgIHRoaXMuY2FuY2VsbGFibGUgPSBCb29sZWFuKHNvdXJjZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciB0aGUgYXNzb2NpYXRlZCBvcGVyYXRpb24gaGFzIGFscmVhZHkgYmVlbiBjYW5jZWxsZWQuXG4gICAgICovXG4gICAgZ2V0IGlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZS5pc0NhbmNlbGxhdGlvblJlcXVlc3RlZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlcnMgYSBoYW5kbGVyIHRvIGJlIGludm9rZWQgd2hlbiBjYW5jZWxsYXRpb24gaXMgcmVxdWVzdGVkLiBJZlxuICAgICAqIGNhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZCwgdGhlIGhhbmRsZXIgd2lsbCBiZSBpbnZva2VkIG9uXG4gICAgICogdGhlIG5leHQgdGljayBvZiB0aGUgZXZlbnQgbG9vcC5cbiAgICAgKi9cbiAgICBvbkNhbmNlbGxhdGlvblJlcXVlc3RlZChjYjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zb3VyY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc291cmNlLnJlZ2lzdGVyQ2FuY2VsbGF0aW9uSGFuZGxlcihjYik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIGFzc29jaWF0ZWQgb3BlcmF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gY2FuY2VsbGVkLlxuICAgICAqL1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQocmVhc29uPzogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE9wZXJhdGlvbiBjYW5jZWxsZWQke3JlYXNvbiA/IGA6ICR7cmVhc29ufWAgOiAnJ31gKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==