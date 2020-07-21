import {
  AbsoluteLocation,
  DeserializeHandler,
  Handler,
  HandlerExecutionContext,
  HandlerOptions,
  MiddlewareStack as IMiddlewareStack,
  MiddlewareType,
  Pluggable,
  Priority,
  RelativeLocation,
  Step,
} from "@aws-sdk/types";

import {
  MiddlewareEntry,
  NamedMiddlewareEntriesMap,
  NamedRelativeEntriesMap,
  NormalizedRelativeEntry,
  NormalizingEntryResult,
  RelativeMiddlewareAnchor,
  RelativeMiddlewareEntry,
} from "./types";

export function constructStack<Input extends object, Output extends object>(): IMiddlewareStack<Input, Output> {
  const absoluteEntries: Array<MiddlewareEntry<Input, Output>> = [];
  const relativeEntries: Array<RelativeMiddlewareEntry<Input, Output>> = [];
  const entriesNameMap: {
    [middlewareName: string]: MiddlewareEntry<Input, Output> | RelativeMiddlewareEntry<Input, Output>;
  } = {};

  const sort = (
    entries: Array<MiddlewareEntry<Input, Output> | NormalizedRelativeEntry<Input, Output>>
  ): Array<MiddlewareEntry<Input, Output> | NormalizedRelativeEntry<Input, Output>> =>
    //reverse before sorting so that middleware of same step will execute in
    //the order of being added
    entries.sort(
      (a, b) =>
        stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]
    );

  const removeByName = (toRemove: string): boolean => {
    for (let i = absoluteEntries.length - 1; i >= 0; i--) {
      if (absoluteEntries[i].name && absoluteEntries[i].name === toRemove) {
        absoluteEntries.splice(i, 1);
        delete entriesNameMap[toRemove];
        return true;
      }
    }
    for (let i = relativeEntries.length - 1; i >= 0; i--) {
      if (relativeEntries[i].name && relativeEntries[i].name === toRemove) {
        relativeEntries.splice(i, 1);
        delete entriesNameMap[toRemove];
        return true;
      }
    }
    return false;
  };

  const removeByReference = (toRemove: MiddlewareType<Input, Output>): boolean => {
    for (let i = absoluteEntries.length - 1; i >= 0; i--) {
      if (absoluteEntries[i].middleware === toRemove) {
        const { name } = absoluteEntries[i];
        if (name) delete entriesNameMap[name];
        absoluteEntries.splice(i, 1);
        return true;
      }
    }
    for (let i = relativeEntries.length - 1; i >= 0; i--) {
      if (relativeEntries[i].middleware === toRemove) {
        const { name } = relativeEntries[i];
        if (name) delete entriesNameMap[name];
        relativeEntries.splice(i, 1);
        return true;
      }
    }
    return false;
  };

  const cloneTo = <InputType extends Input, OutputType extends Output>(
    toStack: IMiddlewareStack<InputType, OutputType>
  ): IMiddlewareStack<InputType, OutputType> => {
    const clone = toStack || constructStack<InputType, OutputType>();
    absoluteEntries.forEach((entry) => {
      //@ts-ignore
      clone.add(entry.middleware, { ...entry });
    });
    relativeEntries.forEach((entry) => {
      //@ts-ignore
      clone.addRelativeTo(entry.middleware, { ...entry });
    });
    return clone;
  };

  /**
   * Resolve relative middleware entries to multiple double linked lists
   * depicting the relative location of middleware. Only middleware that have
   * direct or transitive relation will form a linked list.
   *
   * This function normalizes relative middleware into 2 categories of linked
   * lists. (1) linked list that have absolute-located middleware on one end.
   * These middleware will be resolved accordingly before or after the absolute-
   * located middleware. (2) Linked list that have no absolute-located middleware
   * on any end. They will be resolved to corresponding step with normal priority
   *
   * The 2 types of linked list will return as a tuple
   */
  const normalizeRelativeEntries = (): NormalizingEntryResult<Input, Output> => {
    const absoluteMiddlewareNamesMap = absoluteEntries
      .filter((entry) => entry.name)
      .reduce((accumulator, entry) => {
        accumulator[entry.name!] = entry;
        return accumulator;
      }, {} as NamedMiddlewareEntriesMap<Input, Output>);
    const normalized = relativeEntries.map(
      (entry) =>
        ({
          ...entry,
          priority: null,
          next: undefined,
          prev: undefined,
        } as NormalizedRelativeEntry<Input, Output>)
    );
    const relativeMiddlewareNamesMap = normalized
      .filter((entry) => entry.name)
      .reduce((accumulator, entry) => {
        accumulator[entry.name!] = entry;
        return accumulator;
      }, {} as NamedRelativeEntriesMap<Input, Output>);

    const anchors: RelativeMiddlewareAnchor<Input, Output> = {};
    for (let i = 0; i < relativeEntries.length; i++) {
      const { prev, next } = relativeEntries[i];
      const resolvedCurr = normalized[i];
      //either prev or next is set
      if (prev) {
        if (absoluteMiddlewareNamesMap[prev] && absoluteMiddlewareNamesMap[prev].step === resolvedCurr.step) {
          if (!anchors[prev]) anchors[prev] = {};
          resolvedCurr.next = anchors[prev].next;
          if (anchors[prev].next) anchors[prev].next!.prev = resolvedCurr;
          anchors[prev].next = resolvedCurr;
        } else if (relativeMiddlewareNamesMap[prev] && relativeMiddlewareNamesMap[prev].step === resolvedCurr.step) {
          const resolvedPrev = relativeMiddlewareNamesMap[prev];
          if (resolvedPrev.next === resolvedCurr) continue;
          resolvedCurr.next = resolvedPrev.next;
          resolvedPrev.next = resolvedCurr;
          if (resolvedCurr.next) resolvedCurr.next.prev = resolvedCurr;
          resolvedCurr.prev = resolvedPrev;
        }
      } else if (next) {
        if (absoluteMiddlewareNamesMap[next] && absoluteMiddlewareNamesMap[next].step === resolvedCurr.step) {
          if (!anchors[next]) anchors[next] = {};
          resolvedCurr.prev = anchors[next].prev;
          if (anchors[next].prev) anchors[next].prev!.next = resolvedCurr;
          anchors[next].prev = resolvedCurr;
        } else if (relativeMiddlewareNamesMap[next] && relativeMiddlewareNamesMap[next].step === resolvedCurr.step) {
          const resolvedNext = relativeMiddlewareNamesMap[next];
          if (resolvedNext.prev === resolvedCurr) continue;
          resolvedCurr.prev = resolvedNext.prev;
          resolvedNext.prev = resolvedCurr;
          if (resolvedCurr.prev) resolvedCurr.prev.next = resolvedCurr;
          resolvedCurr.next = resolvedNext;
        }
      }
    }
    // get the head of the relative middleware linked list that have
    // no transitive relation to absolute middleware.
    const orphanedRelativeEntries: Array<NormalizedRelativeEntry<Input, Output>> = [];
    const visited: WeakSet<NormalizedRelativeEntry<Input, Output>> = new WeakSet();
    for (const anchorName of Object.keys(anchors)) {
      let { prev, next } = anchors[anchorName];
      while (prev) {
        visited.add(prev);
        prev = prev.prev;
      }
      while (next) {
        visited.add(next);
        next = next.next;
      }
    }
    for (let i = 0; i < normalized.length; i++) {
      let entry: NormalizedRelativeEntry<Input, Output> | undefined = normalized[i];
      if (visited.has(entry)) continue;
      if (!entry.prev) orphanedRelativeEntries.push(entry);
      while (entry && !visited.has(entry)) {
        visited.add(entry);
        entry = entry.next;
      }
    }
    return [orphanedRelativeEntries, anchors];
  };

  /**
   * Get a final list of middleware in the order of being executed in the resolved handler.
   * If relative entries list is not empty, those entries will be added to final middleware
   * list with rules below:
   * 1. if `toMiddleware` exists in the specific `step`, the middleware will be inserted before
   *     or after the specified `toMiddleware`
   * 2. if `toMiddleware` doesn't exist in the specific `step`, the middleware will be appended
   *     to specific `step` with priority of `normal`
   */
  const getMiddlewareList = (): Array<MiddlewareType<Input, Output>> => {
    const middlewareList: Array<MiddlewareType<Input, Output>> = [];
    const [orphanedRelativeEntries, anchors] = normalizeRelativeEntries();
    let entryList = [...absoluteEntries, ...orphanedRelativeEntries];
    entryList = sort(entryList);
    for (const entry of entryList) {
      const defaultAnchorValue = { prev: undefined, next: undefined };
      const { prev, next } = entry.name ? anchors[entry.name] || defaultAnchorValue : defaultAnchorValue;
      let relativeEntry = prev;
      //reverse relative entry linked list and add to ordered handler list
      while (relativeEntry?.prev) {
        relativeEntry = relativeEntry.prev;
      }
      while (relativeEntry) {
        middlewareList.push(relativeEntry.middleware);
        relativeEntry = relativeEntry.next;
      }
      middlewareList.push(entry.middleware);
      let orphanedEntry = entry as any;
      while ((orphanedEntry as any).next) {
        middlewareList.push((orphanedEntry as any).next.middleware);
        orphanedEntry = (orphanedEntry as any).next;
      }
      relativeEntry = next;
      while (relativeEntry) {
        middlewareList.push(relativeEntry.middleware);
        relativeEntry = relativeEntry.next;
      }
    }
    return middlewareList.reverse();
  };

  const stack = {
    add: (middleware: MiddlewareType<Input, Output>, options: HandlerOptions & AbsoluteLocation = {}) => {
      const { name, step = "initialize", tags, priority = "normal" } = options;
      const entry: MiddlewareEntry<Input, Output> = {
        name,
        step,
        tags,
        priority,
        middleware,
      };
      if (name) {
        if (Object.prototype.hasOwnProperty.call(entriesNameMap, name)) {
          throw new Error(`Duplicated middleware name '${name}'`);
        }
        entriesNameMap[name] = entry;
      }
      absoluteEntries.push(entry);
    },
    addRelativeTo: (
      middleware: MiddlewareType<Input, Output>,
      options: HandlerOptions & RelativeLocation<Input, Output>
    ) => {
      const { step = "initialize", name, tags, relation, toMiddleware } = options;
      const entry: RelativeMiddlewareEntry<Input, Output> = {
        middleware,
        step,
        name,
        tags,
        next: relation === "before" ? toMiddleware : undefined,
        prev: relation === "after" ? toMiddleware : undefined,
      };
      if (name) {
        if (Object.prototype.hasOwnProperty.call(entriesNameMap, name)) {
          throw new Error(`Duplicated middleware name '${name}'`);
        }
        entriesNameMap[name] = entry;
      }
      relativeEntries.push(entry);
    },
    clone: (): IMiddlewareStack<Input, Output> => cloneTo(constructStack<Input, Output>()),
    use: (plugin: Pluggable<Input, Output>) => {
      plugin.applyToStack(stack);
    },
    remove: (toRemove: MiddlewareType<Input, Output> | string): boolean => {
      if (typeof toRemove === "string") return removeByName(toRemove);
      else return removeByReference(toRemove);
    },
    removeByTag: (toRemove: string): boolean => {
      let removed = false;
      for (let i = absoluteEntries.length - 1; i >= 0; i--) {
        const { tags, name } = absoluteEntries[i];
        if (tags && tags.indexOf(toRemove) > -1) {
          absoluteEntries.splice(i, 1);
          if (name) delete entriesNameMap[name];
          removed = true;
        }
      }
      for (let i = relativeEntries.length - 1; i >= 0; i--) {
        const { tags, name } = relativeEntries[i];
        if (tags && tags.indexOf(toRemove) > -1) {
          relativeEntries.splice(i, 1);
          if (name) delete entriesNameMap[name];
          removed = true;
        }
      }
      return removed;
    },
    concat: <InputType extends Input, OutputType extends Output>(
      from: IMiddlewareStack<InputType, OutputType>
    ): IMiddlewareStack<InputType, OutputType> => cloneTo(from.clone()),
    resolve: <InputType extends Input, OutputType extends Output>(
      handler: DeserializeHandler<InputType, OutputType>,
      context: HandlerExecutionContext
    ): Handler<InputType, OutputType> => {
      for (const middleware of getMiddlewareList()) {
        handler = middleware(handler as Handler<Input, OutputType>, context) as any;
      }
      return handler as Handler<InputType, OutputType>;
    },
  };
  return stack;
}

const stepWeights: { [key in Step]: number } = {
  initialize: 5,
  serialize: 4,
  build: 3,
  finalizeRequest: 2,
  deserialize: 1,
};

const priorityWeights: { [key in Priority]: number } = {
  high: 3,
  normal: 2,
  low: 1,
};
