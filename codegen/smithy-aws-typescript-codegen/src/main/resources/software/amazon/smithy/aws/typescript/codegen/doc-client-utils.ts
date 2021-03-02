import { marshall, marshallOptions, unmarshall, unmarshallOptions } from "@aws-sdk/util-dynamodb";

export type KeyNode = {
  key: string;
  children?: KeyNode[] | AllNodes;
};

export type AllNodes = {
  children?: KeyNode[] | AllNodes;
};

const processKeyInObj = (obj: any, keyNode: KeyNode, processFunc: Function) => {
  const { key, children } = keyNode;
  if (Array.isArray(obj)) {
    // Process key for each element of the array.
    obj = obj.map((item: any) => processKeyInObj(item, keyNode, processFunc));
  } else if (obj[key]) {
    if (!children || (Array.isArray(children) && children.length === 0)) {
      // Leaf of KeyNode, process the key.
      if (Array.isArray(obj[key])) {
        obj[key] = obj[key].map(processFunc);
      } else {
        obj[key] = processFunc(obj[key]);
      }
    } else {
      // Not leaf node, process the children.
      if (Array.isArray(children)) {
        // Specific keys of children need to be processed.
        for (const keyNodeChild of children) {
          if (Array.isArray(obj[key])) {
            // Each element of array needs to be processed.
            obj[key] = obj[key].map((item: any) => processKeyInObj(item, keyNodeChild, processFunc));
          } else {
            obj[key] = processKeyInObj(obj[key], keyNodeChild, processFunc);
          }
        }
      } else {
        // All children require processing.
        obj[key] = processAllKeysInObj(obj[key], children, processFunc);
      }
    }
  }
  return obj;
};

const processKeysInObj = (obj: any, keyNodes: KeyNode[], processFunc: Function) => {
  for (const keyNode of keyNodes) {
    obj = processKeyInObj(obj, keyNode, processFunc);
  }
  return obj;
};

const processAllKeysInObj = (obj: any, allNodes: AllNodes, processFunc: Function) => {
  const { children } = allNodes;
  for (const key in obj) {
    if (!children) {
      // Leaf, process key without children.
      obj = processKeyInObj(obj, { key }, processFunc);
    } else if (Array.isArray(children)) {
      for (const keyNode of children) {
        obj[key] = processKeyInObj(obj[key], keyNode, processFunc);
      }
    } else {
      obj[key] = processAllKeysInObj(obj[key], children, processFunc);
    }
  }
  return obj;
};

export const marshallInput = (obj: any, keyNodes: KeyNode[], options?: marshallOptions) => {
  const marshallFunc = (toMarshall: any) => marshall(toMarshall, options);
  return processKeysInObj(obj, keyNodes, marshallFunc);
};

export const unmarshallOutput = (obj: any, keyNodes: KeyNode[], options?: unmarshallOptions) => {
  const unmarshallFunc = (toMarshall: any) => unmarshall(toMarshall, options);
  return processKeysInObj(obj, keyNodes, unmarshallFunc);
};
