import { createPresignCommand } from "./index";
import { PutObjectCommand } from "@aws-sdk/client-s3-node";
import { SignatureV4 } from "@aws-sdk/signature-v4-node";

createPresignCommand(
  new PutObjectCommand({
    Bucket: "js-sdk-test-bucket",
    Key: "key"
  }),
  100
);
