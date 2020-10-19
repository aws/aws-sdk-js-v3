import { Bucket, S3 } from "@aws-sdk/client-s3";
import { Upload } from "../../src/index";

// const credentials = (globalThis as any).credentials || undefined;

describe(Upload.name, () => {
  it("correctly uploads data to s3", async (done) => {
    const s3 = new S3({
      credentials: {
        accessKeyId: "fake",
        secretAccessKey: "fake",
      },
    });
    const createMultipartUploadSpy = spyOn(s3, "createMultipartUpload").and.callFake(() => {
      return {
        UploadId: "myUploadId",
      };
    });
    const uploadPartSpy = spyOn(s3, "uploadPart").and.callFake(() => {
      return {
        ETag: "some-tag",
      };
    });
    const completeMultipartUploadSpy = spyOn(s3, "completeMultipartUpload").and.callFake(() => "Woot Woot all done");

    const upload = new Upload({
      params: {
        Key: "key",
        Bucket: "bucket",
        Body: "hello world!",
      },
      client: s3,
    });
    await upload.done();

    expect(createMultipartUploadSpy.calls.count()).toBe(1);
    const createArgs = createMultipartUploadSpy.calls.argsFor(0)[0];
    expect(createArgs.Key).toEqual("key");
    expect(createArgs.Bucket).toEqual("bucket");

    expect(uploadPartSpy.calls.count()).toBe(1);
    const uploadArgs = uploadPartSpy.calls.argsFor(0)[0];
    expect(uploadArgs.UploadId).toEqual("myUploadId");

    expect(completeMultipartUploadSpy.calls.count()).toBe(1);
    const completeAargs = completeMultipartUploadSpy.calls.argsFor(0)[0];
    console.log(completeAargs.MultipartUpload.Parts);
    expect(completeAargs.UploadId).toEqual("myUploadId");
    expect(completeAargs.MultipartUpload.Parts.length).toEqual(1);
    expect(completeAargs.MultipartUpload.Parts[0]).toEqual({ PartNumber: 1, ETag: "some-tag" });

    done();
  });
});
