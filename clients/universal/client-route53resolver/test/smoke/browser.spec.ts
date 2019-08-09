import { Route53ResolverClient } from "../../Route53ResolverClient";
import { ListResolverEndpointsCommand } from "../../commands/ListResolverEndpointsCommand";
import { GetResolverRuleCommand } from "../../commands/GetResolverRuleCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-route53resolver Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListResolverEndpoints should succeed when given correct input", done => {
    const client = new Route53ResolverClient({
      region: defaultRegion,
      credentials
    });

    const listResolverEndpoints = new ListResolverEndpointsCommand({});

    client
      .send(listResolverEndpoints)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetResolverRule should fail when given bad input", done => {
    const client = new Route53ResolverClient({
      region: defaultRegion,
      credentials
    });

    const getResolverRule = new GetResolverRuleCommand({
      ResolverRuleId: "fake-id"
    });

    client
      .send(getResolverRule)
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
