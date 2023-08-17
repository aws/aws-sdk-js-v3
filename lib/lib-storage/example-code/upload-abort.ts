import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { configuration } from "./config";
import { Readable } from "stream";

const Bucket = configuration.Bucket;
const region = "us-west-2";

const sleep = async (seconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

async function* generateContents() {
  for (let index = 0; index < 8; index++) {
    const time = Math.random() * 5;
    await sleep(time);
    console.log(`Delaying part ${index} for ${time}`);
    yield `[Part ${index}] ${"#".repeat(2000000)}`;
  }
}

const uploadIndeterminateLengthStreamNode = async () => {
  const streamOfUnknownlength = Readable.from(generateContents());

  const Key = configuration.Key;
  let upload = new Upload({
    client: new S3Client({ region }),
    params: {
      Key,
      Bucket,
      Body: streamOfUnknownlength,
    },
  });

  upload.on("httpUploadProgress", (progress: ProgressEvent) => {
    console.log(progress);
  });

  setTimeout(() => {
    console.log(" Aborting ....");
    let res = upload.abort();
  }, 10 * 1000);

  const uploadResult = await upload.done();
  console.log("done uploading", uploadResult);
};

uploadIndeterminateLengthStreamNode();
