import {
  BuildHandlerOptions,
  FinalizeHandler,
  FinalizeHandlerOptions,
  SerializeMiddleware,
  FinalizeMiddleware,
  BuildMiddleware,
  Handler,
  HandlerExecutionContext,
  HandlerOptions,
  Middleware,
  MiddlewareStack as IMiddlewareStack,
  SerializeHandlerOptions,
  Step,
  DeserializeMiddleware,
  DeserializeHandlerOptions,
  DeserializeHandler
} from "@aws-sdk/types";

interface HandlerListEntry<Input extends object, Output extends object> {
  step: Step;
  priority: number;
  middleware: Middleware<Input, Output>;
  tags?: { [tag: string]: any };
}

export interface MiddlewareStack<Input extends object, Output extends object>
  extends IMiddlewareStack<Input, Output> {}

export class MiddlewareStack<Input extends object, Output extends object> {
  private readonly entries: Array<HandlerListEntry<Input, Output>> = [];
  private sorted: boolean = true;

  add(
    middleware: Middleware<Input, Output>,
    options?: HandlerOptions & { step?: "initialize" }
  ): void;

  add(
    middleware: SerializeMiddleware<Input, Output>,
    options: SerializeHandlerOptions
  ): void;

  add(
    middleware: FinalizeMiddleware<Input, Output>,
    options: BuildHandlerOptions
  ): void;

  add(
    middleware: FinalizeMiddleware<Input, Output>,
    options: FinalizeHandlerOptions
  ): void;

  add(
    middleware: DeserializeMiddleware<Input, Output>,
    options: DeserializeHandlerOptions
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

  clone(): IMiddlewareStack<Input, Output> {
    const clone = new MiddlewareStack<Input, Output>();
    clone.entries.push(...this.entries);
    clone.sorted = this.sorted;
    return clone;
  }

  concat<InputType extends Input, OutputType extends Output>(
    from: MiddlewareStack<InputType, OutputType>
  ): MiddlewareStack<InputType, OutputType> {
    const clone = new MiddlewareStack<InputType, OutputType>();
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

  filter(
    callbackfn: (handlerOptions: HandlerOptions) => boolean
  ): MiddlewareStack<Input, Output> {
    const filtered = new MiddlewareStack<Input, Output>();
    for (const entry of this.entries) {
      const options: HandlerOptions = {
        step: entry.step,
        priority: entry.priority,
        tags: {
          ...entry.tags
        }
      };
      if (callbackfn(options)) {
        filtered.entries.push(entry);
      }
    }
    filtered.sorted = this.sorted;
    return filtered;
  }

  resolve<InputType extends Input, OutputType extends Output>(
    handler: DeserializeHandler<InputType, OutputType>,
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
  initialize: 5,
  serialize: 4,
  build: 3,
  finalize: 2,
  deserialize: 1
};
