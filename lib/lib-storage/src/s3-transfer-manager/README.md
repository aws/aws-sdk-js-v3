# @aws-sdk/lib-storage/s3-transfer-manager

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/lib-storage/latest.svg)](https://www.npmjs.com/package/@aws-sdk/lib-storage)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/lib-storage.svg)](https://www.npmjs.com/package/@aws-sdk/lib-storage)

## Overview

S3TransferManager is a high level library that helps customers interact with S3
for their most common use cases that involve multiple API operations through SDK JS V3.
S3TransferManager provides the following features:

- automatic [multipart upload](#upload) to S3
- automatic [multipart download](#download) from S3
- upload all files in a directory to an S3 bucket recursively or non-recursively (see [upload all](#uploadall))
- download all objects in a bucket to a local directory recursively or non-recursively (see [download all](#downloadall))
- transfer progress listener (see [Event Listeners](#event-listeners))

## Installation

`npm install @aws-sdk/lib-storage`

## Getting Started

### Import

To begin using `S3TransferManager`, you must import it through `@aws-sdk/lib-storage`. You can also specify your own `S3Client` to use with `S3TransferManager`. Example:

```js
import { S3Client } from "@aws-sdk/client-s3";
import { S3TransferManager } from "@aws-sdk/lib-storage";
```

### Creating a TransferManager Instance

When creating an instance, takes an optional `S3TransferManagerConfig` object (see [Constructor Options](#constructor-options)). Minimal instantiation of a `S3TransferManager`:

```js
// Create S3 client
const s3Client = new S3Client({ region: "us-east-1" });

// Create transfer manager
const tm = new S3TransferManager({
  s3ClientInstance: s3Client,
});
```

### Basic Usage

Basic use of `download()` (await required):

```js
const download = await tm.download({
  Bucket,
  Key,
});

const data = await download.Body?.transformToByteArray();
console.log(`Downloaded ${data.byteLength} bytes`);
```

## Configuration

- **s3ClientInstance** - The S3 client instance to use for requests
- **targetPartSizeBytes** - Target part size for multipart transfers (default: 8MB)
- **multipartUploadThresholdBytes** - Size threshold for multipart upload (default: 16MB)
- **checksumValidationEnabled** - Enable/disable checksum validation for downloads (default: true)
- **multipartDownloadType** - Download strategy: "RANGE" or "PART" (default: "RANGE")
- [**eventListeners**](#event-listeners) - Transfer progress listeners

### Constructor Options

The S3TransferManager constructor accepts an optional `S3TransferManagerConfig` object with the following optional properties:

| Option                          | Type                     | Default                               | Description                                       |
| ------------------------------- | ------------------------ | ------------------------------------- | ------------------------------------------------- |
| `s3ClientInstance`              | `S3Client`               | `new S3Client()` with checksum config | S3 client instance for API calls                  |
| `targetPartSizeBytes`           | `number`                 | `8388608` (8MB)                       | Target size for each part in multipart operations |
| `multipartUploadThresholdBytes` | `number`                 | `16777216` (16MB)                     | File size threshold to trigger multipart upload   |
| `checksumValidationEnabled`     | `boolean`                | `true`                                | Enable checksum validation for data integrity     |
| `checksumAlgorithm`             | `ChecksumAlgorithm`      | `"CRC32"`                             | Algorithm used for checksum calculation           |
| `multipartDownloadType`         | `"PART" \| "RANGE"`      | `"PART"`                              | Strategy for multipart downloads                  |
| `eventListeners`                | `TransferEventListeners` | `{}`                                  | Event listeners for transfer progress             |

**Example:**

```js
const transferManager = new S3TransferManager({
  s3ClientInstance: new S3Client({ region: "us-west-2" }),
  targetPartSizeBytes: 10 * 1024 * 1024, // 10MB
  multipartUploadThresholdBytes: 20 * 1024 * 1024, // 20MB
  checksumValidationEnabled: false,
  checksumAlgorithm: "SHA256",
  multipartDownloadType: "RANGE",
  eventListeners: {
    transferInitiated: [myInitiatedHandler],
    bytesTransferred: [myProgressHandler],
  },
});
```

## Methods

### upload()

### download()

Downloads objects from S3 using multipart download with two modes:

**PART Mode:**

- Optimized for objects uploaded via multipart upload
- Uses S3's native PartNumber parameter to download parts concurrently

**RANGE Mode:**

- Works with any S3 object regardless of upload method
- Uses HTTP Range headers to split objects into chunks for concurrent download

Both modes join separate streams into a single stream and support Readable/ReadableStream for Node.js and browsers.

**Parameters:**

- `Bucket` (required) - S3 bucket name
- `Key` (required) - Object key/path
- `Range` - Byte range for partial downloads (e.g., "bytes=0-1023")

**Transfer Options:**

- `abortSignal` - AbortController signal for cancellation
- `eventListeners` - Progress tracking callbacks

> For complete parameter list, see [GetObjectCommandInput](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/s3/command/GetObjectCommand/) documentation.

**Features:**

- AbortController support for cancellation
- Event listeners: `transferInitiated`, `bytesTransferred`, `transferComplete`, `transferFailed`
- ETag validation ensures object consistency during download
- Automatic boundary/range validation with error handling

**Validation:**

Both modes validate data integrity:

- **PART**: Validates part boundaries match expected byte ranges
- **RANGE**: Validates byte ranges match expected values
- Uses `IfMatch` header with initial ETag to ensure object consistency
- Throws errors and cancels download on validation failures

We do not recommend updating the object you're downloading mid-download as this may throw a [Precondition Failed error](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/http-412-precondition-failed.html).

#### uploadAll()

#### downloadAll()

## Event Handling

### addEventListener()

Registers event listeners for transfer lifecycle monitoring. It uses familiar EventTarget API patterns.

**Event Types:**

- `transferInitiated` - Fired when transfer begins
- `bytesTransferred` - Fired during transfer progress with each byte chunk transfer
- `transferComplete` - Fired when transfer succeeds
- `transferFailed` - Fired when transfer fails

**Parameters:**

- `type` - Event type to listen for
- `callback` - Function or object with `handleEvent` method
- `options` - Optional configuration:
  - `once: boolean` - Remove listener after first execution
  - `signal: AbortSignal` - Auto-remove listener when signal aborts

**Example:**

```js
function progressBar({ request, snapshot }) {
  const percent = snapshot.totalBytes ? (snapshot.transferredBytes / snapshot.totalBytes) * 100 : 0;
  let barLength = percent / 2;
  let progressBar = "[";
  for (let i = 0; i < 50; i++) {
    if (barLength > 0) {
      progressBar += "#";
      barLength--;
    } else {
      progressBar += "-";
    }
  }
  progressBar += "]";

  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(`Downloading... ${progressBar} ${percent.toFixed(0)}%`);
}

transferManager.addEventListener("bytesTransferred", progressBar);

// One-time listener
transferManager.addEventListener(
  "transferComplete",
  (event) => {
    console.log(`\nTransfer completed: ${event.request.Key}`);
  },
  { once: true }
);
```

### removeEventListener()

Removes a previously registered event listener from the specified event type.

**Parameters:**

- `type` - Event type to stop listening for
- `callback` - The exact function that was previously registered
- `options` - Optional configuration (currently unused)

**Example:**

```js
const progressHandler = (event) => console.log("Progress:", event.snapshot);

transferManager.addEventListener("bytesTransferred", progressHandler);
transferManager.removeEventListener("bytesTransferred", progressHandler);
```

### dispatchEvent()

Dispatches events to registered listeners. Primarily used internally but available for custom event handling.

**Parameters:**

- `event` - Event object with `type` property matching registered listeners

**Returns:**

- `boolean` - Always returns `true` (follows EventTarget API)

**Example:**

```js
const customEvent = new Event("transferInitiated");
customEvent.snapshot = { transferredBytes: 0, totalBytes: 1000 };
transferManager.dispatchEvent(customEvent);
```

## Transfer Options

### AbortSignal

TODO: Include practical examples of using abortcontroller to cancel downloads

### Event Listeners

TODO: Include examples of eventListeners are client level and request level

## Performance
