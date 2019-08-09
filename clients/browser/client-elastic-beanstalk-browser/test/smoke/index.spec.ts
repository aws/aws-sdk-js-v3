import { ElasticBeanstalkClient } from "../../ElasticBeanstalkClient";
import { ListAvailableSolutionStacksCommand } from "../../commands/ListAvailableSolutionStacksCommand";
import { DescribeEnvironmentResourcesCommand } from "../../commands/DescribeEnvironmentResourcesCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-elastic-beanstalk-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListAvailableSolutionStacks should succeed when given correct input", done => {
    const client = new ElasticBeanstalkClient({
      region: defaultRegion,
      credentials
    });

    const listAvailableSolutionStacks = new ListAvailableSolutionStacksCommand(
      {}
    );

    client
      .send(listAvailableSolutionStacks)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeEnvironmentResources should fail when given bad input", done => {
    const client = new ElasticBeanstalkClient({
      region: defaultRegion,
      credentials
    });

    const describeEnvironmentResources = new DescribeEnvironmentResourcesCommand(
      {
        EnvironmentId: "fake_environment"
      }
    );

    client
      .send(describeEnvironmentResources)
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
