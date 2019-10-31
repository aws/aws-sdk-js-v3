import {
  BuildHandlerOptions,
  FinalizeRequestHandlerOptions,
  MiddlewareType,
  SerializeMiddleware,
  FinalizeRequestMiddleware,
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
  Handler,
  Priority
} from "@aws-sdk/types";
import {
  MiddlewareEntry,
  SerializeHandlerRelativeOptions,
  BuildHandlerRelativeOptions,
  FinalizeRequestHandlerRelativeOptions,
  DeserializeHandlerRelativeOptions,
  InitializeHandlerRelativeOptions,
  HandlerRelativeOptions,
  RelativeMiddlewareEntry,
  NormalizedRelativeEntry,
  Relation
} from "./types";

export interface MiddlewareStack<Input extends object, Output extends object>
  extends IMiddlewareStack<Input, Output> {}

type NormalizedRelativeEntries<Input extends object, Output extends object> = [
  {
    [toMiddleare: string]: {
      [relation in Relation]: Array<RelativeMiddlewareEntry<Input, Output>>;
    };
  },
  Array<RelativeMiddlewareEntry<Input, Output>>
];

export class MiddlewareStack<Input extends object, Output extends object> {
  private readonly entries: Array<MiddlewareEntry<Input, Output>> = [];
  private readonly relativeEntries: Array<
    RelativeMiddlewareEntry<Input, Output>
  > = [];
  private readonly entriesNameMap: {
    [middlewareName: string]:
      | MiddlewareEntry<Input, Output>
      | RelativeMiddlewareEntry<Input, Output>;
  } = {};

  add(
    middleware: InitializeMiddleware<Input, Output>,
    name: string,
    options?: HandlerOptions & { step?: "initialize" }
  ): void;

  add(
    middleware: SerializeMiddleware<Input, Output>,
    name: string,
    options: SerializeHandlerOptions
  ): void;

  add(
    middleware: BuildMiddleware<Input, Output>,
    name: string,
    options: BuildHandlerOptions
  ): void;

  add(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    name: string,
    options: FinalizeRequestHandlerOptions
  ): void;

  add(
    middleware: DeserializeMiddleware<Input, Output>,
    name: string,
    options: DeserializeHandlerOptions
  ): void;

  add(
    middleware: MiddlewareType<Input, Output>,
    name: string,
    options: HandlerOptions = {}
  ): void {
    const entry: MiddlewareEntry<Input, Output> = {
      name,
      step: options.step || "initialize",
      tags: options.tags,
      priority: options.priority || "normal",
      middleware
    };
    if (Object.prototype.hasOwnProperty.call(this.entriesNameMap, name)) {
      throw new Error(`Duplicated middleware name '${name}'`);
    }
    this.entriesNameMap[name] = entry;
    this.entries.push(entry);
  }

  addRelativeTo(
    middleware: InitializeMiddleware<Input, Output>,
    name: string,
    options: InitializeHandlerRelativeOptions<Input, Output>
  ): void;

  addRelativeTo(
    middleware: SerializeMiddleware<Input, Output>,
    name: string,
    options: SerializeHandlerRelativeOptions<Input, Output>
  ): void;

  addRelativeTo(
    middleware: BuildMiddleware<Input, Output>,
    name: string,
    options: BuildHandlerRelativeOptions<Input, Output>
  ): void;

  addRelativeTo(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    name: string,
    options: FinalizeRequestHandlerRelativeOptions<Input, Output>
  ): void;

  addRelativeTo(
    middleware: DeserializeMiddleware<Input, Output>,
    name: string,
    options: DeserializeHandlerRelativeOptions<Input, Output>
  ): void;

  addRelativeTo(
    middleware: MiddlewareType<Input, Output>,
    name: string,
    options: HandlerRelativeOptions<Input, Output>
  ): void {
    const entry: RelativeMiddlewareEntry<Input, Output> = {
      ...options,
      name,
      middleware,
      step: options.step || "initialize"
    };
    if (Object.prototype.hasOwnProperty.call(this.entriesNameMap, name)) {
      throw new Error(`Duplicated middleware name '${name}'`);
    }
    this.entriesNameMap[name] = entry;
    this.relativeEntries.push(entry);
  }

