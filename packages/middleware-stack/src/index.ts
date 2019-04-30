import {
  BuildHandlerOptions,
  FinalizeHandler,
  FinalizeHandlerOptions,
  FinalizeMiddleware,
  Handler,
  HandlerExecutionContext,
  HandlerOptions,
  Middleware,
  MiddlewareStack as IMiddlewareStack,
  SerializeHandlerOptions,
  Step
} from "@aws-sdk/types";

interface HandlerListEntry<
  Input extends object,
  Output extends object,
  Stream
> {
  step: Step;
  priority: number;
  middleware: Middleware<Input, Output>;
  tags?: { [tag: string]: any };
}

export interface MiddlewareStack<
  Input extends object,
  Output extends object,
  Stream = Uint8Array
> extends IMiddlewareStack<Input, Output, Stream> {}

export class MiddlewareStack<
  Input extends object,
  Output extends object,
  Stream = Uint8Array
> {
  private readonly entries: Array<HandlerListEntry<Input, Output, Stream>> = [];
  private sorted: boolean = true;

  add(
    middleware: Middleware<Input, Output>,
    options?: HandlerOptions & { step?: "initialize" }
  ): void;

  add(
    middleware: Middleware<Input, Output>,
    options: SerializeHandlerOptions
  ): void;

  add(
    middleware: FinalizeMiddleware<Input, Output, Stream>,
    options: BuildHandlerOptions
  ): void;

  add(
    middleware: FinalizeMiddleware<Input, Output, Stream>,
    options: FinalizeHandlerOptions
  ): void;

  add(
    middleware: Middleware<Input, Output>,
    options: HandlerOptions = {}
  ): void {
    const { step = "initialize", priority = 0, tags } = options;
    this.sorted = false;
    this.entries.push({
      middleware,
      priority,
      step,
      tags
    });
  }

  clone(): IMiddlewareStack<Input, Output, Stream> {
    const clone = new MiddlewareStack<Input, Output, Stream>();
    clone.entries.push(...this.entries);
    clone.sorted = this.sorted;
    return clone;
  }

  concat<InputType extends Input, OutputType extends Output>(
    from: MiddlewareStack<InputType, OutputType, Stream>
  ): MiddlewareStack<InputType, OutputType, Stream> {
    const clone = new MiddlewareStack<InputType, OutputType, Stream>();
    clone.entries.push(...(this.entries as any), ...from.entries);
    clone.sorted = false;
    return clone;
  }

  remove(toRemove: Middleware<Input, Output> | string): boolean {
    const { length } = this.entries;
    if (typeof toRemove === "string") {
      this.removeByTag(toRemove);
    } else {
      this.removeByIdentity(toRemove);
    }

    return this.entries.length < length;
  }

  resolve<InputType extends Input, OutputType extends Output>(
    handler: FinalizeHandler<InputType, OutputType, Stream>,
    context: HandlerExecutionContext
  ): Handler<InputType, OutputType> {
    if (!this.sorted) {
      this.sort();
    }

    for (const { middleware } of this.entries) {
      handler = middleware(
        handler as Handler<Input, OutputType>,
        context
      ) as any;
    }

    return handler as Handler<InputType, OutputType>;
  }

  private removeByIdentity(toRemove: Middleware<Input, Output>) {
    for (let i = this.entries.length - 1; i >= 0; i--) {
      if (this.entries[i].middleware === toRemove) {
        this.entries.splice(i, 1);
      }
    }
  }

  private removeByTag(toRemove: string) {
    for (let i = this.entries.length - 1; i >= 0; i--) {
      const { tags } = this.entries[i];
      if (tags && toRemove in tags) {
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
  initialize: 4,
  serialize: 3,
  build: 2,
  finalize: 1
};
