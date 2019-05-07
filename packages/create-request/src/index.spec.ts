import { createRequest } from "./index";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3-node";
import { SignatureV4 } from "@aws-sdk/signature-v4";

(async () => {
  try {
    const request = await createRequest(
      new S3Client({ region: "us-west-2" }),
      new GetObjectCommand({
        Bucket: "js-sdk-test-bucket",
        Key: "key"
      })
    );
    console.log(request);
  } catch (e) {
    console.log(e);
  }
})();
