import { marshall, marshallOptions, unmarshall, unmarshallOptions } from "@aws-sdk/util-dynamodb";

/**
 * @internal
 */
export type KeyNodeSelf = null;
/**
 * @internal
 */
export const SELF: KeyNodeSelf = null;

/**
 * @internal
 */
export type KeyNodeChildren = Record<string, any>;
/**
 * @internal
 */
export const ALL_VALUES: KeyNodeChildren = {};
/**
 * @internal
 */
export const ALL_MEMBERS: KeyNodeChildren = [];
/**
 * @internal
 */
const NEXT_LEVEL = "*";

/**
 * @internal
 */
export type KeyNodes = KeyNodeSelf | KeyNodeChildren;

const processObj = (obj: any, processFunc: Function, keyNodes?: KeyNodes): any => {
  if (obj !== undefined) {
    if (keyNodes == null) {
      // Leaf of KeyNode, process the object.
      return processFunc(obj);
    } else {
      const keys = Object.keys(keyNodes);

      const goToNextLevel = keys.length === 1 && keys[0] === NEXT_LEVEL;
      const someChildren = keys.length >= 1 && !goToNextLevel;
      const allChildren = keys.length === 0;

      // Not leaf node, process the children.
      if (someChildren) {
        return processKeysInObj(obj, processFunc, keyNodes as KeyNodeChildren);
      } else if (allChildren) {
        return processAllKeysInObj(obj, processFunc, SELF);
      } else if (goToNextLevel) {
        return Object.entries(obj ?? {}).reduce((acc, [k, v]) => {
          acc[k] = processObj(v, processFunc, keyNodes[NEXT_LEVEL]);
          return acc;
        }, (Array.isArray(obj) ? [] : {}) as any);
      }
    }
  }
  return undefined;
};

const processKeysInObj = (obj: any, processFunc: Function, keyNodes: KeyNodeChildren) => {
  let accumulator: any;
  if (Array.isArray(obj)) {
    accumulator = [...obj];
  } else {
    accumulator = { ...obj };
  }

  for (const [nodeKey, nodes] of Object.entries(keyNodes)) {
    const processedValue = processObj(obj[nodeKey], processFunc, nodes);
    if (processedValue !== undefined) {
      accumulator[nodeKey] = processedValue;
    }
  }

  return accumulator;
};

const processAllKeysInObj = (obj: any, processFunc: Function, keyNodes: KeyNodes): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => processObj(item, processFunc, keyNodes));
  }
  return Object.entries(obj).reduce((acc, [key, value]) => {
    const processedValue = processObj(value, processFunc, keyNodes);
    if (processedValue !== undefined) {
      acc[key] = processedValue;
    }
    return acc;
  }, {} as any);
};

function copyWithoutFunctions(o: any, depth = 0): any {
  if (depth > 1000) {
    throw new Error(
      "Recursive copy depth exceeded 1000. Please set options.convertClassInstanceToMap to false and manually remove functions from your data object."
    );
  }
  if (typeof o === "object" || typeof o === "function") {
    if (Array.isArray(o)) {
      return o.filter((item) => typeof item !== "function").map((item) => copyWithoutFunctions(item, depth + 1));
    }
    if (o === null) {
      return null;
    }
    const copy = {} as any;
    for (const [key, value] of Object.entries(o)) {
      if (typeof value !== "function") {
        copy[key] = copyWithoutFunctions(value, depth + 1);
      }
    }
    return copy;
  } else {
    return o;
  }
}

/**
 * @internal
 */
export const marshallInput = (obj: any, keyNodes: KeyNodeChildren, options?: marshallOptions) => {
  let _obj = obj;
  if (options?.convertClassInstanceToMap) {
    _obj = copyWithoutFunctions(obj);
  }
  const marshallFunc = (toMarshall: any) => marshall(toMarshall, options);
  return processKeysInObj(_obj, marshallFunc, keyNodes);
};

/**
 * @internal
 */
export const unmarshallOutput = (obj: any, keyNodes: KeyNodeChildren, options?: unmarshallOptions) => {
  const unmarshallFunc = (toMarshall: any) => unmarshall(toMarshall, options);
  return processKeysInObj(obj, unmarshallFunc, keyNodes);
};
