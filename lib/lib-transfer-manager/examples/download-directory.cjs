/**
 * Minimal CommonJS example: download every object under an S3 prefix
 * into a local directory using the S3 Transfer Manager.
 *
 * Run: node download-directory.cjs
 */
const { S3Client } = require("@aws-sdk/client-s3");
const { S3TransferManager } = require("@aws-sdk/lib-transfer-manager/transfer-manager");

async function main() {
  const tm = new S3TransferManager({
    s3: new S3Client({ region: "us-west-2" }),
  });

  const result = await tm.downloadDirectory({
    bucket: "my-example-bucket",
    destination: "./downloaded",
    s3Prefix: "notes/", // optional: only objects under this prefix
  });

  console.log(`Downloaded: ${result.objectsDownloaded}, Failed: ${result.objectsFailed}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
