import { Upload } from "../src/index";
import { S3 } from "@aws-sdk/client-s3";

const fs = require("fs");
const fileStream = fs.createReadStream("./big.file");

(async () => {
  const target = {
    Bucket: "aws-sdk-js-mock-files",
    Key: "data_key",
    Body: fileStream,
  };

  try {
    const upload = new Upload({
      params: target,
      client: new S3({}),
      queueSize: 3,
    });

    upload.on("httpUploadProgress", (progress) => {
      console.log(progress);
    });

    await upload.done();
  } catch (e) {
    console.log(e);
  }
})();
