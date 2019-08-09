import { ECRClient } from "../../ECRClient";
import { DescribeRepositoriesCommand } from "../../commands/DescribeRepositoriesCommand";
import { ListImagesCommand } from "../../commands/ListImagesCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-ecr-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeRepositories should succeed when given correct input", done => {
    const client = new ECRClient({
      region: defaultRegion,
      credentials
    });

    const describeRepositories = new DescribeRepositoriesCommand({});

    client
      .send(describeRepositories)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("ListImages should fail when given bad input", done => {
    const client = new ECRClient({
      region: defaultRegion,
      credentials
    });

    const listImages = new ListImagesCommand({
      repositoryName: "not-a-real-repository"
    });

    client
      .send(listImages)
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
