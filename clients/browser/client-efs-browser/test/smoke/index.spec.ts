import { EFSClient } from "../../EFSClient";
import { DescribeFileSystemsCommand } from "../../commands/DescribeFileSystemsCommand";
import { DeleteFileSystemCommand } from "../../commands/DeleteFileSystemCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-efs-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeFileSystems should succeed when given correct input", done => {
    const client = new EFSClient({
      region: defaultRegion,
      credentials
    });

    const describeFileSystems = new DescribeFileSystemsCommand({});

    client
      .send(describeFileSystems)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DeleteFileSystem should fail when given bad input", done => {
    const client = new EFSClient({
      region: defaultRegion,
      credentials
    });

    const deleteFileSystem = new DeleteFileSystemCommand({
      FileSystemId: "fs-c5a1446c"
    });

    client
      .send(deleteFileSystem)
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
