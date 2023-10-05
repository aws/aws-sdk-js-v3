import { marshallInput } from "./utils";

describe("marshallInput and processObj", () => {
  it("marshallInput should not ignore falsy values", () => {
    expect(marshallInput({ Items: [0, false, null, ""] }, { Items: null }, { convertTopLevelContainer: true })).toEqual(
      {
        Items: {
          L: [{ N: "0" }, { BOOL: false }, { NULL: true }, { S: "" }],
        },
      }
    );
  });
});

describe("marshallInput for commands", () => {
  it("marshals QueryCommand input", () => {
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
    expect(marshallInput(input, inputKeyNodes, { convertTopLevelContainer: true })).toEqual(output);
  });
  it("marshals ExecuteStatementCommand input", () => {
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
    expect(marshallInput(input, inputKeyNodes, { convertTopLevelContainer: true })).toEqual(output);
  });
  it("marshals BatchExecuteStatementCommand input", () => {
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
    expect(marshallInput(input, inputKeyNodes, { convertTopLevelContainer: true })).toEqual(output);
  });
});
