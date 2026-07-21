#!/usr/bin/env node
// Upload a 5GB file using @aws-sdk/lib-tm-alt API with HTTP request timing.
// Run with: node --require ./http-timing-preload.js ./benchmark-upload-alt-timed.js

const { openSync, writeSync } = require("node:fs");
const { resolve } = require("node:path");
const __logFd = openSync(resolve(__dirname, "B.log"), "w");
const __origStdoutWrite = process.stdout.write.bind(process.stdout);
process.stdout.write = (chunk, ...args) => {
  writeSync(__logFd, typeof chunk === "string" ? chunk : chunk.toString());
  return __origStdoutWrite(chunk, ...args);
};

const TIMEOUT_MS = 60 * 1000;
const timer = setTimeout(() => {
  console.error("FATAL: upload timed out after 1 minute");
  process.exit(1);
}, TIMEOUT_MS);
timer.unref();

const { S3UploadManager } = require("@aws-sdk/lib-tm-alt");
const { statSync } = require("node:fs");

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

    // Give workers a moment to flush their timing data, then print report.
    setTimeout(() => {
      if (global.__httpTimingReport) {
        global.__httpTimingReport();
      }
      process.exit(0);
    }, 300);
  })
  .catch((err) => {
    console.error("Upload failed:", err);
    um.close();
    process.exitCode = 1;
  });
