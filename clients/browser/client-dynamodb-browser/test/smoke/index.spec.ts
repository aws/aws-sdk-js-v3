import { DynamoDBClient } from "../../DynamoDBClient";
import { ListTablesCommand } from "../../commands/ListTablesCommand";
import { DescribeTableCommand } from "../../commands/DescribeTableCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-dynamodb-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListTables should succeed when given correct input", done => {
    const client = new DynamoDBClient({
      region: defaultRegion,
      credentials
    });

    const listTables = new ListTablesCommand({
      Limit: 1
    });

    client
      .send(listTables)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeTable should fail when given bad input", done => {
    const client = new DynamoDBClient({
      region: defaultRegion,
      credentials
    });

    const describeTable = new DescribeTableCommand({
      TableName: "fake-table"
    });

    client
      .send(describeTable)
      .then(result => {
        expect(result).toBeUndefined();
        done();
      })
      .catch(err => {
        expect(err).toBeDefined();
        done();
      });
  });
});
