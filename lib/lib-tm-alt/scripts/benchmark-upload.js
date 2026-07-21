#!/usr/bin/env node
// Upload a 5GB file using @aws-sdk/lib-transfer-manager API to georgfu-us-west-2 with key s3tm-5gb.
"use strict";

const TIMEOUT_MS = 60 * 1000;
const timer = setTimeout(() => {
  console.error("FATAL: upload timed out after 1 minute");
  process.exit(1);
}, TIMEOUT_MS);
timer.unref();

const { S3Client } = require("@aws-sdk/client-s3");
const { S3TransferManager } = require("@aws-sdk/lib-transfer-manager");
const { createReadStream, statSync } = require("node:fs");
const { resolve } = require("node:path");

const filePath = resolve(__dirname, "5gb");
const fileSize = statSync(filePath).size;

const BUCKET = "georgfu-us-west-2";
const KEY = "s3tm-5gb";
const REGION = "us-west-2";

const s3Client = new S3Client({ region: REGION });
const tm = new S3TransferManager({ s3: s3Client, workerThreadCount: 12, maxConcurrentUploads: 48 });

console.log(
  `Uploading ${(fileSize / 1024 / 1024).toFixed(1)} MB to s3://${BUCKET}/${KEY} using @aws-sdk/lib-transfer-manager ...`
);

const t0 = performance.now();

tm.upload({
  Bucket: BUCKET,
  Key: KEY,
  Body: createReadStream(filePath),
  ContentLength: fileSize,
})
  .then(() => {
    const elapsedMs = performance.now() - t0;
    const elapsedSec = elapsedMs / 1000;
    const mbPerSec = fileSize / 1024 / 1024 / elapsedSec;
    console.log(`Done in ${elapsedSec.toFixed(2)}s — ${mbPerSec.toFixed(2)} MB/s`);
    process.exit(0);
  })
  .catch((err) => {
    console.error("Upload failed:", err);
    process.exit(1);
  });
