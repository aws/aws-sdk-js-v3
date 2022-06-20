// smithy-typescript generated code
import { marshall, marshallOptions, unmarshall, unmarshallOptions } from "@aws-sdk/util-dynamodb";

export type KeyNode = {
  key: string;
  children?: KeyNode[] | AllNodes;
  marshallTopLevelArrays?: boolean;
};

export type AllNodes = {
  children?: KeyNode[] | AllNodes;
};

const processObj = (
  obj: any,
  processFunc: Function,
  children?: KeyNode[] | AllNodes,
  marshallTopLevelArrays?: boolean
): any => {
  if (obj !== undefined) {
    if (!children || (Array.isArray(children) && children.length === 0)) {
      // Leaf of KeyNode, process the object.
      return processFunc(obj);
    } else {
      // Not leaf node, process the children.
      if (Array.isArray(children)) {
        // Specific keys of children need to be processed.
        return processKeysInObj(obj, processFunc, children, marshallTopLevelArrays);
      } else {
        // All children require processing.
        return processAllKeysInObj(obj, processFunc, children.children, marshallTopLevelArrays);
      }
    }
  }
  return undefined;
};

const processKeyInObj = (
  obj: any,
  processFunc: Function,
  children?: KeyNode[] | AllNodes,
  marshallTopLevelArrays?: boolean
): any => {
  if (Array.isArray(obj) && !marshallTopLevelArrays) {
    return obj.map((item: any) => processObj(item, processFunc, children));
  }
  return processObj(obj, processFunc, children, marshallTopLevelArrays);
};

const processKeysInObj = (obj: any, processFunc: Function, keyNodes: KeyNode[], marshallTopLevelArrays?: boolean) =>
  keyNodes.reduce(
    (acc, { key, children, marshallTopLevelArrays }) => ({
      ...acc,
      [key]: processKeyInObj(acc[key], processFunc, children, marshallTopLevelArrays),
    }),
    obj
  );

const processAllKeysInObj = (
  obj: any,
  processFunc: Function,
  children?: KeyNode[] | AllNodes,
  marshallTopLevelArrays?: boolean
): any =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: processKeyInObj(value, processFunc, children, marshallTopLevelArrays),
    }),
    {}
  );

export const marshallInput = (obj: any, keyNodes: KeyNode[], options?: marshallOptions) => {
  const marshallFunc = (toMarshall: any) => marshall(toMarshall, options);
  return processKeysInObj(obj, marshallFunc, keyNodes);
};

export const unmarshallOutput = (obj: any, keyNodes: KeyNode[], options?: unmarshallOptions) => {
  const unmarshallFunc = (toMarshall: any) => unmarshall(toMarshall, options);
  return processKeysInObj(obj, unmarshallFunc, keyNodes);
};
