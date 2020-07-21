import {
  AbsoluteLocation,
  DeserializeHandler,
  Handler,
  HandlerExecutionContext,
  HandlerOptions,
  MiddlewareStack,
  MiddlewareType,
  Pluggable,
  Priority,
  RelativeLocation,
  Step,
} from "@aws-sdk/types";

import { AbsoluteMiddlewareEntry, MiddlewareEntry, Normalized, RelativeMiddlewareEntry } from "./types";

export function constructStack<Input extends object, Output extends object>(): MiddlewareStack<Input, Output> {
  let absoluteEntries: AbsoluteMiddlewareEntry<Input, Output>[] = [];
  let relativeEntries: RelativeMiddlewareEntry<Input, Output>[] = [];
  const entriesNameSet: Set<string> = new Set();

  const sort = <T extends AbsoluteMiddlewareEntry<Input, Output>>(entries: T[]): T[] =>
    entries.sort(
      (a, b) =>
        stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]
    );

  const removeByName = (toRemove: string): boolean => {
    let isRemoved = false;
    const filterCb = (entry: MiddlewareEntry<Input, Output>): boolean => {
      if (entry.name && entry.name === toRemove) {
        isRemoved = false;
        entriesNameSet.delete(toRemove);
        return false;
      }
      return true;
    };
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  };

  const removeByReference = (toRemove: MiddlewareType<Input, Output>): boolean => {
    let isRemoved = false;
    const filterCb = (entry: MiddlewareEntry<Input, Output>): boolean => {
      if (entry.middleware === toRemove) {
        isRemoved = true;
        if (entry.name) entriesNameSet.delete(entry.name);
        return false;
      }
      return true;
    };
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  };

  const removeByTag = (toRemove: string): boolean => {
    let isRemoved = false;
    const filterCb = (entry: MiddlewareEntry<Input, Output>): boolean => {
      const { tags, name } = entry;
      if (tags && tags.includes(toRemove)) {
        if (name) entriesNameSet.delete(name);
        isRemoved = true;
        return false;
      }
      return true;
    };
    absoluteEntries = absoluteEntries.filter(filterCb);
    relativeEntries = relativeEntries.filter(filterCb);
    return isRemoved;
  };

  const cloneTo = <InputType extends Input, OutputType extends Output>(
    toStack: MiddlewareStack<InputType, OutputType>
  ): MiddlewareStack<InputType, OutputType> => {
    const clone = toStack;
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

  const expandRelativeMiddlewareList = (
    from: Normalized<MiddlewareEntry<Input, Output>, Input, Output>
  ): MiddlewareEntry<Input, Output>[] => {
    const expandedMiddleareList: MiddlewareEntry<Input, Output>[] = [];
    from.before.forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddleareList.push(entry);
      } else {
        expandedMiddleareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    expandedMiddleareList.push(from);
    from.after.reverse().forEach((entry) => {
      if (entry.before.length === 0 && entry.after.length === 0) {
        expandedMiddleareList.push(entry);
      } else {
        expandedMiddleareList.push(...expandRelativeMiddlewareList(entry));
      }
    });
    return expandedMiddleareList;
  };

  /**
   * Get a final list of middleware in the order of being executed in the resolved handler.
   */
  const getMiddlewareList = (): Array<MiddlewareType<Input, Output>> => {
    const normalizedAbsoluteEntries: Normalized<AbsoluteMiddlewareEntry<Input, Output>, Input, Output>[] = [];
    const normalizedRelativeEntries: Normalized<RelativeMiddlewareEntry<Input, Output>, Input, Output>[] = [];
    const normalizedEntriesNameMap: {
      [middlewareName: string]: Normalized<MiddlewareEntry<Input, Output>, Input, Output>;
    } = {};
    absoluteEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: [],
      };
      if (normalizedEntry.name) normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
      normalizedAbsoluteEntries.push(normalizedEntry);
    });
    relativeEntries.forEach((entry) => {
      const normalizedEntry = {
        ...entry,
        before: [],
        after: [],
      };
      if (normalizedEntry.name) normalizedEntriesNameMap[normalizedEntry.name] = normalizedEntry;
      normalizedRelativeEntries.push(normalizedEntry);
    });
    normalizedRelativeEntries.forEach((entry) => {
      if (entry.toMiddleware) {
        const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
        if (toMiddleware === undefined) {
          throw new Error(
            `${entry.toMiddleware} is not found when adding ${entry.name || "anonymous"} middleware ${entry.relation} ${
              entry.toMiddleware
            }`
          );
        }
        if (entry.relation === "after") {
          toMiddleware.after.push(entry);
        }
        if (entry.relation === "before") {
          toMiddleware.before.push(entry);
        }
      }
    });
    const mainChain = sort(normalizedAbsoluteEntries)
      .map(expandRelativeMiddlewareList)
      .reduce((wholeList, expendedMiddlewareList) => {
        // TODO: Replace it with Array.flat();
        wholeList.push(...expendedMiddlewareList);
        return wholeList;
      }, [] as MiddlewareEntry<Input, Output>[]);
    return mainChain.map((entry) => entry.middleware);
  };

  const stack = {
    add: (middleware: MiddlewareType<Input, Output>, options: HandlerOptions & AbsoluteLocation = {}) => {
      const { name, step = "initialize", tags, priority = "normal" } = options;
      const entry: AbsoluteMiddlewareEntry<Input, Output> = {
        name,
        step,
        tags,
        priority,
        middleware,
      };
      if (name) {
        if (entriesNameSet.has(name)) {
          throw new Error(`Duplicated middleware name '${name}'`);
        }
        entriesNameSet.add(name);
      }
      absoluteEntries.push(entry);
    },
    addRelativeTo: (middleware: MiddlewareType<Input, Output>, options: HandlerOptions & RelativeLocation) => {
      const { step = "initialize", name, tags, relation, toMiddleware } = options;
      const entry: RelativeMiddlewareEntry<Input, Output> = {
        middleware,
        step,
        name,
        tags,
        relation,
        toMiddleware,
      };
      if (name) {
        if (entriesNameSet.has(name)) {
          throw new Error(`Duplicated middleware name '${name}'`);
        }
        entriesNameSet.add(name);
      }
      relativeEntries.push(entry);
    },
    clone: (base?: MiddlewareStack<Input, Output>) => cloneTo(base || constructStack<Input, Output>()),
    use: (plugin: Pluggable<Input, Output>) => {
      plugin.applyToStack(stack);
    },
    remove: (toRemove: MiddlewareType<Input, Output> | string): boolean => {
      if (typeof toRemove === "string") return removeByName(toRemove);
      else return removeByReference(toRemove);
    },
    removeByTag,
    concat: <InputType extends Input, OutputType extends Output>(
      from: MiddlewareStack<InputType, OutputType>
    ): MiddlewareStack<InputType, OutputType> => from.clone(cloneTo(constructStack<InputType, OutputType>())),
    resolve: <InputType extends Input, OutputType extends Output>(
      handler: DeserializeHandler<InputType, OutputType>,
      context: HandlerExecutionContext
    ): Handler<InputType, OutputType> => {
      for (const middleware of getMiddlewareList().reverse()) {
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
