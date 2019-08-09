import { DirectoryServiceClient } from "../../DirectoryServiceClient";
import { DescribeDirectoriesCommand } from "../../commands/DescribeDirectoriesCommand";
import { CreateDirectoryCommand } from "../../commands/CreateDirectoryCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-directory-service-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeDirectories should succeed when given correct input", done => {
    const client = new DirectoryServiceClient({
      region: defaultRegion,
      credentials
    });

    const describeDirectories = new DescribeDirectoriesCommand({});

    client
      .send(describeDirectories)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("CreateDirectory should fail when given bad input", done => {
    const client = new DirectoryServiceClient({
      region: defaultRegion,
      credentials
    });

    const createDirectory = new CreateDirectoryCommand({
      Name: "",
      Password: "",
      Size: ""
    });

    client
      .send(createDirectory)
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
