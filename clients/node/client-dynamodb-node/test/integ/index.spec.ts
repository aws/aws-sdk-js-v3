import { DynamoDB } from "../../DynamoDB";

describe("DynamoDB integration tests", () => {
  // Move this timeout to jest config for integ tests
  jest.setTimeout(500000);

  const client = new DynamoDB({});
  // const tableName = `aws-js-integration-${Math.random()
  //   .toString(36)
  //   .substring(2)}`;
  const tableName = "aws-js-integration";
  const sleepFor = (ms: number) =>
    new Promise(resolve => setTimeout(resolve, ms));

  // Replace with waiters once available
  const tableExists = async (tableName: string) => {
    const params = { TableName: tableName };

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

  // Replace with waiters once available
  const tableNotExists = async (tableName: string) => {
    const params = { TableName: tableName };

    // Iterate totalTries times
    const totalTries = 25;
    for (let i = 0; i < totalTries; i++) {
      try {
        await client.describeTable(params);
        if (i === totalTries - 1) {
          throw `Table ${tableName} not deleted`;
        }
        await sleepFor(20000);
      } catch (e) {
        if (i === totalTries - 1) {
          throw e;
        } else if (e.name === "ResourceNotFoundException") {
          return true;
        }
        await sleepFor(20000);
      }
    }
  };

  describe("Table CRUD operations", () => {
    const itemKey = {
      Artist: {
        S: "Acme Band"
      },
      SongTitle: {
        S: "Happy Day"
      }
    };
    // beforeAll(async done => {
    //   const params = {
    //     TableName: tableName,
    //     AttributeDefinitions: [
    //       {
    //         AttributeName: "Artist",
    //         AttributeType: "S"
    //       },
    //       {
    //         AttributeName: "SongTitle",
    //         AttributeType: "S"
    //       }
    //     ],
    //     KeySchema: [
    //       {
    //         AttributeName: "Artist",
    //         KeyType: "HASH"
    //       },
    //       {
    //         AttributeName: "SongTitle",
    //         KeyType: "RANGE"
    //       }
    //     ],
    //     ProvisionedThroughput: {
    //       ReadCapacityUnits: 5,
    //       WriteCapacityUnits: 5
    //     }
    //   };
    //   await client.createTable(params);
    //   await tableExists(tableName);
    //   done();
    // });

    it("adds an item to the table", async () => {
      expect.assertions(1);

      const albumTitle = "Somewhat Famous";
      const params = {
        Item: {
          ...itemKey,
          AlbumTitle: {
            S: albumTitle
          }
        },
        TableName: tableName
      };

      await client.putItem(params);
      const item = await client.getItem({
        Key: itemKey,
        TableName: tableName
      });
      expect(item.Item && item.Item.AlbumTitle.S).toBe(albumTitle);
    });

    // afterAll(async done => {
    //   await client.deleteTable({
    //     TableName: tableName
    //   });
    //   await tableNotExists(tableName);
    //   done();
    // });
  });
});
