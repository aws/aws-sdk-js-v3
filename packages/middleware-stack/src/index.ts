import {
    BuildHandlerOptions,
    BuildMiddleware,
    FinalizeHandler,
    FinalizeHandlerOptions,
    FinalizeMiddleware,
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
    Input extends object,
    Output extends object,
    Stream = Uint8Array
> implements IMiddlewareStack<Input, Output, Stream> {
    private readonly entries: Array<HandlerListEntry<Input, Output, Stream>> = [];
    private sorted: boolean = true;

    add(
        middleware: Middleware<Input, Output, Stream>,
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

    clone(): MiddlewareStack<Input, Output, Stream> {
        const clone = new MiddlewareStack<Input, Output, Stream>();
        clone.entries.push(...this.entries);
        clone.sorted = this.sorted;
        return clone;
    }

    concat(
        from: MiddlewareStack<Input, Output, Stream>
    ): MiddlewareStack<Input, Output, Stream> {
        const clone = new MiddlewareStack<Input, Output, Stream>();
        clone.entries.push(...this.entries, ...from.entries);
        clone.sorted = false;
        return clone;
    }

    remove(
        toRemove: Middleware<Input, Output, Stream>|string
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
        handler: FinalizeHandler<Input, Output, Stream>,
        context: HandlerExecutionContext
    ): Handler<Input, Output, Stream> {
        if (!this.sorted) {
            this.sort();
        }

        for (const {middleware} of this.entries) {
            handler = middleware(handler as Handler<Input, Output, Stream>, context);
        }

        return handler as Handler<Input, Output, Stream>;
    }

    private removeByIdentity(
        toRemove: Middleware<Input, Output, Stream>
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
