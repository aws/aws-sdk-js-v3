import { WAFClient } from "../../WAFClient";
import { ListRulesCommand } from "../../commands/ListRulesCommand";
import { CreateSqlInjectionMatchSetCommand } from "../../commands/CreateSqlInjectionMatchSetCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-waf Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-east-1";
  it("ListRules should succeed when given correct input", done => {
    const client = new WAFClient({
      region: defaultRegion,
      credentials
    });

    const listRules = new ListRulesCommand({
      Limit: 20
    });

    client
      .send(listRules)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("CreateSqlInjectionMatchSet should fail when given bad input", done => {
    const client = new WAFClient({
      region: defaultRegion,
      credentials
    });

    const createSqlInjectionMatchSet = new CreateSqlInjectionMatchSetCommand({
      Name: "fake_name",
      ChangeToken: "fake_token"
    });

    client
      .send(createSqlInjectionMatchSet)
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
