// smithy-typescript generated code
import { marshall, marshallOptions, unmarshall, unmarshallOptions } from "@aws-sdk/util-dynamodb";

/**
 * @internal
 */
export type KeyNode = {
  key: string;
  children?: KeyNode[] | AllNodes;
};

/**
 * @internal
 */
export type AllNodes = {
  children?: KeyNode[] | AllNodes;
};

const processObj = (obj: any, processFunc: Function, children?: KeyNode[] | AllNodes): any => {
  if (obj !== undefined) {
    if (!children || (Array.isArray(children) && children.length === 0)) {
      // Leaf of KeyNode, process the object.
      return processFunc(obj);
    } else {
      // Not leaf node, process the children.
      if (Array.isArray(children)) {
        // Specific keys of children need to be processed.
        return processKeysInObj(obj, processFunc, children);
      } else {
        // All children require processing.
        return processAllKeysInObj(obj, processFunc, children.children);
      }
    }
  }
  return undefined;
};

const processKeysInObj = (obj: any, processFunc: Function, keyNodes: KeyNode[]) => {
  let accumulator: any;
  if (Array.isArray(obj)) {
    accumulator = [...obj];
  } else {
    accumulator = { ...obj };
  }
  return keyNodes.reduce((acc, { key, children }) => {
    const value = processObj(acc[key], processFunc, children);
    if (value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, accumulator);
};

const processAllKeysInObj = (obj: any, processFunc: Function, children?: KeyNode[] | AllNodes): any => {
  if (Array.isArray(obj)) {
    return obj.map((item) => processObj(item, processFunc, children));
  }
  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = processObj(value, processFunc, children);
    return acc;
  }, {} as any);
};

/**
 * @internal
 */
export const marshallInput = (obj: any, keyNodes: KeyNode[], options?: marshallOptions) => {
  const marshallFunc = (toMarshall: any) => marshall(toMarshall, options);
  return processKeysInObj(obj, marshallFunc, keyNodes);
};

/**
 * @internal
 */
export const unmarshallOutput = (obj: any, keyNodes: KeyNode[], options?: unmarshallOptions) => {
  const unmarshallFunc = (toMarshall: any) => unmarshall(toMarshall, options);
  return processKeysInObj(obj, unmarshallFunc, keyNodes);
};
