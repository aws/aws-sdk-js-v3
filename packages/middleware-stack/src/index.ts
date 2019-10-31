import {
  BuildHandlerOptions,
  FinalizeRequestHandlerOptions,
  MiddlewareType,
  SerializeMiddleware,
  FinalizeRequestMiddleware,
  InitializeHandler,
  HandlerExecutionContext,
  HandlerOptions,
  InitializeMiddleware,
  MiddlewareStack as IMiddlewareStack,
  SerializeHandlerOptions,
  Step,
  DeserializeMiddleware,
  DeserializeHandlerOptions,
  DeserializeHandler,
  Pluggable,
  BuildMiddleware,
  Handler
} from "@aws-sdk/types";

type MiddlewareEntry<Input extends object, Output extends object> = {
  step: Step;
  middleware: MiddlewareType<Input, Output>;
  name: string;
  tags?: Array<string>;
};

export interface MiddlewareStack<Input extends object, Output extends object>
  extends IMiddlewareStack<Input, Output> {}

type MiddlewareEntryList<Input extends object, Output extends object> = {
  [key in Step]: Array<MiddlewareEntry<Input, Output>>;
};

export class MiddlewareStack<Input extends object, Output extends object> {
  private readonly entries: MiddlewareEntryList<Input, Output> = {
    initialize: [],
    serialize: [],
    build: [],
    finalizeRequest: [],
    deserialize: []
  };
  private readonly entriesNameMap: {
    [middlewareName: string]: MiddlewareEntry<Input, Output>;
  } = {};

  unshift(
    middleware: InitializeMiddleware<Input, Output>,
    name: string,
    options?: HandlerOptions & { step?: "initialize" } & {
      beforeMiddleware?: InitializeMiddleware<Input, Output> | string;
    }
  ): void;

  unshift(
    middleware: SerializeMiddleware<Input, Output>,
    name: string,
    options: SerializeHandlerOptions & {
      beforeMiddleware?: SerializeMiddleware<Input, Output> | string;
    }
  ): void;

  unshift(
    middleware: BuildMiddleware<Input, Output>,
    name: string,
    options: BuildHandlerOptions & {
      beforeMiddleware?: BuildMiddleware<Input, Output> | string;
    }
  ): void;

  unshift(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    name: string,
    options: FinalizeRequestHandlerOptions & {
      beforeMiddleware?: FinalizeRequestMiddleware<Input, Output> | string;
    }
  ): void;

  unshift(
    middleware: DeserializeMiddleware<Input, Output>,
    name: string,
    options: DeserializeHandlerOptions & {
      beforeMiddleware?: DeserializeMiddleware<Input, Output> | string;
    }
  ): void;

  unshift(
    middleware: MiddlewareType<Input, Output>,
    name: string,
    options: HandlerOptions & {
      beforeMiddleware?: MiddlewareType<Input, Output> | string;
    } = {}
  ): void {
    const entry: MiddlewareEntry<Input, Output> = {
      name,
      step: options.step || "initialize",
      tags: options.tags,
      middleware
    };
    this.addEntry(entry, "prepend", options.beforeMiddleware);
  }

  push(
    middleware: InitializeMiddleware<Input, Output>,
    name: string,
    options?: HandlerOptions & { step?: "initialize" } & {
      afterMiddleware?: InitializeMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: SerializeMiddleware<Input, Output>,
    name: string,
    options: SerializeHandlerOptions & {
      afterMiddleware?: SerializeMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: BuildMiddleware<Input, Output>,
    name: string,
    options: BuildHandlerOptions & {
      afterMiddleware?: BuildMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    name: string,
    options: FinalizeRequestHandlerOptions & {
      afterMiddleware?: FinalizeRequestMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: DeserializeMiddleware<Input, Output>,
    name: string,
    options: DeserializeHandlerOptions & {
      afterMiddleware?: DeserializeMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: MiddlewareType<Input, Output>,
    name: string,
    options: HandlerOptions & {
      afterMiddleware?: MiddlewareType<Input, Output> | string;
    } = {}
  ): void {
    const entry: MiddlewareEntry<Input, Output> = {
      name,
      step: options.step || "initialize",
      tags: options.tags,
      middleware
    };
    this.addEntry(entry, "append", options.afterMiddleware);
  }

  private addEntry(
    entry: MiddlewareEntry<Input, Output>,
    relation: "prepend" | "append",
    pivot?: MiddlewareType<Input, Output> | string
  ): void {
    const { name, step } = entry;
    if (Object.prototype.hasOwnProperty.call(this.entriesNameMap, name)) {
      throw new Error(`Duplicated middleware name '${name}'`);
    }
    this.entriesNameMap[name] = entry;
    if (!pivot) {
      relation === "append"
        ? this.entries[step].unshift(entry)
        : this.entries[step].push(entry);
      return;
    }
    const pivotMiddleware =
      typeof pivot === "string"
        ? this.entriesNameMap[pivot] && this.entriesNameMap[pivot].step === step
          ? this.entriesNameMap[pivot].middleware
          : undefined
        : pivot;
    if (!pivotMiddleware)
      throw new Error(
        `specified ${
          relation === "append" ? "beforeMiddleware" : "afterMiddleware"
        } does not exist in specified step`
      );
    const stepEntryList = this.entries[step];
    const index = stepEntryList
      .map(entry => entry.middleware)
      .indexOf(pivotMiddleware);
    if (index < 0)
      throw new Error(
        `specified ${
          relation === "append" ? "beforeMiddleware" : "afterMiddleware"
        } does not exist in specified step`
      );
    stepEntryList.splice(relation === "append" ? index : index + 1, 0, entry);
  }

  resolve<InputType extends Input, OutputType extends Output>(
    handler: DeserializeHandler<InputType, OutputType>,
    context: HandlerExecutionContext
  ): Handler<InputType, OutputType> {
    for (const step of stepOrder) {
      for (const { middleware } of this.entries[step]) {
        handler = middleware;
      }
    }
  }
}

const stack = new MiddlewareStack();
const mw: BuildMiddleware<object, object> = (next, cxt) => args =>
  Promise.resolve({ response: {}, output: {} });
stack.unshift(mw, "foo", { step: "build" });

const stepOrder: Array<Step> = [
  "initialize",
  "serialize",
  "build",
  "finalizeRequest",
  "deserialize"
];
