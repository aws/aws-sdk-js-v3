import {
    Handler,
    HandlerOptions,
    Middleware,
    MiddlewareStack as IMiddlewareStack,
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

export class MiddlewareStack<T extends Handler<any, any, any>> implements
    IMiddlewareStack<T>
{
    private readonly entries: Array<HandlerListEntry<T>> = [];
    private sorted: boolean = false;

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

    clone(): MiddlewareStack<T> {
        const clone = new MiddlewareStack<T>();
        clone.entries.push(...this.entries);
        return clone;
    }

    concat(
        from: MiddlewareStack<T>
    ): MiddlewareStack<T> {
        const clone = new MiddlewareStack<T>();
        clone.entries.push(...this.entries, ...from.entries);
        return clone;
    }

    remove(toRemove: Middleware<T>|string): boolean {
        const {length} = this.entries;
        if (typeof toRemove === 'string') {
            this.removeByTag(toRemove);
        } else {
            this.removeByIdentity(toRemove);
        }

        return this.entries.length < length;
    }

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
