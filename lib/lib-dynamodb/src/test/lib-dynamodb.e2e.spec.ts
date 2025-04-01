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
  GetCommandInput,
  GetCommandOutput,
  NumberValue,
  PutCommandOutput,
  QueryCommandInput,
  QueryCommandOutput,
  ScanCommandInput,
  ScanCommandOutput,
  TransactGetCommandOutput,
  TransactWriteCommandOutput,
  UpdateCommandOutput,
} from "@aws-sdk/lib-dynamodb";
import { HttpRequest } from "@smithy/protocol-http";
import { afterAll, beforeAll, describe, expect, test as it, vi } from "vitest";

// expected running time: table creation (~20s) + operations 10s

describe(DynamoDBDocument.name, () => {
  it("should deny initialization with cacheMiddleware: true", () => {
    const dynamodb = new DynamoDB({
      credentials: {} as any,
      cacheMiddleware: true,
    });
    expect(() => {
      DynamoDBDocument.from(dynamodb);
    }).toThrow();
  });
});

describe(
  DynamoDBDocument.name,
  () => {
    type NestedList = (
      | string
      | NumberValue
      | boolean
      | Set<string>
      | Set<NumberValue>
      | null
      | NestedList
      | NestedMap
    )[];
    type NestedMap = {
      [key: string]: string | NumberValue | boolean | Set<string> | Set<NumberValue> | null | NestedList | NestedMap;
    };

    type DataType = {
      null: null;
      string: string;
      number: NumberValue;
      bigInt: NumberValue;
      bigNumber: NumberValue;
      boolean: boolean;
      sSet: Set<string>;
      nSet: Set<NumberValue>;
      list: NestedList;
      map: NestedMap;
      [key: string]: any;
    };

    const dynamodb = new DynamoDB({ region: "us-west-2", maxAttempts: 10 });
    const doc = DynamoDBDocument.from(dynamodb, {
      marshallOptions: {
        convertTopLevelContainer: true,
        convertClassInstanceToMap: true,
      },
      unmarshallOptions: {
        wrapNumbers: true,
      },
    });

    doc.middlewareStack.add(
      (next, context) => async (args) => {
        if (context.commandName === "GetCommand" || context.commandName === "GetItemCommand") {
          (args.input as GetCommandInput).ConsistentRead = true;
        }
        if (context.commandName === "QueryCommand") {
          (args.input as QueryCommandInput).ConsistentRead = true;
        }
        if (context.commandName === "ScanCommand") {
          (args.input as ScanCommandInput).ConsistentRead = true;
        }
        return next(args);
      },
      {
        step: "initialize",
        name: "SetConsistentReadMiddleware",
        override: true,
      }
    );

    doc.middlewareStack.add(
      (next, context) => async (args) => {
        const { request } = args;
        if (HttpRequest.isInstance(request)) {
          if (["GetCommand", "GetItemCommand", "QueryCommand", "ScanCommand"].includes(context.commandName ?? "")) {
            expect(request.body).toContain(`"ConsistentRead":true`);
          }
        }
        return next(args);
      },
      {
        step: "finalizeRequest",
        name: "VerifyConsistentReadMiddleware",
        override: true,
      }
    );

    function throwIfError(e: unknown) {
      if (e instanceof Error) {
        throw e;
      }
    }

    // Tables will be dropped at the end of the test.
    // For faster test development, remove this random suffix and
    // don't delete the table in afterAll().
    // The table will in that case be re-used.
    const randId = (Math.random() + 1).toString(36).substring(2, 6);
    const timestamp = (Date.now() / 1000) | 0;

    const TableName = `js-sdk-dynamodb-test-${timestamp}-${randId}`;

    const log = {
      describe: null as null | DescribeTableCommandOutput,
      create: null as null | CreateTableCommandOutput,
      write: {} as Record<string, PutCommandOutput>,
      read: {} as Record<string, GetCommandOutput>,
      undefinedColumnWrite: null as null | PutCommandOutput,
      undefinedColumnRead: null as null | GetCommandOutput,
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
      classInstanceConversion: {
        write: null as null | PutCommandOutput,
        read: null as null | GetCommandOutput,
      },
    };

    const data: DataType = {
      null: null,
      string: "myString",
      number: NumberValue.from(1),
      bigInt: NumberValue.from(
        "10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
      ),
      bigNumber: NumberValue.from("3210000000000000000.0000000000000123"),
      boolean: true,
      sSet: new Set(["my", "string", "set"]),
      nSet: new Set([2, 3, 4].map(NumberValue.from)),
      list: [
        null,
        "myString",
        NumberValue.from(1),
        true,
        new Set(["my", "string", "set"]),
        new Set([NumberValue.from(2), NumberValue.from(3), NumberValue.from(4)]),
        new Set([
          NumberValue.from("3210000000000000000.0000000000000123"),
          NumberValue.from("3210000000000000001.0000000000000123"),
          NumberValue.from("3210000000000000002.0000000000000123"),
        ]),
        ["listInList", NumberValue.from(1), null],
        {
          mapInList: "mapInList",
        },
      ],
      map: {
        null: null,
        string: "myString",
        number: NumberValue.from(1),
        boolean: true,
        sSet: new Set(["my", "string", "set"]),
        nSet: new Set([2, 3, 4].map(NumberValue.from)),
        listInMap: ["listInMap", NumberValue.from(1), null],
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
          if (input instanceof NumberValue) {
            return NumberValue.from(input.toString()) as T;
          }
          return Object.entries(input).reduce((acc: { [key: string]: any }, [k, v]) => {
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

    const passError = (e: any) => e;

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
          { client: dynamodb, maxWaitTime: 120 },
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

      log.undefinedColumnWrite = await doc
        .put({
          TableName,
          Item: {
            id: "undefinedColumns",
            A: "A",
            B: undefined,
            C: "C",
            D: undefined,
            E: "E",
          },
        })
        .catch(passError);

      log.undefinedColumnRead = await doc
        .get({
          TableName,
          Key: {
            id: "undefinedColumns",
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

      log.classInstanceConversion.write = await doc
        .put({
          TableName,
          Item: {
            id: "classInstance",
            data: {
              a: new (class {
                public a = 1;
                public b = 2;
                public c = 3;
                public method() {
                  return "method";
                }
                public get getter() {
                  return "getter";
                }
                public arrowFn = () => "arrowFn";
                public ownFunction = function () {
                  return "ownFunction";
                };
              })(),
              b: new (class {
                public a = 4;
                public b = 5;
                public c = 6;
                public method() {
                  return "method";
                }
                public get getter() {
                  return "getter";
                }
                public arrowFn = () => "arrowFn";
                public ownFunction = function () {
                  return "ownFunction";
                };
              })(),
            },
          },
        })
        .catch(passError);

      log.classInstanceConversion.read = await doc
        .get({
          TableName,
          Key: {
            id: "classInstance",
          },
        })
        .catch(passError);
    }, 180_000);

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
          "number-x": NumberValue.from(1),
          "bigInt-x": NumberValue.from(
            "10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
          ),
          "bigNumber-x": NumberValue.from("3210000000000000000.0000000000000123"),
          "boolean-x": false,
          "sSet-x": new Set(["my-x", "string-x", "set-x"]),
          "nSet-x": new Set([2, 3, 4].map(NumberValue.from)),
          "list-x": [
            null,
            "myString-x",
            NumberValue.from(1),
            false,
            new Set(["my-x", "string-x", "set-x"]),
            new Set([2, 3, 4].map(NumberValue.from)),
            new Set([
              NumberValue.from("3210000000000000000.0000000000000123"),
              NumberValue.from("3210000000000000001.0000000000000123"),
              NumberValue.from("3210000000000000002.0000000000000123"),
            ]),
            ["listInList-x", NumberValue.from(1), null],
            { "mapInList-x": "mapInList-x" },
          ],
          "map-x": {
            "null-x": null,
            "string-x": "myString-x",
            "number-x": NumberValue.from(1),
            "boolean-x": false,
            "sSet-x": new Set(["my-x", "string-x", "set-x"]),
            "nSet-x": new Set([2, 3, 4].map(NumberValue.from)),
            "listInMap-x": ["listInMap-x", NumberValue.from(1), null],
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

    it("describes the test table", async () => {
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

    it("ignores undefined column values for backwards compatibility", async () => {
      throwIfError(log.undefinedColumnWrite);

      expect(log.undefinedColumnRead?.Item).toEqual({
        id: "undefinedColumns",
        A: "A",
        C: "C",
        E: "E",
      });
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

    it("can serialize class instances as maps", async () => {
      expect(log.classInstanceConversion.read?.Item).toEqual({
        id: "classInstance",
        data: {
          a: {
            a: NumberValue.from(1),
            b: NumberValue.from(2),
            c: NumberValue.from(3),
          },
          b: {
            a: NumberValue.from(4),
            b: NumberValue.from(5),
            c: NumberValue.from(6),
          },
        },
      });
    });
  },
  180_000
);
