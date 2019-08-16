import { S3Client } from "../../S3Client";
import { ListBucketsCommand } from "../../commands/ListBucketsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-s3-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListBuckets should succeed when given correct input", done => {
    const client = new S3Client({
      region: defaultRegion,
      credentials
    });

    const listBuckets = new ListBucketsCommand({} as any);

    client
      .send(listBuckets)
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
