import { DynamoDB } from "../../DynamoDB";

describe("DynamoDB integration tests", () => {
  // Move this timeout to jest config for integ tests
  jest.setTimeout(500000);

  const client = new DynamoDB({});
  const tableName = `aws-js-integration-${Math.random()
    .toString(36)
    .substring(2)}`;

  // Replace with waiters once available
  const tableExists = async (tableName: string) => {
    const params = { TableName: tableName };
    const sleepFor = (ms: number) =>
      new Promise(resolve => setTimeout(resolve, ms));

    // Iterate totalTries times
    const totalTries = 25;
    for (let i = 0; i < totalTries; i++) {
      try {
        const response = await client.describeTable(params);
        if (response.Table && response.Table.TableStatus === "ACTIVE") {
          return true;
        } else {
          if (i === totalTries - 1) {
            throw `Table ${tableName} not in active status`;
          }
          await sleepFor(20000);
        }
      } catch (e) {
        if (i === totalTries - 1) {
          throw e;
        }
        await sleepFor(20000);
      }
    }
  };

  describe("Table CRUD operations", () => {
    beforeAll(async done => {
      console.log("ENTER beforeAll");
      const params = {
        TableName: tableName,
        AttributeDefinitions: [
          {
            AttributeName: "Artist",
            AttributeType: "S"
          },
          {
            AttributeName: "SongTitle",
            AttributeType: "S"
          }
        ],
        KeySchema: [
          {
            AttributeName: "Artist",
            KeyType: "HASH"
          },
          {
            AttributeName: "SongTitle",
            KeyType: "RANGE"
          }
        ],
        ProvisionedThroughput: {
          ReadCapacityUnits: 5,
          WriteCapacityUnits: 5
        }
      };
      const response = await client.createTable(params);
      console.log(response);
      await tableExists(tableName);
      console.log("EXIT beforeAll");
      done();
    });

    it("single test", () => {});

    afterAll(async done => {
      console.log("ENTER afterAll");
      const response = await client.deleteTable({
        TableName: tableName
      });
      console.log(response);
      console.log("EXIT afterAll");
      done();
    });
  });
});
