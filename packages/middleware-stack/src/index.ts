import {
  BuildHandlerOptions,
  FinalizeRequestHandlerOptions,
  SerializeMiddleware,
  FinalizeRequestMiddleware,
  Handler,
  HandlerExecutionContext,
  HandlerOptions,
  Middleware,
  MiddlewareStack as IMiddlewareStack,
  SerializeHandlerOptions,
  Step,
  DeserializeMiddleware,
  DeserializeHandlerOptions,
  DeserializeHandler,
  Pluggable,
  BuildMiddleware
} from "@aws-sdk/types";

type MiddlewareEntry<Input extends object, Output extends object> = {
  step: Step;
  middleware:
    | Middleware<Input, Output>
    | SerializeMiddleware<Input, Output>
    | BuildMiddleware<Input, Output>
    | FinalizeRequestMiddleware<Input, Output>
    | DeserializeMiddleware<Input, Output>;
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
    middleware: Middleware<Input, Output>,
    name: string,
    options: HandlerOptions & { step?: "initialize" } & {
      beforeMiddleware?: Middleware<Input, Output> | string;
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
    middleware:
      | Middleware<Input, Output>
      | BuildMiddleware<Input, Output>
      | DeserializeMiddleware<Input, Output>,
    name: string,
    options:
      | (HandlerOptions & {
          beforeMiddleware?: Middleware<Input, Output> | string;
        })
      | (HandlerOptions & {
          beforeMiddleware?: DeserializeMiddleware<Input, Output> | string;
        })
      | (HandlerOptions & {
          beforeMiddleware?: BuildMiddleware<Input, Output> | string;
        })
  ): void {
    const entry: MiddlewareEntry<Input, Output> = {
      name,
      step: options.step || "initialize",
      tags: options.tags,
      middleware
    };
    if (Object.prototype.hasOwnProperty.call(this.entriesNameMap, name)) {
      throw new Error(`Duplicated middleware name '${name}'`);
    }
    this.entriesNameMap[name] = entry;
    if (!options.beforeMiddleware) {
      this.entries[entry.step].unshift(entry);
      return;
    }
    const beforeMiddleware =
      typeof options.beforeMiddleware === "string"
        ? this.entriesNameMap[options.beforeMiddleware] &&
          this.entriesNameMap[options.beforeMiddleware].step === entry.step
          ? this.entriesNameMap[options.beforeMiddleware].middleware
          : undefined
        : options.beforeMiddleware;
    if (!beforeMiddleware) {
      throw new Error(
        "specified beforeMiddleware does not exist in specified step"
      );
    }
    const stepEntryList = this.entries[entry.step];
    //TODO: insert entry before beforeMiddleware
  }

  push(
    middleware: Middleware<Input, Output>,
    name: string,
    options: HandlerOptions & { step?: "initialize" } & {
      beforeMiddleware?: Middleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: SerializeMiddleware<Input, Output>,
    name: string,
    options: SerializeHandlerOptions & {
      beforeMiddleware?: SerializeMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: BuildMiddleware<Input, Output>,
    name: string,
    options: BuildHandlerOptions & {
      beforeMiddleware?: BuildMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    name: string,
    options: FinalizeRequestHandlerOptions & {
      beforeMiddleware?: FinalizeRequestMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware: DeserializeMiddleware<Input, Output>,
    name: string,
    options: DeserializeHandlerOptions & {
      beforeMiddleware?: DeserializeMiddleware<Input, Output> | string;
    }
  ): void;

  push(
    middleware:
      | Middleware<Input, Output>
      | BuildMiddleware<Input, Output>
      | DeserializeMiddleware<Input, Output>,
    name: string,
    options:
      | (HandlerOptions & {
          beforeMiddleware?: Middleware<Input, Output> | string;
        })
      | (HandlerOptions & {
          beforeMiddleware?: DeserializeMiddleware<Input, Output> | string;
        })
      | (HandlerOptions & {
          beforeMiddleware?: BuildMiddleware<Input, Output> | string;
        })
  ): void {}
}

const stack = new MiddlewareStack();
const mw: BuildMiddleware<object, object> = (next, cxt) => args =>
  Promise.resolve({ response: {}, output: {} });
stack.unshift(mw, "foo", { step: "build" });

const stepWeights = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
};
