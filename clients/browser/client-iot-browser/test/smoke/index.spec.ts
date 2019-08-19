import { IoTClient } from "../../IoTClient";
import { ListPoliciesCommand } from "../../commands/ListPoliciesCommand";
import { DescribeThingCommand } from "../../commands/DescribeThingCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-iot-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListPolicies should succeed when given correct input", done => {
    const client = new IoTClient({
      region: defaultRegion,
      credentials
    });

    const listPolicies = new ListPoliciesCommand({} as any);

    client
      .send(listPolicies)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeThing should fail when given bad input", done => {
    const client = new IoTClient({
      region: defaultRegion,
      credentials
    });

    const describeThing = new DescribeThingCommand({
      thingName: "fake-thing"
    } as any);

    client
      .send(describeThing)
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
