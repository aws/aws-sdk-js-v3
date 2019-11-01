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
  Priority,
  SerializeHandlerRelativeOptions,
  BuildHandlerRelativeOptions,
  FinalizeRequestHandlerRelativeOptions,
  DeserializeHandlerRelativeOptions,
  InitializeHandlerRelativeOptions,
  HandlerRelativeOptions
} from "@aws-sdk/types";

export interface MiddlewareEntry<Input extends object, Output extends object> {
  step: Step;
  middleware: MiddlewareType<Input, Output>;
  name?: string;
  priority: Priority;
  tags?: Array<string>;
}

export type Relation = "before" | "after";

export interface RelativeMiddlewareEntry<
  Input extends object,
  Output extends object
> {
  step: Step;
  middleware: MiddlewareType<Input, Output>;
  name?: string;
  tags?: Array<string>;
  relation: Relation;
  toMiddleware: MiddlewareType<Input, Output> | string;
}

export interface MiddlewareStack<Input extends object, Output extends object>
  extends IMiddlewareStack<Input, Output> {}

type NormalizedRelativeEntries<Input extends object, Output extends object> = [
  WeakMap<
    MiddlewareType<Input, Output>,
    { [key in Relation]: Array<RelativeMiddlewareEntry<Input, Output>> }
  >,
  Array<RelativeMiddlewareEntry<Input, Output>>
];

export class MiddlewareStack<Input extends object, Output extends object> {
  private readonly entries: Array<MiddlewareEntry<Input, Output>> = [];
  private readonly relativeEntries: Array<
    RelativeMiddlewareEntry<Input, Output>
  > = [];
  private entriesNameMap: {
    [middlewareName: string]:
      | MiddlewareEntry<Input, Output>
      | RelativeMiddlewareEntry<Input, Output>;
  } = {};

  add(
    middleware: InitializeMiddleware<Input, Output>,
    options?: HandlerOptions & { step?: "initialize" }
  ): void;

  add(
    middleware: SerializeMiddleware<Input, Output>,
    options: SerializeHandlerOptions
  ): void;

  add(
    middleware: BuildMiddleware<Input, Output>,
    options: BuildHandlerOptions
  ): void;

  add(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    options: FinalizeRequestHandlerOptions
  ): void;

  add(
    middleware: DeserializeMiddleware<Input, Output>,
    options: DeserializeHandlerOptions
  ): void;

  add(
    middleware: MiddlewareType<Input, Output>,
    options: HandlerOptions = {}
  ): void {
    const { name } = options;
    const entry: MiddlewareEntry<Input, Output> = {
      name,
      step: options.step || "initialize",
      tags: options.tags,
      priority: options.priority || "normal",
      middleware
    };
    if (name) {
      if (Object.prototype.hasOwnProperty.call(this.entriesNameMap, name)) {
        throw new Error(`Duplicated middleware name '${name}'`);
      }
      if (name) this.entriesNameMap[name] = entry;
    }
    this.entries.push(entry);
  }

  addRelativeTo(
    middleware: InitializeMiddleware<Input, Output>,
    options: InitializeHandlerRelativeOptions<Input, Output>
  ): void;

  addRelativeTo(
    middleware: SerializeMiddleware<Input, Output>,
    options: SerializeHandlerRelativeOptions<Input, Output>
  ): void;

  addRelativeTo(
    middleware: BuildMiddleware<Input, Output>,
    options: BuildHandlerRelativeOptions<Input, Output>
  ): void;

  addRelativeTo(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    options: FinalizeRequestHandlerRelativeOptions<Input, Output>
  ): void;

  addRelativeTo(
    middleware: DeserializeMiddleware<Input, Output>,
    options: DeserializeHandlerRelativeOptions<Input, Output>
  ): void;

