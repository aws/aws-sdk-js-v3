import { marshallInput, unmarshallOutput } from "./utils";

describe("utils", () => {
  const notAttrValue = { NotAttrValue: "NotAttrValue" };

  const attrValue = (num: number) => ({ id: { N: String(num) } });
  const nativeAttrValue = (num: number) => ({ id: num });

  const testCases = [
    {
      testName: "single key",
      keyNodes: { Item: {} },
      nativeAttrObj: { Item: nativeAttrValue(1), ...notAttrValue },
      attrObj: { Item: attrValue(1), ...notAttrValue },
    },
    {
      testName: "multiple keys",
      keyNodes: { Item1: {}, Item2: {} },
      nativeAttrObj: { Item1: nativeAttrValue(1), Item2: nativeAttrValue(2), ...notAttrValue },
      attrObj: { Item1: attrValue(1), Item2: attrValue(2), ...notAttrValue },
    },
    {
      testName: "array",
      keyNodes: { Items: { "*": {} } },
      nativeAttrObj: { Items: [nativeAttrValue(1), nativeAttrValue(2)], ...notAttrValue },
      attrObj: { Items: [attrValue(1), attrValue(2)], ...notAttrValue },
    },
    {
      testName: "secondary level",
      keyNodes: {
        Parent: {
          Item: {},
        },
      },
      nativeAttrObj: { Parent: { Item: nativeAttrValue(1), ...notAttrValue }, ...notAttrValue },
      attrObj: { Parent: { Item: attrValue(1), ...notAttrValue }, ...notAttrValue },
    },
    {
      testName: "secondary level array",
      keyNodes: {
        Parent: {
          Items: {
            "*": [],
          },
        },
      },
      nativeAttrObj: { Parent: { Items: [nativeAttrValue(1), nativeAttrValue(2)], ...notAttrValue }, ...notAttrValue },
      attrObj: { Parent: { Items: [attrValue(1), attrValue(2)], ...notAttrValue }, ...notAttrValue },
    },
    {
      testName: "all entries",
      keyNodes: {
        Parent: {
          "*": {},
        },
      },
      nativeAttrObj: { Parent: { key1: nativeAttrValue(1), key2: nativeAttrValue(2) }, ...notAttrValue },
      attrObj: { Parent: { key1: attrValue(1), key2: attrValue(2) }, ...notAttrValue },
    },
    {
      testName: "all entries single key",
      keyNodes: {
        Parent: {
          "*": {
            Item: {},
          },
        },
      },
      nativeAttrObj: {
        Parent: {
          key1: { Item: nativeAttrValue(1), ...notAttrValue },
          key2: { Item: nativeAttrValue(2), ...notAttrValue },
        },
        ...notAttrValue,
      },
      attrObj: {
        Parent: {
          key1: { Item: attrValue(1), ...notAttrValue },
          key2: { Item: attrValue(2), ...notAttrValue },
        },
        ...notAttrValue,
      },
    },
    {
      testName: "all entries multiple keys",
      keyNodes: {
        Parent: {
          "*": {
            Item1: {},
            Item2: {},
          },
        },
      },
      nativeAttrObj: {
        Parent: {
          key1: { Item1: nativeAttrValue(1), Item2: nativeAttrValue(2), ...notAttrValue },
          key2: { Item1: nativeAttrValue(3), Item2: nativeAttrValue(4), ...notAttrValue },
        },
        ...notAttrValue,
      },
      attrObj: {
        Parent: {
          key1: { Item1: attrValue(1), Item2: attrValue(2), ...notAttrValue },
          key2: { Item1: attrValue(3), Item2: attrValue(4), ...notAttrValue },
        },
        ...notAttrValue,
      },
    },
    {
      testName: "all entries array",
      keyNodes: {
        Parent: {
          "*": {
            Items: {
              "*": [],
            },
          },
        },
      },
      nativeAttrObj: {
        Parent: {
          key1: { Items: [nativeAttrValue(1), nativeAttrValue(2)], ...notAttrValue },
          key2: { Items: [nativeAttrValue(3), nativeAttrValue(4)], ...notAttrValue },
        },
        ...notAttrValue,
      },
      attrObj: {
        Parent: {
          key1: { Items: [attrValue(1), attrValue(2)], ...notAttrValue },
          key2: { Items: [attrValue(3), attrValue(4)], ...notAttrValue },
        },
        ...notAttrValue,
      },
    },
  ];

  testCases.forEach(({ testName, keyNodes, attrObj, nativeAttrObj }) => {
    describe(testName, () => {
      it(marshallInput.name, () => {
        expect(marshallInput(nativeAttrObj, keyNodes, { convertTopLevelContainer: true })).toEqual(attrObj);
      });

      it(unmarshallOutput.name, () => {
        expect(unmarshallOutput(attrObj, keyNodes, { convertWithoutMapWrapper: true })).toEqual(nativeAttrObj);
      });
    });
  });
});
