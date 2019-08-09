import { GlacierClient } from "../../GlacierClient";
import { ListVaultsCommand } from "../../commands/ListVaultsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-glacier-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListVaults should succeed when given correct input", done => {
    const client = new GlacierClient({
      region: defaultRegion,
      credentials
    });

    const listVaults = new ListVaultsCommand({});

    client
      .send(listVaults)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("ListVaults should fail when given bad input", done => {
    const client = new GlacierClient({
      region: defaultRegion,
      credentials
    });

    const listVaults = new ListVaultsCommand({
      accountId: "abcmnoxyz"
    });

    client
      .send(listVaults)
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
