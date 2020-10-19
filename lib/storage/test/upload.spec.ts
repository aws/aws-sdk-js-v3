import { Bucket, S3 } from "@aws-sdk/client-s3";
import { Upload } from "../src/index";

describe(Upload.name, () => {
  it("correctly exposes the event emitter API", (done) => {
    const upload = new Upload({
      params: {
        Key: "",
        Bucket: "",
        Body: "",
      },
      client: new S3({}),
    });
    expect(upload.addListener).toBeDefined();
    expect(upload.getMaxListeners).toBeDefined();
    expect(upload.eventNames).toBeDefined();
    expect(upload.off).toBeDefined();
    expect(upload.on).toBeDefined();

    done();
  });
});
