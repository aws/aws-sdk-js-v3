import {
  InitializeHandlerOptions,
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
  AbsoluteLocation,
  RelativeLocation
} from "@aws-sdk/types";

interface MiddlewareEntry<Input extends object, Output extends object>
  extends HandlerOptions {
  step: Step;
  middleware: MiddlewareType<Input, Output>;
  priority: Priority;
}

interface RelativeMiddlewareEntry<Input extends object, Output extends object>
  extends HandlerOptions {
  step: Step;
  middleware: MiddlewareType<Input, Output>;
  next?: string;
  prev?: string;
}

interface NormalizedRelativeMiddlewareEntry<
  Input extends object,
  Output extends object
> extends HandlerOptions {
  step: Step;
  middleware: MiddlewareType<Input, Output>;
  next?: NormalizedRelativeMiddlewareEntry<Input, Output>;
  prev?: NormalizedRelativeMiddlewareEntry<Input, Output>;
  priority: null;
}

type NormalizingEntryResult<Input extends object, Output extends object> = [
  Array<NormalizedRelativeMiddlewareEntry<Input, Output>>,
  {
    [name: string]: {
      prev?: NormalizedRelativeMiddlewareEntry<Input, Output>;
      next?: NormalizedRelativeMiddlewareEntry<Input, Output>;
    };
  }
];

export interface MiddlewareStack<Input extends object, Output extends object>
  extends IMiddlewareStack<Input, Output> {}

