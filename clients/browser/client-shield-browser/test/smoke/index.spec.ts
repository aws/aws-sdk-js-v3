import { ShieldClient } from "../../ShieldClient";
import { ListAttacksCommand } from "../../commands/ListAttacksCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-shield-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-east-1";
  it("ListAttacks should succeed when given correct input", done => {
    const client = new ShieldClient({
      region: defaultRegion,
      credentials
    });

    const listAttacks = new ListAttacksCommand({});

    client
      .send(listAttacks)
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
