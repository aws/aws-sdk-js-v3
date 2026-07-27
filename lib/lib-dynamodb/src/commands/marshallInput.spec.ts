import { describe, expect, test as it } from "vitest";

import { encodeInput } from "./utils";

describe("encodeInput and processObj", () => {
  it("encodeInput should not ignore falsy values", () => {
    expect(encodeInput({ Items: [0, false, null, ""] }, { Items: null })).toEqual({
      Items: {
        L: [{ N: "0" }, { BOOL: false }, { NULL: true }, { S: "" }],
      },
    });
  });

  it("encodeInput should ignore function properties", () => {
    const input = { Items: [() => {}, 1, "test"] };
    const inputKeyNodes = { Items: null };
    const output = { Items: { L: [{ N: "1" }, { S: "test" }] } };
    expect(encodeInput(input, inputKeyNodes, { convertClassInstanceToMap: true })).toEqual(output);
  });
});

describe("encodeInput for commands", () => {
  it("encodes QueryCommand input", () => {
    const input = {
      TableName: "TestTable",
      KeyConditions: {
        id: {
          AttributeValueList: ["test"],
          ComparisonOperator: "EQ",
        },
      },
    };
    const inputKeyNodes = {
      KeyConditions: {
        "*": {
          AttributeValueList: [],
        },
      },
      QueryFilter: {
        "*": {
          AttributeValueList: null,
        },
      },
      ExclusiveStartKey: null,
      ExpressionAttributeValues: null,
    };
    const output = {
      TableName: "TestTable",
      KeyConditions: { id: { AttributeValueList: [{ S: "test" }], ComparisonOperator: "EQ" } },
      QueryFilter: undefined,
      ExclusiveStartKey: undefined,
      ExpressionAttributeValues: undefined,
    };
    expect(encodeInput(input, inputKeyNodes)).toEqual(output);
  });
  it("encodes ExecuteStatementCommand input", () => {
    const input = {
      Statement: `SELECT col_1
                        FROM some_table
                        WHERE contains("col_1", ?)`,
      Parameters: ["some_param"],
    };
    const inputKeyNodes = {
      Parameters: [],
    };
    const output = {
      Statement: input.Statement,
      Parameters: [{ S: "some_param" }],
    };
    expect(encodeInput(input, inputKeyNodes)).toEqual(output);
  });
  it("encodes BatchExecuteStatementCommand input", () => {
    const input = {
      Statements: [
        {
          Statement: `
                        UPDATE "table"
                        SET field1=?
                        WHERE field2 = ?
                          AND field3 = ?
                    `,
          Parameters: [false, "field 2 value", 1234],
        },
      ],
    };
    const inputKeyNodes = {
      Statements: {
        "*": {
          Parameters: [],
        },
      },
    };
    const output = {
      Statements: [
        {
          Statement: input.Statements[0].Statement,
          Parameters: [
            {
              BOOL: false,
            },
            { S: "field 2 value" },
            { N: "1234" },
          ],
        },
      ],
    };
    expect(encodeInput(input, inputKeyNodes)).toEqual(output);
  });
});
