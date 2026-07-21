#!/usr/bin/env node
// Upload a 5GB file using a single PutObject call to georgfu-us-west-2 with key s3tm-5gb-put.
"use strict";

const TIMEOUT_MS = 60 * 1000;
const timer = setTimeout(() => {
  console.error("FATAL: upload timed out after 1 minute");
  process.exit(1);
}, TIMEOUT_MS);
timer.unref();

const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const { createReadStream, statSync } = require("node:fs");
const { resolve } = require("node:path");

const filePath = resolve(__dirname, "5gb");
const fileSize = statSync(filePath).size;

const BUCKET = "georgfu-us-west-2";
const KEY = "s3tm-5gb-put";
const REGION = "us-west-2";

const client = new S3Client({ region: REGION });

console.log(`Uploading ${(fileSize / 1024 / 1024).toFixed(1)} MB to s3://${BUCKET}/${KEY} using PutObject ...`);

const t0 = performance.now();

client
  .send(
    new PutObjectCommand({
      Bucket: BUCKET,
      Key: KEY,
      Body: createReadStream(filePath),
      ContentLength: fileSize,
    })
  )
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
