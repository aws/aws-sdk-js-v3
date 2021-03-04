import { marshall, marshallOptions, unmarshall, unmarshallOptions } from "@aws-sdk/util-dynamodb";

export type KeyNode = {
  key: string;
  children?: KeyNode[] | AllNodes;
};

export type AllNodes = {
  children?: KeyNode[] | AllNodes;
};

const processObj = (obj: any, processFunc: Function, children?: KeyNode[] | AllNodes): any => {
  if (obj) {
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

const processKeyInObj = (obj: any, processFunc: Function, children?: KeyNode[] | AllNodes): any => {
  if (Array.isArray(obj)) {
    return obj.map((item: any) => processObj(item, processFunc, children));
  }
  return processObj(obj, processFunc, children);
};

const processKeysInObj = (obj: any, processFunc: Function, keyNodes: KeyNode[]) =>
  keyNodes.reduce(
    (acc, { key, children }) => ({
      ...acc,
      [key]: processKeyInObj(acc[key], processFunc, children),
    }),
    obj
  );

const processAllKeysInObj = (obj: any, processFunc: Function, children?: KeyNode[] | AllNodes): any =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: processKeyInObj(value, processFunc, children),
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