export class MiddlewareStack<Input extends object, Output extends object> {
  private readonly absoluteEntries: Array<MiddlewareEntry<Input, Output>> = [];
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
    options?: InitializeHandlerOptions & AbsoluteLocation
  ): void;

  add(
    middleware: SerializeMiddleware<Input, Output>,
    options: SerializeHandlerOptions & AbsoluteLocation
  ): void;

  add(
    middleware: BuildMiddleware<Input, Output>,
    options: BuildHandlerOptions & AbsoluteLocation
  ): void;

  add(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    options: FinalizeRequestHandlerOptions & AbsoluteLocation
  ): void;

  add(
    middleware: DeserializeMiddleware<Input, Output>,
    options: DeserializeHandlerOptions & AbsoluteLocation
  ): void;

  add(
    middleware: MiddlewareType<Input, Output>,
    options: HandlerOptions & AbsoluteLocation = {}
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
    this.absoluteEntries.push(entry);
  }

  addRelativeTo(
    middleware: InitializeMiddleware<Input, Output>,
    options: InitializeHandlerOptions & RelativeLocation<Input, Output>
  ): void;

  addRelativeTo(
    middleware: SerializeMiddleware<Input, Output>,
    options: SerializeHandlerOptions & RelativeLocation<Input, Output>
  ): void;

  addRelativeTo(
    middleware: BuildMiddleware<Input, Output>,
    options: BuildHandlerOptions & RelativeLocation<Input, Output>
  ): void;

  addRelativeTo(
    middleware: FinalizeRequestMiddleware<Input, Output>,
    options: FinalizeRequestHandlerOptions & RelativeLocation<Input, Output>
  ): void;

  addRelativeTo(
    middleware: DeserializeMiddleware<Input, Output>,
    options: DeserializeHandlerOptions & RelativeLocation<Input, Output>
  ): void;

  addRelativeTo(
    middleware: MiddlewareType<Input, Output>,
    options: HandlerOptions & RelativeLocation<Input, Output>
  ): void {
    const entry: RelativeMiddlewareEntry<Input, Output> = {
      middleware,
      step: options.step || "initialize",
      name: options.name,
      tags: options.tags,
      next: options.relation === "before" ? options.toMiddleware : undefined,
      prev: options.relation === "after" ? options.toMiddleware : undefined
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
    entries: Array<
      | MiddlewareEntry<Input, Output>
      | NormalizedRelativeMiddlewareEntry<Input, Output>
    >
  ): Array<
    | MiddlewareEntry<Input, Output>
    | NormalizedRelativeMiddlewareEntry<Input, Output>
  > {
    //reverse before sorting so that middleware of same step will execute in
    //the order of being added
    return entries.reverse().sort((a, b) => {
      const stepWeight = stepWeights[a.step] - stepWeights[b.step];
      return (
        stepWeight ||
        priorityWeights[a.priority || "normal"] -
          priorityWeights[b.priority || "normal"]
      );
    });
  }

  clone(): IMiddlewareStack<Input, Output> {
    const clone = new MiddlewareStack<Input, Output>();
    clone.absoluteEntries.push(...this.absoluteEntries);
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
    clone.absoluteEntries.push(
      ...(this.absoluteEntries as any),
      ..._from.absoluteEntries
    );
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
    for (let i = this.absoluteEntries.length - 1; i >= 0; i--) {
      if (
        this.absoluteEntries[i].name &&
        this.absoluteEntries[i].name === toRemove
      ) {
        this.absoluteEntries.splice(i, 1);
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
    for (let i = this.absoluteEntries.length - 1; i >= 0; i--) {
      if (this.absoluteEntries[i].middleware === toRemove) {
        const { name } = this.absoluteEntries[i];
        if (name) delete this.entriesNameMap[name];
        this.absoluteEntries.splice(i, 1);
        return true;
      }
    }
    for (let i = this.relativeEntries.length - 1; i >= 0; i--) {
      if (this.relativeEntries[i].middleware === toRemove) {
        const { name } = this.relativeEntries[i];
        if (name) delete this.entriesNameMap[name];
        this.relativeEntries.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  removeByTag(toRemove: string): boolean {
    let removed = false;
    for (let i = this.absoluteEntries.length - 1; i >= 0; i--) {
      const { tags, name } = this.absoluteEntries[i];
      if (tags && tags.indexOf(toRemove) > -1) {
        this.absoluteEntries.splice(i, 1);
        if (name) delete this.entriesNameMap[name];
        removed = true;
      }
    }
    for (let i = this.relativeEntries.length - 1; i >= 0; i--) {
      const { tags, name } = this.relativeEntries[i];
      if (tags && tags.indexOf(toRemove) > -1) {
        this.relativeEntries.splice(i, 1);
        if (name) delete this.entriesNameMap[name];
        removed = true;
      }
    }
    return removed;
  }

  use(plugin: Pluggable<Input, Output>) {
    plugin.applyToStack(this);
  }

  /**
   * Resolve relative middleware entries that have relation to each other to
   * multiply double-linked lists
   *
   * @returns multiple double-linked lists of middleware entries that is not
   *        added relative to valid absolute middleware
   */
  private normalizeRelativeEntries(): NormalizingEntryResult<Input, Output> {
    const absoluteMiddlewareNamesMap: {
      [key: string]: MiddlewareEntry<Input, Output>;
    } = {};
    for (const absoluteEntry of this.absoluteEntries) {
      if (absoluteEntry.name) {
        absoluteMiddlewareNamesMap[absoluteEntry.name] = absoluteEntry;
      }
    }

    const normalized: Array<
      NormalizedRelativeMiddlewareEntry<Input, Output>
    > = [];
    const relativeMiddlewareNamesMap: {
      [key: string]: NormalizedRelativeMiddlewareEntry<Input, Output>;
    } = {};
    for (const relativeEntry of this.relativeEntries) {
      const normalizedEntry: NormalizedRelativeMiddlewareEntry<
        Input,
        Output
      > = {
        ...relativeEntry,
        priority: null,
        next: undefined,
        prev: undefined
      };
      //initialized normalized relative middleware entry list
      normalized.push(normalizedEntry);
      if (relativeEntry.name) {
        relativeMiddlewareNamesMap[relativeEntry.name] = normalizedEntry;
      }
    }

    const anchors: {
      [name: string]: {
        prev?: NormalizedRelativeMiddlewareEntry<Input, Output>;
        next?: NormalizedRelativeMiddlewareEntry<Input, Output>;
      };
    } = {};
    for (let i = 0; i < this.relativeEntries.length; i++) {
      const { prev, next } = this.relativeEntries[i];
      const resolvedCurr = normalized[i];
      if (prev) {
        if (
          absoluteMiddlewareNamesMap[prev] &&
          absoluteMiddlewareNamesMap[prev].step === resolvedCurr.step
        ) {
          if (!anchors[prev]) anchors[prev] = {};
          resolvedCurr.next = anchors[prev].next;
          if (anchors[prev].next) anchors[prev].next!.prev = resolvedCurr;
          anchors[prev].next = resolvedCurr;
        } else if (
          relativeMiddlewareNamesMap[prev] &&
          relativeMiddlewareNamesMap[prev].step === resolvedCurr.step
        ) {
          const resolvedPrev = relativeMiddlewareNamesMap[prev];
          resolvedCurr.next = resolvedPrev.next;
          resolvedPrev.next = resolvedCurr;
          if (resolvedCurr.next) resolvedCurr.next.prev = resolvedCurr;
          resolvedCurr.prev = resolvedPrev;
        }
      }
      if (next) {
        if (
          absoluteMiddlewareNamesMap[next] &&
          absoluteMiddlewareNamesMap[next].step === resolvedCurr.step
        ) {
          if (!anchors[next]) anchors[next] = {};
          resolvedCurr.prev = anchors[next].prev;
          if (anchors[next].prev) anchors[next].prev!.next = resolvedCurr;
          anchors[next].prev = resolvedCurr;
        } else if (
          relativeMiddlewareNamesMap[next] &&
          relativeMiddlewareNamesMap[next].step === resolvedCurr.step
        ) {
          const resolvedNext = relativeMiddlewareNamesMap[next];
          resolvedCurr.prev = resolvedNext.prev;
          resolvedNext.prev = resolvedCurr;
          if (resolvedCurr.prev) resolvedCurr.prev.next = resolvedCurr;
          resolvedCurr.next = resolvedNext;
        }
      }
    }
    //return orphaned relative middleware linked lists
    // const visited: Array<boolean> = new Array(this.relativeEntries.length).fill(false);
    // for (let i = 0; i < this.relativeEntries.length; i++) {
    //   if (visited[i]) continue;
    //   let entry = this.relativeEntries[i];

    // }
    return [orphanedRelativeEntries, anchors];
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
    const [orphanedRelativeEntries, anchors] = this.normalizeRelativeEntries();
    let entryList = [...this.absoluteEntries, ...orphanedRelativeEntries];
    entryList = this.sort(entryList);
    for (const entry of entryList) {
      const defaultAnchorValue = { prev: undefined, next: undefined };
      const { prev, next } = entry.name
        ? anchors[entry.name] || defaultAnchorValue
        : defaultAnchorValue;
      let relativeEntry = next;
      while (relativeEntry) {
        middlewareList.push(relativeEntry.middleware);
        relativeEntry = relativeEntry.next;
      }
      let orphanedEntry = entry as any;
      while ((orphanedEntry as any).next) {
        middlewareList.push((orphanedEntry as any).next.middleware);
        orphanedEntry = (orphanedEntry as any).next;
      }
      middlewareList.push(entry.middleware);
      orphanedEntry = entry as any;
      while ((orphanedEntry as any).prev) {
        middlewareList.push((orphanedEntry as any).prev.middleware);
        orphanedEntry = (orphanedEntry as any).prev;
      }
      relativeEntry = prev;
      while (relativeEntry) {
        middlewareList.push(relativeEntry.middleware);
        relativeEntry = relativeEntry.prev;
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
  high: 3,
  normal: 2,
  low: 1
};
