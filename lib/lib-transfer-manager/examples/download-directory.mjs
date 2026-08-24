/**
 * Minimal ESM example: download objects under an S3 prefix into a local
 * directory, with an optional filter, a "continue on error" failure policy,
 * and a progress listener.
 *
 * Run (Node ESM): node download-directory.mjs
 */
import { S3Client } from "@aws-sdk/client-s3";
import { S3TransferManager } from "@aws-sdk/lib-transfer-manager/transfer-manager";

const tm = new S3TransferManager({
  s3: new S3Client({ region: "us-west-2" }),
});

// Optional: log progress as objects complete.
tm.addEventListener("bytesTransferred", (event) => {
  const { transferredFiles, totalFiles } = event.snapshot;
  console.log(`Progress: ${transferredFiles}/${totalFiles ?? "?"} files`);
});

const result = await tm.downloadDirectory({
  bucket: "s3-benchmarkrunner-bucket",
  destination: "./downloaded",
  // s3Prefix: "images/",
  // // Only download .jpg objects.
  // filter: (object) => object.Key?.endsWith(".jpg") ?? false,
  // // Keep going if an individual object fails, instead of aborting everything.
  failurePolicy: "terminate",
  maxConcurrency: 64,
});

console.log(`Downloaded: ${result.objectsDownloaded}, Failed: ${result.objectsFailed}`);
