#!/usr/bin/env node
// Upload a 5GB file using @aws-sdk/lib-tm-alt API to georgfu-us-west-2 with key s3tm-5gb.

const TIMEOUT_MS = 60 * 1000;
const timer = setTimeout(() => {
  console.error("FATAL: upload timed out after 1 minute");
  process.exit(1);
}, TIMEOUT_MS);
timer.unref();

const { S3UploadManager } = require("@aws-sdk/lib-tm-alt");
const { statSync } = require("node:fs");
const { resolve } = require("node:path");

const filePath = resolve(__dirname, "5gb");
const fileSize = statSync(filePath).size;

const BUCKET = "georgfu-us-west-2";
const KEY = "s3tm-5gb-alt";
const REGION = "us-west-2";

const um = new S3UploadManager({
  bucket: BUCKET,
  region: REGION,
  uploadSource: "file",
  sourceFilePath: filePath,
  workers: 12,
});

console.log(
  `Uploading ${(fileSize / 1024 / 1024).toFixed(1)} MB to s3://${BUCKET}/${KEY} using @aws-sdk/lib-tm-alt ...`
);

const t0 = performance.now();

um.upload({
  keys: [KEY],
  sizes: { [KEY]: fileSize },
})
  .then(() => {
    const elapsedMs = performance.now() - t0;
    const elapsedSec = elapsedMs / 1000;
    const mbPerSec = fileSize / 1024 / 1024 / elapsedSec;
    console.log(`Done in ${elapsedSec.toFixed(2)}s — ${mbPerSec.toFixed(2)} MB/s`);
    um.close();
  })
  .catch((err) => {
    console.error("Upload failed:", err);
    um.close();
    process.exitCode = 1;
  });
