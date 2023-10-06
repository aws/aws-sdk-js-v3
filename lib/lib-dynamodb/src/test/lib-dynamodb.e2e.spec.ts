import {
  BillingMode,
  CreateTableCommandOutput,
  DeleteItemCommandOutput,
  DescribeTableCommandOutput,
  DynamoDB,
  GetItemCommandOutput,
  waitUntilTableExists,
} from "@aws-sdk/client-dynamodb";
import {
  BatchExecuteStatementCommandOutput,
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

jest.setTimeout(60000); // expected running time: 10s

describe(DynamoDBDocument.name, () => {
  const dynamodb = new DynamoDB({ region: "us-west-2", maxAttempts: 10 });
  const doc = DynamoDBDocument.from(dynamodb, {
    marshallOptions: {
      convertTopLevelContainer: true,
    },
  });

  function throwIfError(e: unknown) {
    if (e instanceof Error) {
      throw e;
    }
  }

  // Random element limited to 0-99 to avoid concurrent build IO.
  // Tables will be dropped at the end of the test.
  // For faster test development, remove this random suffix and
  // don't delete the table in afterAll().
  // The table will in that case be re-used.
  const randId = String((Math.random() * 99) | 0);

  const TableName = `js-sdk-dynamodb-test-${randId}`;

  const log = {
    describe: null as null | DescribeTableCommandOutput,
    create: null as null | CreateTableCommandOutput,
    write: {} as Record<string, PutCommandOutput>,
    read: {} as Record<string, GetCommandOutput>,
    batchWrite: null as null | BatchWriteCommandOutput,
    batchRead: null as null | BatchGetCommandOutput,
    transactWrite: null as null | TransactWriteCommandOutput,
    transactRead: null as null | TransactGetCommandOutput,
    executeTransaction: null as null | ExecuteTransactionCommandOutput,
    executeTransactionReadBack: {} as Record<string, GetItemCommandOutput>,
    executeStatement: {} as Record<string, ExecuteStatementCommandOutput>,
    executeStatementReadBack: {} as Record<string, GetItemCommandOutput>,
    batchExecuteStatement: null as null | BatchExecuteStatementCommandOutput,
    batchExecuteStatementReadBack: null as null | BatchExecuteStatementCommandOutput,
    query: null as null | QueryCommandOutput,
    scan: null as null | ScanCommandOutput,
    update: {} as Record<string, UpdateCommandOutput>,
    updateReadBack: {} as Record<string, GetCommandOutput>,
    delete: {} as Record<string, DeleteItemCommandOutput>,
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

    log.batchWrite = await doc
      .batchWrite({
        RequestItems: {
          [TableName]: [
            ...Object.entries(data).map(([k, v]) => {
              return {
                PutRequest: {
                  Item: {
                    id: k + "-batch",
                    data: v,
                  },
                },
              };
            }),
          ],
        },
      })
      .catch(passError);

    log.batchRead = await doc
      .batchGet({
        RequestItems: {
          [TableName]: {
            Keys: [
              ...Object.keys(data).map((key) => {
                return { id: key + "-batch" };
              }),
            ],
          },
        },
      })
      .catch(passError);

    log.transactWrite = await doc
      .transactWrite({
        TransactItems: [
          ...Object.entries(data).map(([k, v]) => {
            return {
              Put: {
                TableName,
                Key: {
                  id: k + "-transact",
                },
                Item: {
                  id: k + "-transact",
                  data: v,
                },
              },
            };
          }),
        ],
      })
      .catch(passError);

    log.transactRead = await doc
      .transactGet({
        TransactItems: [
          ...Object.keys(data).map((k) => {
            return {
              Get: {
                TableName,
                Key: {
                  id: k + "-transact",
                },
              },
            };
          }),
        ],
      })
      .catch(passError);

    log.executeTransaction = await doc
      .executeTransaction({
        TransactStatements: [
          ...Object.entries(data).map(([k, v]) => {
            return {
              Statement: `INSERT INTO "${TableName}" value {'id':?,'data':?}`,
              Parameters: [k + "-exec-transact", v],
            };
          }),
        ],
      })
      .catch(passError);
    for (const [k] of Object.entries(data)) {
      log.executeTransactionReadBack[k] = await doc
        .get({
          TableName,
          Key: {
            id: k + "-exec-transact",
          },
        })
        .catch(passError);
    }

    for (const [k, v] of Object.entries(data)) {
      log.executeStatement[k] = await doc
        .executeStatement({
          Statement: `INSERT INTO "${TableName}" value {'id':?,'data':?}`,
          Parameters: [k + "-statement", v],
        })
        .catch(passError);
    }
    for (const [k] of Object.entries(data)) {
      log.executeStatementReadBack[k] = await doc
        .get({
          TableName,
          Key: {
            id: k + "-statement",
          },
        })
        .catch(passError);
    }

    log.batchExecuteStatement = await doc
      .batchExecuteStatement({
        Statements: [
          ...Object.entries(data).map(([k, v]) => {
            return {
              Statement: `INSERT INTO "${TableName}" value {'id':?,'data':?}`,
              Parameters: [k + "-batch-statement", v],
            };
          }),
        ],
      })
      .catch(passError);

    log.batchExecuteStatementReadBack = await doc
      .batchExecuteStatement({
        Statements: [
          ...Object.entries(data).map(([k, v]) => {
            return {
              Statement: `SELECT * FROM ${TableName} WHERE "id" = ?`,
              Parameters: [k + "-batch-statement"],
            };
          }),
        ],
      })
      .catch(passError);

    log.query = await doc
      .query({
        TableName,
        KeyConditionExpression: `id = :id`,
        ExpressionAttributeValues: {
          ":id": "map",
        },
        ConsistentRead: true,
      })
      .catch(passError);

    log.scan = await doc
      .scan({
        TableName,
        FilterExpression: `#data = :data1 OR #data = :data2`,
        ExpressionAttributeNames: {
          "#data": "data",
        },
        ExpressionAttributeValues: {
          ":data1": data.list,
          ":data2": data.map,
        },
      })
      .catch(passError);

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

      log.updateReadBack[id] = await doc
        .get({
          TableName,
          Key: {
            id,
          },
        })
        .catch(passError);

      log.delete[id] = await (async () => {
        for (const suffix of ["-batch", "-transact", "-exec-transact", "-statement", "-batch-statement"]) {
          doc
            .delete({
              TableName,
              Key: {
                id: id + suffix,
              },
            })
            .catch(() => {});
        }
        return doc.delete({
          TableName,
          Key: { id },
        });
      })().catch(passError);
    }
  });

  afterAll(async () => {
    await dynamodb.deleteTable({
      TableName,
    });
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

  it(`is using a random TableName=${TableName}`, async () => {
    // to report the table name
  });

  it("describes the test table tables", async () => {
    if (log.describe) {
      expect(log.describe?.Table?.TableName).toEqual(TableName);
    }
  });

  it("creates the test table if it does not exist", async () => {
    if (log.describe) {
      throwIfError(log.describe);
      expect(log.describe?.Table?.TableName).toEqual(TableName);
    } else {
      throwIfError(log.create);
      expect(log.create?.TableDescription?.TableName).toEqual(TableName);
    }
  });

  it("can batch write", async () => {
    throwIfError(log.batchWrite);
  });

  it("can batch read", async () => {
    throwIfError(log.batchRead);
    const results = log.batchRead?.Responses?.[TableName] ?? [];

    for (const result of results) {
      expect(result.data).toEqual(data[result.id.replace("-batch", "")]);
    }
  });

  it("can transact write", async () => {
    throwIfError(log.transactWrite);
  });

  it("can transact read", async () => {
    throwIfError(log.transactRead);
    const results = log.transactRead?.Responses ?? [];

    for (const result of results) {
      expect(result.Item?.data).toEqual(data[result.Item?.id.replace("-transact", "")]);
    }
  });

  it("can execute transactions", async () => {
    throwIfError(log.executeTransaction);
  });

  it("can batch execute statements", async () => {
    throwIfError(log.batchExecuteStatement);

    expect(log.batchExecuteStatementReadBack?.Responses).toBeInstanceOf(Array);
    expect(log.batchExecuteStatementReadBack?.Responses?.length).toBeGreaterThan(0);
    for (const response of log.batchExecuteStatementReadBack?.Responses ?? []) {
      expect(response.Item?.data).toEqual(data[response.Item?.id?.replace("-batch-statement", "")]);
    }
  });

  it("can query", async () => {
    throwIfError(log.query);
    expect(log.query?.Items).toContainEqual({
      id: "map",
      data: data.map,
    });
  });

  it("can scan", async () => {
    throwIfError(log.scan);
    expect(log.scan?.Items).toContainEqual({
      id: "map",
      data: data.map,
    });

    expect(log.scan?.Items).toContainEqual({
      id: "list",
      data: data.list,
    });
  });

  for (const [key, value] of Object.entries(data)) {
    it(`can write data of type ${key}`, async () => {
      throwIfError(log.write[key]);
      expect(log.write[key].$metadata).toBeDefined();
    });

    it(`can execute statement inserting type ${key}`, async () => {
      const match = log.executeStatement[key];
      expect(match).toBeDefined();

      throwIfError(match);
    });

    it(`can read back data inserted via ExecuteStatement of type ${key}`, async () => {
      throwIfError(log.executeStatementReadBack[key]);
      expect(log.executeStatementReadBack[key].Item).toEqual({
        id: key + "-statement",
        data: value,
      });
    });

    it(`can read back data inserted via ExecuteTransaction of type ${key}`, async () => {
      throwIfError(log.executeTransactionReadBack[key]);
      expect(log.executeTransactionReadBack[key].Item).toEqual({
        id: key + "-exec-transact",
        data: value,
      });
    });

    it(`can read data of type ${key}`, async () => {
      throwIfError(log.read[key]);
      expect(log.read[key].Item).toEqual({
        id: key,
        data: value,
      });
    });

    it(`can update data of type ${key}`, async () => {
      throwIfError(log.updateReadBack[key]);
      expect(log.updateReadBack[key].Item).toEqual({
        id: key,
        data: updateTransform(value),
      });
    });

    it(`can delete data of type ${key}`, async () => {
      throwIfError(log.delete[key]);
      expect(log.delete[key].$metadata).toBeDefined();
    });
  }
});
