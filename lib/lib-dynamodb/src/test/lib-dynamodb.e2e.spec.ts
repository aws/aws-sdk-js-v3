import {
  BillingMode,
  CreateTableCommandOutput,
  DeleteItemCommandOutput,
  DeleteTableCommandOutput,
  DescribeTableCommandOutput,
  DynamoDB,
  waitUntilTableExists,
} from "@aws-sdk/client-dynamodb";
import {
  BatchGetCommandOutput,
  BatchWriteCommandOutput,
  DynamoDBDocument,
  ExecuteStatementCommandOutput,
  ExecuteTransactionCommandOutput,
  GetCommandOutput,
  PutCommandOutput,
  QueryCommandOutput,
  ScanCommandOutput,
  TransactGetCommandOutput,
  TransactWriteCommandOutput,
  UpdateCommandOutput,
} from "@aws-sdk/lib-dynamodb";

jest.setTimeout(60000);

describe(DynamoDBDocument.name, () => {
  const dynamodb = new DynamoDB({ region: "us-west-2" });
  const doc = DynamoDBDocument.from(dynamodb, {
    marshallOptions: {
      convertTopLevelContainer: true,
    },
  });

  const TableName = "js-sdk-dynamodb-test";

  const log = {
    describe: null as null | DescribeTableCommandOutput,
    create: null as null | CreateTableCommandOutput,
    write: {} as Record<string, PutCommandOutput>,
    read: {} as Record<string, GetCommandOutput>,
    batchWrite: null as null | BatchWriteCommandOutput,
    batchRead: null as null | BatchGetCommandOutput,
    transactWrite: null as null | TransactWriteCommandOutput,
    transactRead: null as null | TransactGetCommandOutput,
    executeStatement: null as null | ExecuteStatementCommandOutput,
    executeTransaction: null as null | ExecuteTransactionCommandOutput,
    query: null as null | QueryCommandOutput,
    scan: null as null | ScanCommandOutput,
    update: {} as Record<string, UpdateCommandOutput>,
    readAfterUpdate: {} as Record<string, GetCommandOutput>,
    delete: {} as Record<string, DeleteItemCommandOutput>,
    drop: null as null | DeleteTableCommandOutput,
  };

  const data = {
    null: null,
    string: "myString",
    number: 1,
    boolean: true,
    sSet: new Set(["my", "string", "set"]),
    nSet: new Set([2, 3, 4]),
    list: [
      null,
      "myString",
      1,
      true,
      new Set(["my", "string", "set"]),
      new Set([2, 3, 4]),
      ["listInList", 1, null],
      {
        mapInList: "mapInList",
      },
    ],
    map: {
      null: null,
      string: "myString",
      number: 1,
      boolean: true,
      sSet: new Set(["my", "string", "set"]),
      nSet: new Set([2, 3, 4]),
      listInMap: ["listInMap", 1, null],
      mapInMap: { mapInMap: "mapInMap" },
    },
  };

  const updateTransform = <T>(input: T): T => {
    switch (typeof input) {
      case "object":
        if (input === null) {
          return null as T;
        }
        if (Array.isArray(input)) {
          return input.map(updateTransform) as T;
        }
        if (input instanceof Set) {
          return new Set([...input].map(updateTransform)) as T;
        }
        return Object.entries(input).reduce((acc, [k, v]) => {
          acc[updateTransform(k)] = updateTransform(v);
          return acc;
        }, {}) as T;
      case "boolean":
        return !input as T;
      case "number":
        return (input + 1) as T;
      case "string":
        return (input + "-x") as T;
    }
    return input;
  };

  const passError = (e) => e;

  beforeAll(async () => {
    log.describe = await dynamodb
      .describeTable({
        TableName,
      })
      .catch((e) => {
        return null;
      });
    if (!log.describe?.Table) {
      log.create = await dynamodb
        .createTable({
          TableName,
          AttributeDefinitions: [
            {
              AttributeName: "id",
              AttributeType: "S",
            },
          ],
          KeySchema: [
            {
              AttributeName: "id",
              KeyType: "HASH",
            },
          ],
          BillingMode: BillingMode.PAY_PER_REQUEST,
        })
        .catch(passError);
      await waitUntilTableExists(
        { client: dynamodb, maxWaitTime: 60 },
        {
          TableName,
        }
      );
    }

    for (const [id, value] of [["1", data as any], ...Object.entries(data)]) {
      log.write[id] = await doc
        .put({
          TableName,
          Item: {
            id,
            data: value,
          },
        })
        .catch(passError);

      log.read[id] = await doc
        .get({
          TableName,
          Key: {
            id,
          },
        })
        .catch(passError);
    }

    log.batchRead = await doc.batchGet({
      RequestItems: {
        [TableName]: {
          Keys: [
            ...Object.keys(data).map((key) => {
              return { id: key };
            }),
          ],
        },
      },
    });

    for (const [id, value] of [["1", data as any], ...Object.entries(data)]) {
      log.update[id] = await doc
        .update({
          TableName,
          Key: {
            id,
          },
          AttributeUpdates: {
            data: {
              Action: "PUT",
              Value: updateTransform(value),
            },
          },
        })
        .catch(passError);

      log.readAfterUpdate[id] = await doc
        .get({
          TableName,
          Key: {
            id,
          },
        })
        .catch(passError);

      log.delete[id] = await doc
        .delete({
          TableName,
          Key: {
            id,
          },
        })
        .catch(passError);
    }
  });

  describe("updateTransformFunction", () => {
    it("modifies all fields of an object", () => {
      expect(updateTransform(data)).toEqual({
        "null-x": null,
        "string-x": "myString-x",
        "number-x": 2,
        "boolean-x": false,
        "sSet-x": new Set(["my-x", "string-x", "set-x"]),
        "nSet-x": new Set([3, 4, 5]),
        "list-x": [
          null,
          "myString-x",
          2,
          false,
          new Set(["my-x", "string-x", "set-x"]),
          new Set([3, 4, 5]),
          ["listInList-x", 2, null],
          { "mapInList-x": "mapInList-x" },
        ],
        "map-x": {
          "null-x": null,
          "string-x": "myString-x",
          "number-x": 2,
          "boolean-x": false,
          "sSet-x": new Set(["my-x", "string-x", "set-x"]),
          "nSet-x": new Set([3, 4, 5]),
          "listInMap-x": ["listInMap-x", 2, null],
          "mapInMap-x": { "mapInMap-x": "mapInMap-x" },
        },
      });
    });
  });

  it("initializes using the static constructor", async () => {
    expect(doc).toBeInstanceOf(DynamoDBDocument);
  });

  it("describes the test table tables", async () => {
    if (log.describe) {
      expect(log.describe?.Table?.TableName).toEqual(TableName);
    }
  });

  it("creates the test table if it does not exist", async () => {
    if (log.describe) {
      expect(log.describe?.Table?.TableName).toEqual(TableName);
    } else {
      expect(log.create?.TableDescription?.TableName).toEqual(TableName);
    }
  });

  it("can batch write", async () => {
    throw new Error("NYI");
  });

  it("can batch read", async () => {
    const results = log.batchRead?.Responses?.[TableName] ?? [];

    for (const result of results) {
      expect(result.data).toEqual(data[result.id]);
    }
  });

  it("can transact write", async () => {
    throw new Error("NYI");
  });

  it("can transact read", async () => {
    throw new Error("NYI");
  });

  it("can execute statements", async () => {
    throw new Error("NYI");
  });

  it("can execute transactions", async () => {
    throw new Error("NYI");
  });

  it("can query", async () => {
    throw new Error("NYI");
  });

  it("can scan", async () => {
    throw new Error("NYI");
  });

  for (const [key, value] of Object.entries(data)) {
    it(`can write data of type ${key}`, async () => {
      expect(log.write[key].$metadata).toBeDefined();
    });

    it(`can read data of type ${key}`, async () => {
      expect(log.read[key].Item).toEqual({
        id: key,
        data: value,
      });
    });

    it(`can update data of type ${key}`, async () => {
      expect(log.readAfterUpdate[key].Item).toEqual({
        id: key,
        data: updateTransform(value),
      });
    });

    it(`can delete data of type ${key}`, async () => {
      expect(log.delete[key].$metadata).toBeDefined();
    });
  }
});