  private sort(
    entries: Array<MiddlewareEntry<Input, Output>>
  ): Array<MiddlewareEntry<Input, Output>> {
    //reverse before sorting so that middleware of same step will execute in
    //the order of being added
    return entries.reverse().sort((a, b) => {
      const stepWeight = stepWeights[a.step] - stepWeights[b.step];
      return (
        stepWeight || priorityWeights[a.priority] - priorityWeights[b.priority]
      );
    });
  }

  /**
   * Separate relative-added middleware to 2 catagories:
   * 1. Those who have a valid `toMiddleware`. They will be inserted before or after
   *     specified `toMiddleware`.
   * 2. Those whose `toMiddleware` is not found in static-added middleware. They will
   *     be added to corresponding `step` with priority of `normal`
   */
  private normalizeRelativeEntries(): NormalizedRelativeEntries<Input, Output> {
    const normalized: NormalizedRelativeEntries<Input, Output> = [{}, []];
    const entriesMiddleware = this.entries.map(entry => entry.middleware);
    for (const relativeEntry of this.relativeEntries) {
      const { step, toMiddleware } = relativeEntry;
      let toMiddlewareName: string | undefined = undefined;
      if (typeof toMiddleware === "string") {
        if (
          this.entriesNameMap[toMiddleware] &&
          this.entriesNameMap[toMiddleware].step === step
        )
          toMiddlewareName = this.entriesNameMap[toMiddleware].name;
      } else {
        const index = entriesMiddleware.indexOf(toMiddleware);
        if (index > -1) {
          const { step: foundStep } = this.entries[index];
          if (foundStep === step) toMiddlewareName = this.entries[index].name;
        }
      }
      if (toMiddlewareName) {
        if (!normalized[0][toMiddlewareName]) {
          normalized[0][toMiddlewareName] = {
            before: [],
            after: []
          };
        }
        normalized[0][toMiddlewareName][relativeEntry.relation].push(
          relativeEntry
        );
      } else {
        normalized[1].push(relativeEntry);
      }
    }
    return normalized;
  }

  /**
   * Get a final list of middleware in the order of being executed in the resolved handler.
   * If relative entries list is not empty, those entries will be added to final middleware
   * list with rules below:
   * 1. if `toMiddleware` exists in the specific `step`, the middleware will be inserted before
   *     or after the specified `toMiddleware`
   * 2. if `toMiddleware` doesn't exist in the specific `step`, the middleware will be appended
   *     to specific `step` with priority of `normal`
   */
  private geMiddlewareList(): Array<MiddlewareType<Input, Output>> {
    let middlewareList: Array<MiddlewareType<Input, Output>> = [];
    const [
      validRelativeEntries,
      invalidRelativeEntries
    ] = this.normalizeRelativeEntries();
    // insert the relative middleware that doesn't have a valid `toMiddleware` to
    // individual step with priority `normal`
    let entryList = [...this.entries];
    entryList = entryList.concat(
      invalidRelativeEntries.map(entry => ({
        ...entry,
        priority: "normal"
      }))
    );
    entryList = this.sort(entryList);
    // insert the relative middleware that have a valid `toMiddleware` to before or after
    // the `toMiddleware`. Note that middleware locates 'later' in the middleware list
    // should be resolved earlier
    for (const { name, middleware } of entryList) {
      if (
        validRelativeEntries[name] &&
        validRelativeEntries[name].after &&
        validRelativeEntries[name].after.length > 0
      ) {
        middlewareList = middlewareList.concat(
          validRelativeEntries[name].after.map(entry => entry.middleware)
        );
      }
      middlewareList.push(middleware);
      if (
        validRelativeEntries[name] &&
        validRelativeEntries[name].before &&
        validRelativeEntries[name].before.length > 0
      ) {
        middlewareList = middlewareList.concat(
          validRelativeEntries[name].before.map(entry => entry.middleware)
        );
      }
    }
    return middlewareList;
  }

  resolve<InputType extends Input, OutputType extends Output>(
    handler: DeserializeHandler<InputType, OutputType>,
    context: HandlerExecutionContext
  ): Handler<InputType, OutputType> {
    for (const middleware of this.geMiddlewareList()) {
      handler = middleware(
        handler as Handler<Input, OutputType>,
        context
      ) as any;
    }

    return handler as Handler<InputType, OutputType>;
  }
}

const stepWeights: { [key in Step]: number } = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1
};

const priorityWeights: { [key in Priority]: number } = {
  before: 3,
  normal: 2,
  after: 1
};
