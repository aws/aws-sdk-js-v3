import { createRequest } from "./index";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3-node";

createRequest(
  new S3Client({ region: "us-west-2" }),
  new PutObjectCommand({
    Bucket: "js-sdk-test-bucket",
    Key: "key"
  }),
  100
);
