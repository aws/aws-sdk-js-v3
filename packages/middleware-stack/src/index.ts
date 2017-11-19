import {
    Handler,
    HandlerOptions,
    Middleware,
    MiddlewareStack as IMiddlewareStack,
    HandlerExecutionContext,
} from '@aws/types';

export type Step = 'initialize'|'build'|'finalize';

interface HandlerListEntry<
    InputType extends object,
    OutputType extends object,
    StreamType
> {
    step: Step;
    priority: number;
    middleware: Middleware<InputType, OutputType, StreamType>;
    tags?: Set<string>;
}

export class MiddlewareStack<
    InputType extends object,
    OutputType extends object,
    StreamType = Uint8Array
> implements IMiddlewareStack<InputType, OutputType, StreamType> {
    private readonly entries: Array<
        HandlerListEntry<InputType, OutputType, StreamType>
    > = [];
    private sorted: boolean = false;

    add(
        middleware: Middleware<InputType, OutputType, StreamType>,
        options: HandlerOptions = {}
    ): void {
        const {step = 'initialize', priority = 0, tags} = options;
        this.sorted = false;
        this.entries.push({
            middleware,
            priority,
            step,
            tags,
        });
    }

    clone(): MiddlewareStack<InputType, OutputType, StreamType> {
        const clone = new MiddlewareStack<InputType, OutputType, StreamType>();
        clone.entries.push(...this.entries);
        return clone;
    }

    concat(
        from: MiddlewareStack<InputType, OutputType, StreamType>
    ): MiddlewareStack<InputType, OutputType, StreamType> {
        const clone = new MiddlewareStack<InputType, OutputType, StreamType>();
        clone.entries.push(...this.entries, ...from.entries);
        return clone;
    }

    remove(
        toRemove: Middleware<InputType, OutputType, StreamType>|string
    ): boolean {
        const {length} = this.entries;
        if (typeof toRemove === 'string') {
            this.removeByTag(toRemove);
        } else {
            this.removeByIdentity(toRemove);
        }

        return this.entries.length < length;
    }

    resolve(
        handler: Handler<InputType, OutputType, StreamType>,
        context: HandlerExecutionContext
    ): Handler<InputType, OutputType, StreamType> {
        if (!this.sorted) {
            this.sort();
        }

        for (const {middleware} of this.entries) {
            handler = new middleware(handler, context);
        }

        return handler;
    }

    private removeByIdentity(
        toRemove: Middleware<InputType, OutputType, StreamType>
    ) {
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
