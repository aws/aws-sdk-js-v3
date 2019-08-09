import { AthenaClient } from "../../AthenaClient";
import { ListNamedQueriesCommand } from "../../commands/ListNamedQueriesCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-athena-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListNamedQueries should succeed when given correct input", done => {
    const client = new AthenaClient({
      region: defaultRegion,
      credentials
    });

    const listNamedQueries = new ListNamedQueriesCommand({});

    client
      .send(listNamedQueries)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
});
