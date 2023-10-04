// smithy-typescript generated code
import { marshallInput, unmarshallOutput } from "./utils";

describe("utils", () => {
  const notAttrValue = { NotAttrValue: "NotAttrValue" };

  const attrValue = (num: number) => ({ id: { N: String(num) } });
  const nativeAttrValue = (num: number) => ({ id: num });

  const testCases = [
    {
      testName: "single key",
      keyNodes: [{ key: "Item", children: {} }],
      nativeAttrObj: { Item: nativeAttrValue(1), ...notAttrValue },
      attrObj: { Item: attrValue(1), ...notAttrValue },
    },
    {
      testName: "multiple keys",
      keyNodes: [
        { key: "Item1", children: {} },
        { key: "Item2", children: {} },
      ],
      nativeAttrObj: { Item1: nativeAttrValue(1), Item2: nativeAttrValue(2), ...notAttrValue },
      attrObj: { Item1: attrValue(1), Item2: attrValue(2), ...notAttrValue },
    },
    {
      testName: "array",
      keyNodes: [{ key: "Items", children: { children: {} } }],
      nativeAttrObj: { Items: [nativeAttrValue(1), nativeAttrValue(2)], ...notAttrValue },
      attrObj: { Items: [attrValue(1), attrValue(2)], ...notAttrValue },
    },
    {
      testName: "secondary level",
      keyNodes: [{ key: "Parent", children: [{ key: "Item", children: {} }] }],
      nativeAttrObj: { Parent: { Item: nativeAttrValue(1), ...notAttrValue }, ...notAttrValue },
      attrObj: { Parent: { Item: attrValue(1), ...notAttrValue }, ...notAttrValue },
    },
    {
      testName: "secondary level array",
      keyNodes: [{ key: "Parent", children: [{ key: "Items", children: { children: {} } }] }],
      nativeAttrObj: { Parent: { Items: [nativeAttrValue(1), nativeAttrValue(2)], ...notAttrValue }, ...notAttrValue },
      attrObj: { Parent: { Items: [attrValue(1), attrValue(2)], ...notAttrValue }, ...notAttrValue },
    },
    {
      testName: "all entries",
      keyNodes: [{ key: "Parent", children: { children: {} } }],
      nativeAttrObj: { Parent: { key1: nativeAttrValue(1), key2: nativeAttrValue(2) }, ...notAttrValue },
      attrObj: { Parent: { key1: attrValue(1), key2: attrValue(2) }, ...notAttrValue },
    },
    {
      testName: "all entries single key",
      keyNodes: [{ key: "Parent", children: { children: [{ key: "Item", children: {} }] } }],
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
      keyNodes: [
        {
          key: "Parent",
          children: {
            children: [
              { key: "Item1", children: {} },
              { key: "Item2", children: {} },
            ],
          },
        },
      ],
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
      keyNodes: [{ key: "Parent", children: { children: [{ key: "Items", children: { children: {} } }] } }],
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
