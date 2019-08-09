import { ElasticsearchServiceClient } from "../../ElasticsearchServiceClient";
import { ListDomainNamesCommand } from "../../commands/ListDomainNamesCommand";
import { DescribeElasticsearchDomainCommand } from "../../commands/DescribeElasticsearchDomainCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-elasticsearch-service Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListDomainNames should succeed when given correct input", done => {
    const client = new ElasticsearchServiceClient({
      region: defaultRegion,
      credentials
    });

    const listDomainNames = new ListDomainNamesCommand({});

    client
      .send(listDomainNames)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeElasticsearchDomain should fail when given bad input", done => {
    const client = new ElasticsearchServiceClient({
      region: defaultRegion,
      credentials
    });

    const describeElasticsearchDomain = new DescribeElasticsearchDomainCommand({
      DomainName: "not-a-domain"
    });

    client
      .send(describeElasticsearchDomain)
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
