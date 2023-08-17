import * as fs from "fs";
import { Upload } from "@aws-sdk/lib-storage";
import { S3 } from "@aws-sdk/client-s3";
import { configuration } from "./config";

const fileStream = fs.createReadStream(__dirname + "/big.file");

(async () => {
  const upload = new Upload({
    params: {
      Bucket: configuration.Bucket,
      Key: configuration.Key,
      Body: fileStream,
    },
    client: new S3({}),
    queueSize: 3,
  });

  upload.on("httpUploadProgress", (progress) => {
    console.log(progress);
  });

  await upload.done();
})();
