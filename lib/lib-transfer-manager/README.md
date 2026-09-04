# @aws-sdk/lib-transfer-manager

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/lib-transfer-manager/latest.svg)](https://www.npmjs.com/package/@aws-sdk/lib-transfer-manager)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/lib-transfer-manager.svg)](https://www.npmjs.com/package/@aws-sdk/lib-transfer-manager)

## Overview

Transfer Manager for S3 is a high-level data transfer utility built on top of the S3 client. It provides an API to transfer files and directories between your application and Amazon S3, and enables you to monitor a transfer's progress in real time. The Transfer Manager improves throughput by using parallel multipart transfers, dispatching work across worker threads when available, and optimizing DNS resolution to Amazon S3.

The following transfer operations are supported:

- [Upload an object](#upload-an-object) — seamlessly transitions between a single `PutObject` and a multipart upload (`CreateMultipartUpload` + `UploadPart`s + `CompleteMultipartUpload`) based on the object size.
- [Download an object](#download-an-object) — downloads large objects in parallel, by part or by byte-range.
- [Upload a directory](#upload-a-directory) — uploads all files under a local directory, recursively or non-recursively.
- [Download a directory](#download-a-directory) — downloads all objects under a key prefix into a local directory, mapping the `/` key delimiter to subdirectories.
- [Transfer progress listeners](#monitor-transfer-progress) — monitor transfer lifecycle events in real time.

## ⚠️ Developer Preview

This library is currently in developer preview and is **NOT** recommended for production environments. It is meant for early access and feedback purposes at this time. We'd love to hear your feedback. See the AWS SDK and Tools [maintenance policy](https://docs.aws.amazon.com/sdkref/latest/guide/maint-policy.html#version-life-cycle)
descriptions for more information.

## Getting Started

### Installation

```
npm install @aws-sdk/lib-transfer-manager
```

### Instantiate the S3 Transfer Manager

You can instantiate the transfer manager using the default settings:

```js
import { S3TransferManager } from "@aws-sdk/lib-transfer-manager";

const tm = new S3TransferManager();
```

Or pass a config to customize it, including your own `S3Client`:

```js
import { S3Client } from "@aws-sdk/client-s3";
import { S3TransferManager } from "@aws-sdk/lib-transfer-manager";

const tm = new S3TransferManager({
  s3: new S3Client({ region: "us-west-2" }),
  targetPartSizeBytes: 16 * 1024 * 1024, // 16 MB part size
  maxConcurrentUploads: 256,
});
```

For the full list of configuration options, see the documentation comments on
[`S3TransferManagerConfig`](./src/submodules/transfer-manager/types.ts).

## Usage Examples

### Upload an object

Provide a request with the destination `Bucket`, `Key`, and `Body`. When the body is larger than
`multipartUploadThresholdBytes` (16 MB default), the transfer manager splits it into parts of
`targetPartSizeBytes` (8 MB default) and uploads them concurrently using S3
[multipart upload](https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpuoverview.html).

You can monitor the progress of the transfer by attaching event listeners (see
[monitor transfer progress](#monitor-transfer-progress)).

```js
import { createReadStream, statSync } from "node:fs";

const path = "file-to-upload.txt";

await tm.upload({
  Bucket: "destination-bucket",
  Key: "key-1",
  Body: createReadStream(path),
  ContentLength: statSync(path).size,
});
```

### Download an object

Provide a request with the source `Bucket` and `Key`. The response `Body` is a single joined
stream. Objects larger than a single part are downloaded in parts concurrently, using either part
numbers or byte ranges as configured by `multipartDownloadType` (`"PART"` by default).

- **PART** (default) — downloads the object using its part numbers. The object must have been
  uploaded with multipart upload for a part-based download to split it into multiple parts;
  otherwise it is downloaded as a single part.
- **RANGE** — downloads the object using HTTP byte-range requests, so it works for any object
  regardless of how it was uploaded.

Same as upload, you can monitor the progress of the transfer by attaching event listeners (see
[monitor transfer progress](#monitor-transfer-progress)).

```js
const download = await tm.download({
  Bucket: "source-bucket",
  Key: "some-key",
});

const data = await download.Body?.transformToByteArray();
console.log(`Downloaded ${data.byteLength} bytes`);
```

To use RANGE mode, set `multipartDownloadType: "RANGE"` on the transfer manager. You still request
the whole object the same way, the transfer manager issues the internal byte-range requests for
you, so you do not set any `Range` header yourself:

```js
const tm = new S3TransferManager({
  s3: new S3Client({ region: "us-west-2" }),
  multipartDownloadType: "RANGE",
});

const download = await tm.download({
  Bucket: "source-bucket",
  Key: "some-key",
});

const data = await download.Body?.transformToByteArray();
console.log(`Downloaded ${data.byteLength} bytes`);
```

To download only part of an object, set the `Range` header on the request. This works with `multipartDownloadType` and returns just the requested bytes:

```js
// Download the first 5 MB only
const download = await tm.download({
  Bucket: "source-bucket",
  Key: "some-key",
  Range: "bytes=0-5242879",
});

const data = await download.Body?.transformToByteArray();
console.log(`Downloaded ${data.byteLength} bytes`);
```

To download directly to a local file instead of buffering the stream, use `downloadToFile`. By
default an existing file at `destination` is overwritten; set `failIfExists: true` to fail instead:

```js
const result = await tm.downloadToFile({
  Bucket: "source-bucket",
  Key: "some-key",
  destination: "./downloads/some-key",
  failIfExists: true, // throws if ./downloads/some-key already exists (default: false, overwrite)
});

console.log(`Wrote ${result.bytesWritten} bytes`);
```

### Upload a directory

Provide the destination `bucket` and the local `source` directory. Each file is uploaded as an object whose key is its path relative to `source`, using `/` as the separator, so subdirectory separators become part of the S3 object key. By default the directory is not traversed recursively; set `recursive: true` to include subdirectories.

```js
const result = await tm.uploadDirectory({
  bucket: "destination-bucket",
  source: "source/directory/to/upload",
  recursive: true,
});

console.log(`Uploaded ${result.objectsUploaded}, failed ${result.objectsFailed}`);
```

By default, if any individual object fails, the whole directory transfer stops and the error is
thrown (`failurePolicy: "terminate"`). Set `failurePolicy: "continue"` to skip failed objects and
keep going — the failures are reflected in `objectsFailed`. You can also pass a callback to decide
per failure:

```js
const result = await tm.uploadDirectory({
  bucket: "destination-bucket",
  source: "source/directory/to/upload",
  recursive: true,
  failurePolicy: async ({ objectRequest, error }) => {
    console.warn(`Failed ${objectRequest.Key}: ${error}`);
    return "continue";
  },
});
```

### Download a directory

Download the objects under a bucket to a local `destination` directory. The `/` delimiter in each object key is mapped to local subdirectories. Provide the source `bucket` and the destination directory; optionally filter which objects are downloaded with
`s3Prefix` or a `filter` callback.

```js
const result = await tm.downloadDirectory({
  bucket: "source-bucket",
  destination: "destination/directory/for/download",
  s3Prefix: "photos/",
});

console.log(`Downloaded ${result.objectsDownloaded}, failed ${result.objectsFailed}`);
```

Like `uploadDirectory`, per-object failures are governed by `failurePolicy` (`"terminate"` by
default, or `"continue"`, or a callback). See [Upload a directory](#upload-a-directory) for the
failure-policy details.

### Monitor transfer progress

Ypu can attach listeners for the transfer lifecycle events — `transferInitiated` (fires once when a
transfer begins), `bytesTransferred` (fires as data moves), `transferComplete` (fires once on
success), and `transferFailed` (fires once on failure). Each listener receives an event with the
original `request`, a progress `snapshot`, and — for `transferComplete` — the S3 `response`.

Listeners can be set at the **client level** (in the constructor, applying to every transfer) or
at the **request level** (added on top of the client-level listeners for that one transfer).

```js
const onInitiated = ({ request }) => console.log(`Started: ${request.Key}`);

const onProgress = ({ snapshot }) => {
  const percent = snapshot.totalBytes ? (snapshot.transferredBytes / snapshot.totalBytes) * 100 : 0;
  console.log(`Progress: ${percent.toFixed(1)}%`);
};

const onComplete = ({ request, snapshot }) => {
  console.log(`Completed: ${request.Key} (${snapshot.transferredBytes} bytes)`);
};

const onFailed = ({ request }) => console.log(`Failed: ${request.Key}`);

// Client-level: applies to every transfer made by this instance
const tm = new S3TransferManager({
  eventListeners: {
    transferInitiated: [onInitiated],
    bytesTransferred: [onProgress],
    transferComplete: [onComplete],
    transferFailed: [onFailed],
  },
});

// Request-level: added on top of the client-level listeners for this transfer only
await tm.download(
  { Bucket: "source-bucket", Key: "some-key" },
  {
    eventListeners: {
      transferComplete: [({ request }) => console.log(`Done: ${request.Key}`)],
    },
  }
);
```

You can also register and remove listeners after construction with `addEventListener` /
`removeEventListener` (an `EventTarget`-style API):

```js
tm.addEventListener("bytesTransferred", onProgress);

// Fire only once, then auto-remove
tm.addEventListener("transferComplete", onComplete, { once: true });

// To remove a listener later, pass the same function reference used to add it.
// (Anonymous inline functions cannot be removed.)
tm.removeEventListener("bytesTransferred", onProgress);
```

Transfers can be cancelled with a standard `AbortController` via `transferOptions.abortSignal`:

```js
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 30_000);

try {
  const download = await tm.download({ Bucket: "source-bucket", Key: "some-key" }, { abortSignal: controller.signal });
  const data = await download.Body?.transformToByteArray();
  console.log(`Downloaded ${data.byteLength} bytes`);
} catch (error) {
  if (error.name === "AbortError") {
    console.log("Download aborted");
  } else {
    throw error;
  }
} finally {
  clearTimeout(timeoutId);
}
```