  addRelativeTo(
    middleware: MiddlewareType<Input, Output>,
    options: HandlerRelativeOptions<Input, Output>
  ): void {
    const entry: RelativeMiddlewareEntry<Input, Output> = {
      ...options,
      middleware,
      step: options.step || "initialize"
    };
    const { name } = options;
    if (name) {
      if (Object.prototype.hasOwnProperty.call(this.entriesNameMap, name)) {
        throw new Error(`Duplicated middleware name '${name}'`);
      }
      if (name) this.entriesNameMap[name] = entry;
    }
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
    const normalized: NormalizedRelativeEntries<Input, Output> = [
      new WeakMap(),
      []
    ];
    const entriesMiddleware = this.entries.map(entry => entry.middleware);
    for (const relativeEntry of this.relativeEntries) {
      const { step, toMiddleware } = relativeEntry;
      let toMiddlewareRef:
        | MiddlewareType<Input, Output>
        | undefined = undefined;
      if (typeof toMiddleware === "string") {
        if (
          this.entriesNameMap[toMiddleware] &&
          this.entriesNameMap[toMiddleware].step === step
        )
          toMiddlewareRef = this.entriesNameMap[toMiddleware].middleware;
      } else {
        const index = entriesMiddleware.indexOf(toMiddleware);
        if (index > -1) {
          const { step: foundStep } = this.entries[index];
          if (foundStep === step)
            toMiddlewareRef = this.entries[index].middleware;
        }
      }
      if (toMiddlewareRef) {
        if (!normalized[0].get(toMiddlewareRef)) {
          normalized[0].set(toMiddlewareRef, {
            before: [],
            after: []
          });
        }
        normalized[0]
          .get(toMiddlewareRef)!
          [relativeEntry.relation].push(relativeEntry);
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
    for (const { middleware } of entryList) {
      const toBeInserted = validRelativeEntries.get(middleware);
      if (toBeInserted && toBeInserted.after && toBeInserted.after.length > 0) {
        middlewareList = middlewareList.concat(
          toBeInserted.after.map(entry => entry.middleware)
        );
      }
      middlewareList.push(middleware);
      if (
        toBeInserted &&
        toBeInserted.before &&
        toBeInserted.before.length > 0
      ) {
        middlewareList = middlewareList.concat(
          toBeInserted.before.map(entry => entry.middleware)
        );
      }
    }
    return middlewareList;
  }

  clone(): IMiddlewareStack<Input, Output> {
    const clone = new MiddlewareStack<Input, Output>();
    clone.entries.push(...this.entries);
    clone.relativeEntries.push(...this.relativeEntries);
    clone.entriesNameMap = { ...this.entriesNameMap };
    return clone;
  }

  concat<InputType extends Input, OutputType extends Output>(
    from: IMiddlewareStack<InputType, OutputType>
  ): MiddlewareStack<InputType, OutputType> {
    const clone = new MiddlewareStack<InputType, OutputType>();
    clone.entriesNameMap = { ...(this.entriesNameMap as any) };
    // IMiddlewareStack interface doesn't contain private members variables
    // like `entriesNameMap`, but in fact the function expects `MiddlewareStack`
    // class instance. So here we cast it.
    let _from = from as MiddlewareStack<InputType, OutputType>;
    for (const name in _from.entriesNameMap) {
      if (clone.entriesNameMap[name]) {
        throw new Error(`Duplicated middleware name '${name}'`);
      }
      clone.entriesNameMap[name] = _from.entriesNameMap[name];
    }
    clone.entries.push(...(this.entries as any), ..._from.entries);
    clone.relativeEntries.push(
      ...(this.relativeEntries as any),
      ..._from.relativeEntries
    );
    return clone;
  }

  remove(toRemove: MiddlewareType<Input, Output> | string): boolean {
    if (typeof toRemove === "string") return this.removeByName(toRemove);
    else return this.removeByReference(toRemove);
  }

  private removeByName(toRemove: string): boolean {
    for (let i = this.entries.length - 1; i >= 0; i--) {
      if (this.entries[i].name && this.entries[i].name === toRemove) {
        this.entries.splice(i, 1);
        delete this.entriesNameMap[toRemove];
        return true;
      }
    }
    for (let i = this.relativeEntries.length - 1; i >= 0; i--) {
      if (
        this.relativeEntries[i].name &&
        this.relativeEntries[i].name === toRemove
      ) {
        this.relativeEntries.splice(i, 1);
        delete this.entriesNameMap[toRemove];
        return true;
      }
    }
    return false;
  }

  private removeByReference(toRemove: MiddlewareType<Input, Output>): boolean {
    for (let i = this.entries.length - 1; i >= 0; i--) {
      if (this.entries[i].middleware === toRemove) {
        this.entries.splice(i, 1);
        const { name } = this.entries[i];
        if (name) delete this.entriesNameMap[name];
        return true;
      }
    }
    for (let i = this.relativeEntries.length - 1; i >= 0; i--) {
      if (this.relativeEntries[i].middleware === toRemove) {
        this.relativeEntries.splice(i, 1);
        const { name } = this.entries[i];
        if (name) delete this.entriesNameMap[name];
        return true;
      }
    }
    return false;
  }

  removeByTag(toRemove: string): boolean {
    let removed = false;
    for (let i = this.entries.length - 1; i >= 0; i--) {
      const { tags } = this.entries[i];
      if (tags && tags.indexOf(toRemove) > -1) {
        this.entries.splice(i, 1);
        removed = true;
      }
    }
    for (let i = this.relativeEntries.length - 1; i >= 0; i--) {
      const { tags } = this.relativeEntries[i];
      if (tags && tags.indexOf(toRemove) > -1) {
        this.relativeEntries.splice(i, 1);
        removed = true;
      }
    }
    return removed;
  }

  use(plugin: Pluggable<Input, Output>) {
    plugin.applyToStack(this);
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
  high: 3,
  normal: 2,
  low: 1
};
