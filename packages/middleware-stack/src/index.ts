import {
    Handler,
    Middleware,
    HandlerExecutionContext,
} from '@aws/types';

export type Step = 'initialize'|'build'|'finalize';

interface HandlerListEntry<
    T extends Handler<any, any>
> {
    step: Step;
    priority: number;
    middleware: Middleware<T>;
    tags?: Set<string>;
}

export interface HandlerOptions {
    /**
     * Handlers are ordered using a "step" that describes the stage of command
     * execution at which the handler will be executed. The available steps are:
     *
     * - initialize: The input is being prepared and validated. Examples of
     *      typical initialization tasks include injecting default options and
     *      parameter validation.
     * - build: The input is being serialized into an HTTP request. The input
     *      should not be altered in middleware occupying this step, as it may
     *      have already been serialized into a request. Examples of typical
     *      build tasks include request construction and injecting HTTP headers.
     * - finalize: The request is being prepared to be sent over the wire. The
     *      request in this stage should already be semantically complete and
     *      should therefore only be altered as match the recipient's
     *      expectations. Examples of typical finalization tasks include request
     *      signing and injecting hop-by-hop headers.
     *
     *      Unlike initialization and build handlers, which are executed once
     *      per operation execution, finalization handlers will be executed for
     *      each HTTP request sent.
     *
     * @default 'build'
     */
    step?: Step;

    /**
     * A number that specifies how early in a given step of the middleware stack
     * a handler should be executed. Higher numeric priorities will be executed
     * earlier.
     *
     * @default 0
     */
    priority?: number;

    /**
     * A set of strings that identify the general purpose or important
     * characteristics of a given handler.
     */
    tags?: Set<string>;
}

/**
 * Builds a single handler function from zero or more middleware classes and a
 * core handler. The core handler is meant to send command objects to AWS
 * services and return promises that will resolve with the operation result or
 * be rejected with an error.
 *
 * When a composed handler is invoked, the arguments will pass through all
 * middleware in a defined order, and the return from the innermost handler will
 * pass through all middleware in the reverse of that order.
 */
export class MiddlewareStack<T extends Handler<any, any>> {
    private readonly entries: Array<HandlerListEntry<T>> = [];
    private sorted: boolean = false;

    /**
     * Add middleware to the list, optionally specifying a step, priority, and
     * tags.
     *
     * Middleware registered at the same step and with the same priority may be
     * executed in any order.
     */
    add(
        middleware: Middleware<T>,
        {
            step = 'initialize',
            priority = 0,
            tags,
        }: HandlerOptions = {}
    ): void {
        this.sorted = false;
        this.entries.push({
            middleware,
            priority,
            step,
            tags,
        });
    }

    /**
     * Create a shallow clone of this list. Step bindings and handler priorities
     * and tags are preserved in the copy.
     */
    clone(): MiddlewareStack<T> {
        const clone = new MiddlewareStack<T>();
        clone.entries.push(...this.entries);
        return clone;
    }

    /**
     * Create a list containing the middlewares in this list as well as the
     * middlewares in the `from` list. Neither source is modified, and step
     * bindings and handler priorities and tags are preserved in the copy.
     */
    concat(
        from: MiddlewareStack<T>
    ): MiddlewareStack<T> {
        const clone = new MiddlewareStack<T>();
        clone.entries.push(...this.entries, ...from.entries);
        return clone;
    }

    /**
     * Removes middleware from the stack.
     *
     * If a string is provided, any entry in the stack whose tags contain that
     * string will be removed from the stack.
     *
     * If a middleware class is provided, all usages thereof will be removed.
     */
    remove(toRemove: Middleware<T>|string): boolean {
        const {length} = this.entries;
        if (typeof toRemove === 'string') {
            this.removeByTag(toRemove);
        } else {
            this.removeByIdentity(toRemove);
        }

        return this.entries.length < length;
    }

    /**
     * Builds a single handler function from zero or more middleware classes and
     * a core handler. The core handler is meant to send command objects to AWS
     * services and return promises that will resolve with the operation result
     * or be rejected with an error.
     *
     * When a composed handler is invoked, the arguments will pass through all
     * middleware in a defined order, and the return from the innermost handler
     * will pass through all middleware in the reverse of that order.
     */
    resolve(handler: T, context: HandlerExecutionContext): T {
        if (!this.sorted) {
            this.sort();
        }

        for (const {middleware} of this.entries) {
            handler = new middleware(handler, context);
        }

        return handler;
    }

    private removeByIdentity(toRemove: Middleware<T>) {
        for (let i = this.entries.length - 1; i >= 0; i--) {
            if (this.entries[i].middleware === toRemove) {
                this.entries.splice(i, 1);
            }
        }
    }

    private removeByTag(toRemove: string) {
        for (let i = this.entries.length - 1; i >= 0; i--) {
            const {tags} = this.entries[i];
            if (tags && tags.has(toRemove)) {
                this.entries.splice(i, 1);
            }
        }
    }

    private sort(): void {
        this.entries.sort((a, b) => {
            const stepWeight = stepWeights[a.step] - stepWeights[b.step];
            return stepWeight || a.priority - b.priority;
        });
        this.sorted = true;
    }
}

const stepWeights = {
    initialize: 3,
    build: 2,
    finalize: 1,
};
