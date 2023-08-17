import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";

import { marshallInput, unmarshallOutput } from "./utils";

jest.mock("@aws-sdk/util-dynamodb");

describe("utils", () => {
  const notAttrValue = { NotAttrValue: "NotAttrValue" };

  const attrValue = (num: number) => ({ id: { N: num } });
  const nativeAttrValue = (num: number) => ({ id: num });

  const testCases = [
    {
      testName: "single key",
      keyNodes: [{ key: "Item" }],
      attrObj: { Item: attrValue(1), ...notAttrValue },
      nativeAttrObj: { Item: nativeAttrValue(1), ...notAttrValue },
      processCalledTimes: 1,
    },
    {
      testName: "multiple keys",
      keyNodes: [{ key: "Item1" }, { key: "Item2" }],
      attrObj: { Item1: attrValue(1), Item2: attrValue(2), ...notAttrValue },
      nativeAttrObj: { Item1: nativeAttrValue(1), Item2: nativeAttrValue(2), ...notAttrValue },
      processCalledTimes: 2,
    },
    {
      testName: "array",
      keyNodes: [{ key: "Items" }],
      attrObj: { Items: [attrValue(1), attrValue(2)], ...notAttrValue },
      nativeAttrObj: { Items: [nativeAttrValue(1), nativeAttrValue(2)], ...notAttrValue },
      processCalledTimes: 2,
    },
    {
      testName: "secondary level",
      keyNodes: [{ key: "Parent", children: [{ key: "Item" }] }],
      attrObj: { Parent: { Item: attrValue(1), ...notAttrValue }, ...notAttrValue },
      nativeAttrObj: { Parent: { Item: nativeAttrValue(1), ...notAttrValue }, ...notAttrValue },
      processCalledTimes: 1,
    },
    {
      testName: "secondary level array",
      keyNodes: [{ key: "Parent", children: [{ key: "Items" }] }],
      attrObj: { Parent: { Items: [attrValue(1), attrValue(2)], ...notAttrValue }, ...notAttrValue },
      nativeAttrObj: { Parent: { Items: [nativeAttrValue(1), nativeAttrValue(2)], ...notAttrValue }, ...notAttrValue },
      processCalledTimes: 2,
    },
    {
      testName: "all entries",
      keyNodes: [{ key: "Parent", children: {} }],
      attrObj: { Parent: { key1: attrValue(1), key2: attrValue(2) }, ...notAttrValue },
      nativeAttrObj: { Parent: { key1: nativeAttrValue(1), key2: nativeAttrValue(2) }, ...notAttrValue },
      processCalledTimes: 2,
    },
    {
      testName: "all entries single key",
      keyNodes: [{ key: "Parent", children: { children: [{ key: "Item" }] } }],
      attrObj: {
        Parent: {
          key1: { Item: attrValue(1), ...notAttrValue },
          key2: { Item: attrValue(2), ...notAttrValue },
        },
        ...notAttrValue,
      },
      nativeAttrObj: {
        Parent: {
          key1: { Item: nativeAttrValue(1), ...notAttrValue },
          key2: { Item: nativeAttrValue(2), ...notAttrValue },
        },
        ...notAttrValue,
      },
      processCalledTimes: 2,
    },
    {
      testName: "all entries multiple keys",
      keyNodes: [{ key: "Parent", children: { children: [{ key: "Item1" }, { key: "Item2" }] } }],
      attrObj: {
        Parent: {
          key1: { Item1: attrValue(1), Item2: attrValue(2), ...notAttrValue },
          key2: { Item1: attrValue(3), Item2: attrValue(4), ...notAttrValue },
        },
        ...notAttrValue,
      },
      nativeAttrObj: {
        Parent: {
          key1: { Item1: nativeAttrValue(1), Item2: nativeAttrValue(2), ...notAttrValue },
          key2: { Item1: nativeAttrValue(3), Item2: nativeAttrValue(4), ...notAttrValue },
        },
        ...notAttrValue,
      },
      processCalledTimes: 4,
    },
    {
      testName: "all entries array",
      keyNodes: [{ key: "Parent", children: { children: [{ key: "Items" }] } }],
      attrObj: {
        Parent: {
          key1: { Items: [attrValue(1), attrValue(2)], ...notAttrValue },
          key2: { Items: [attrValue(3), attrValue(4)], ...notAttrValue },
        },
        ...notAttrValue,
      },
      nativeAttrObj: {
        Parent: {
          key1: { Items: [nativeAttrValue(1), nativeAttrValue(2)], ...notAttrValue },
          key2: { Items: [nativeAttrValue(3), nativeAttrValue(4)], ...notAttrValue },
        },
        ...notAttrValue,
      },
      processCalledTimes: 4,
    },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  testCases.forEach(({ testName, keyNodes, attrObj, nativeAttrObj, processCalledTimes }) => {
    describe(testName, () => {
      it(marshallInput.name, () => {
        for (let i = 1; i <= processCalledTimes; i++) {
          (marshall as jest.Mock).mockReturnValueOnce(attrValue(i));
        }
        expect(marshallInput(nativeAttrObj, keyNodes)).toEqual(attrObj);
        expect(marshall).toHaveBeenCalledTimes(processCalledTimes);
        for (let i = 1; i <= processCalledTimes; i++) {
          expect(marshall).toHaveBeenNthCalledWith(i, nativeAttrValue(i), undefined);
        }
      });

      it(unmarshallOutput.name, () => {
        for (let i = 1; i <= processCalledTimes; i++) {
          (unmarshall as jest.Mock).mockReturnValueOnce(nativeAttrValue(i));
        }
        expect(unmarshallOutput(attrObj, keyNodes)).toEqual(nativeAttrObj);
        expect(unmarshall).toHaveBeenCalledTimes(processCalledTimes);
        for (let i = 1; i <= processCalledTimes; i++) {
          expect(unmarshall).toHaveBeenNthCalledWith(i, attrValue(i), undefined);
        }
      });
    });
  });
});
