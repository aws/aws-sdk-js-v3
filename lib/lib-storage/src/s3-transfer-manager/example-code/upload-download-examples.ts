// // Import S3 Client client
// import { S3Client } from "@aws-sdk/client-s3";
// import { dirname } from "node:path";
// import { DefaultDeserializer } from "node:v8";

// import { S3TransferManager } from "../index";
// // Import transfer manager
// import {
//   TransferCompleteEvent,
//   TransferEvent,
//   TransferEventListeners,
//   TransferProgressSnapshot,
// } from "../types"; // would be "@aws-sdk/lib-storage"

// // Test variables:
// const testBucket = "test-bucket";
// const testKey = "test-key";
// const fileStream = "test-body";
// const DEFAULT_BYTE_SIZE = 8 * 1024 * 1024;

// // Example 1: Basic multipart upload and multipart download operations.
// // Initialize S3 client and transfer manager
// const s3Client = new S3Client({});
// const transferManager = new S3TransferManager({
//   s3ClientInstance: s3Client,
//   targetPartSizeBytes: DEFAULT_BYTE_SIZE,
//   multipartUploadThresholdBytes: 2 * DEFAULT_BYTE_SIZE, // 16 MB
//   checksumValidationEnabled: true,
//   checksumAlgorithm: "CRC32",
//   multipartDownloadType: "RANGE",
// });

// // Perform multipart upload.
// async function uploadLargeFile() {
//   const response = await transferManager.upload({
//     Bucket: testBucket,
//     Key: testKey,
//     Body: fileStream,
//   });
// }

// // Perform multipart download.
// async function downloadLargeFile() {
//   const response = await transferManager.download({
//     Bucket: testBucket,
//     Key: testKey,
//     Range: "16 MB",
//     checksumValidationEnabled: true,
//     destinationPath: "user/desktop/...",
//   });
// }

// //Example 2: Upload all files in directory recursively to an S3 Bucket.
// async function uploadDirectoryToBucket() {
//   const response = await transferManager.uploadAll({
//     bucket: testBucket,
//     source: "user/desktop/...",
//     recursive: true,
//   });
// }

// //Example 3: Download all files in an S3 Bucket recursively to a directory.
// async function downloadDirectoryToBucket() {
//   const response = await transferManager.downloadAll({
//     bucket: testBucket,
//     destination: "user/desktop/...",
//     recursive: true,
//   });
// }

// //Example 4: Upload with abort.
// async function uploadWithAbort() {
//   const abortController = new AbortController();

//   const uploadResponse = await transferManager.upload({
//     bucket: testBucket,
//     key: testKey,
//     body: fileStream,
//     abortSignal: abortController.signal,
//   });

//   // Abort after 100 ms
//   setTimeout(() => {
//     console.log("Aborting...");
//     abortController.abort();
//   }, 100);

//   try {
//     const response = await uploadResponse;
//     console.log("Upload completed successfully.");
//   } catch (error) {
//     console.log("Upload aborted.");
//   }
// }

// //Example 5: Request Level Progress Listener
// async function downloadWithProgressListener() {
//   const abortController = new AbortController();

//   const transferOptions = {
//     abortSignal: abortController.signal,
//     transferInitiated: [
//       (event: TransferEvent) => {
//         console.log("Transfer Initiated");
//       },
//     ],
//     bytesTransferred: [
//       (event: TransferEvent) => {
//         const progress = event.snapshot;
//         if (progress.totalBytes != undefined) {
//           const percent = (progress.transferredBytes / progress.totalBytes) * 100;
//           console.log(`Transfer Progress: ${percent}%`);
//         }
//       },
//     ],
//     transferComplete: [
//       (event: TransferCompleteEvent) => {
//         console.log("Transfer Complete");
//       },
//     ],
//     transferFailed: [
//       (event: TransferEvent) => {
//         console.log("Transfer Failed");
//       },
//     ],
//   };

//   const downloadResponse = await transferManager.download(
//     {
//       bucket: testBucket,
//       key: testKey,
//       multipartDownloadType: "RANGE",
//       range: DEFAULT_BYTE_SIZE,
//       checksumValidationEnabled: true,
//       destinationPath: "user/desktop/...",
//     },
//     transferOptions
//   );

//   return downloadResponse;
// }

// //Example 6: Client Level Progress Listener
// const transferManager2 = new S3TransferManager({
//   s3ClientInstance: s3Client,
//   targetPartSizeBytes: DEFAULT_BYTE_SIZE,
//   multipartUploadThresholdBytes: 2 * DEFAULT_BYTE_SIZE, // 16 MB
//   checksumValidationEnabled: true,
//   checksumAlgorithm: "CRC32",
//   multipartDownloadType: "RANGE",
//   transferProgressListeners: {
//     transferInitiated: [
//       (event: TransferEvent) => {
//         console.log("Transfer Initiated");
//       },
//     ],
//     bytesTransferred: [
//       (event: TransferEvent) => {
//         const progress = event.snapshot;
//         if (progress.totalBytes != undefined) {
//           const percent = (progress.transferredBytes / progress.totalBytes) * 100;
//           console.log(`Transfer Progress: ${percent}%`);
//         }
//       },
//     ],
//     transferComplete: [
//       (event: TransferCompleteEvent) => {
//         console.log("Transfer Complete");
//       },
//     ],
//     transferFailed: [
//       (event: TransferEvent) => {
//         console.log("Transfer Failed");
//       },
//     ],
//   },
// });
