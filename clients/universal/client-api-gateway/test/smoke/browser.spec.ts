import { APIGatewayClient } from "../../APIGatewayClient";
import { GetDomainNamesCommand } from "../../commands/GetDomainNamesCommand";
import { CreateUsagePlanKeyCommand } from "../../commands/CreateUsagePlanKeyCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-api-gateway Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("GetDomainNames should succeed when given correct input", done => {
    const client = new APIGatewayClient({
      region: defaultRegion,
      credentials
    });

    const getDomainNames = new GetDomainNamesCommand({});

    client
      .send(getDomainNames)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("CreateUsagePlanKey should fail when given bad input", done => {
    const client = new APIGatewayClient({
      region: defaultRegion,
      credentials
    });

    const createUsagePlanKey = new CreateUsagePlanKeyCommand({
      usagePlanId: "foo",
      keyId: "bar",
      keyType: "fixx"
    });

    client
      .send(createUsagePlanKey)
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
