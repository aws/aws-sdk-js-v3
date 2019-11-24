import { DynamoDB } from "../../DynamoDB";

describe("DynamoDB integration tests", () => {
  const client = new DynamoDB({});
  const tableName = `aws-js-integration-${Math.random()
    .toString(36)
    .substring(2)}`;

  describe("Table CRUD operations", () => {
    beforeAll(async () => {
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
    });

    it("single test", () => {});

    afterAll(async () => {
      const response = await client.deleteTable({
        TableName: tableName
      });
      console.log(response);
    });
  });
});
