import { MTurkClient } from "../../MTurkClient";
import { GetAccountBalanceCommand } from "../../commands/GetAccountBalanceCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-mturk-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-east-1";
  it("GetAccountBalance should succeed when given correct input", done => {
    const client = new MTurkClient({
      region: defaultRegion,
      credentials
    });

    const getAccountBalance = new GetAccountBalanceCommand({} as any);

    client
      .send(getAccountBalance)
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
