# @aws-sdk/lib-storage/s3-transfer-manager

> 🚧 **Package Currently Under Development**

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/lib-storage/latest.svg)](https://www.npmjs.com/package/@aws-sdk/lib-storage)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/lib-storage.svg)](https://www.npmjs.com/package/@aws-sdk/lib-storage)

# Overview

S3TransferManager is a high level library that helps users interact with S3
for their most common use cases that involve multiple API operations through SDK JS V3.
S3TransferManager provides the following features:

- automatic [multipart upload](#upload) to S3
- automatic [multipart download](#download) from S3
- upload all files in a directory to an S3 bucket recursively or non-recursively (see [upload all](#uploadall))
- download all objects in a bucket to a local directory recursively or non-recursively (see [download all](#downloadall))
- transfer progress listener (see [Event Listeners](#event-listeners))

## Installation

`npm install @aws-sdk/lib-storage`

# Getting Started

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

| Option                          | Type                     | Default           | Description                                       |
| ------------------------------- | ------------------------ | ----------------- | ------------------------------------------------- |
| `s3ClientInstance`              | `S3Client`               | `new S3Client()`  | S3 client instance for API calls                  |
| `targetPartSizeBytes`           | `number`                 | `8388608` (8MB)   | Target size for each part in multipart operations |
| `multipartUploadThresholdBytes` | `number`                 | `16777216` (16MB) | File size threshold to trigger multipart upload   |
| `checksumValidationEnabled`     | `boolean`                | `true`            | Enable checksum validation for data integrity     |
| `checksumAlgorithm`             | `ChecksumAlgorithm`      | `"CRC32"`         | Algorithm used for checksum calculation           |
| `multipartDownloadType`         | `"PART" \| "RANGE"`      | `"PART"`          | Strategy for multipart downloads                  |
| `eventListeners`                | `TransferEventListeners` | `{}`              | Event listeners for transfer progress             |

**Example:**

```js
const myInitiatedHandler = ({ request }) => {
  console.log(`Started: ${request.Key}`);
};

const myProgressHandler = ({ snapshot }) => {
  const percent = snapshot.totalBytes ? (snapshot.transferredBytes / snapshot.totalBytes) * 100 : 0;
  console.log(`Progress: ${percent.toFixed(1)}%`);
};

// Transfer Manager with optional config properties
const tm = new S3TransferManager({
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

# Methods

## upload()

> 🚧 **Under Development**
>
> Documentation will be available when this feature is implemented.

## download()

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

### Download Examples:

**PART Download:**

```js
// Configure for PART mode
const tm = new S3TransferManager({
  s3ClientInstance: s3Client,
  multipartDownloadType: "PART",
});

const download = await tm.download({
  Bucket: "my-bucket",
  Key: "large-file.zip",
});

const data = await download.Body?.transformToByteArray();
```

**RANGE Download:**

```js
// Configure for RANGE mode
const tm = new S3TransferManager({
  s3ClientInstance: s3Client,
  multipartDownloadType: "RANGE",
});

const download = await tm.download({
  Bucket: "my-bucket",
  Key: "document.pdf",
});

const data = await download.Body?.transformToByteArray();
```

**RANGE Download with Specific Range:**

```js
const tm = new S3TransferManager({
  s3ClientInstance: s3Client,
  multipartDownloadType: "RANGE",
});

// Download first 1MB only
const download = await tm.download({
  Bucket: "my-bucket",
  Key: "video.mp4",
  Range: "bytes=0-1048575",
});

const data = await download.Body?.transformToByteArray();
```

#### uploadAll()

> 🚧 **Under Development**
>
> Documentation will be available when this feature is implemented.

#### downloadAll()

> 🚧 **Under Development**
>
> Documentation will be available when this feature is implemented.

## Event Handling

**Event Types and Data:**

Event listeners receive a single event object with the following properties:

- **`transferInitiated`** - Fired once when transfer begins

  - `request` - Original transfer request (Bucket, Key, etc.)
  - `snapshot` - Initial progress state (`transferredBytes: 0`, `totalBytes` if known)

- **`bytesTransferred`** - Fired during transfer progress with each chunk

  - `request` - Original transfer request
  - `snapshot` - Current progress (`transferredBytes`, `totalBytes`, `transferredFiles` for directory transfers)

- **`transferComplete`** - Fired once when transfer succeeds

  - `request` - Original transfer request
  - `snapshot` - Final progress state
  - `response` - Complete S3 response with metadata

- **`transferFailed`** - Fired once when transfer fails
  - `request` - Original transfer request
  - `snapshot` - Progress state at time of failure

**Creating Callback Functions:**

Event callbacks receive a single event object. Use destructuring to access specific properties:

```js
// Basic function - access specific properties
function transferComplete({ request, snapshot, response }) {
  console.log(`Transfer completed: ${request.Key}`);
  console.log(`Total bytes: ${snapshot.transferredBytes}`);
  console.log(`Response status: ${response.$metadata?.httpStatusCode}`);
}

// Arrow function - inline usage
const progressHandler = ({ snapshot }) => {
  const percent = snapshot.totalBytes ? (snapshot.transferredBytes / snapshot.totalBytes) * 100 : 0;
  console.log(`Progress: ${percent.toFixed(1)}%`);
};

// Object with handleEvent method
const transferLogger = {
  handleEvent: ({ request, snapshot }) => {
    console.log(`${request.Key}: ${snapshot.transferredBytes} bytes transferred`);
  },
};
```

### addEventListener()

Registers event listeners for transfer lifecycle monitoring. It uses familiar EventTarget API patterns.

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

tm.addEventListener("bytesTransferred", progressBar);

// One-time listener
tm.addEventListener(
  "transferComplete",
  (event) => {
    console.log(`\nTransfer completed: ${event.request.Key}`);
  },
  { once: true }
);
```

### removeEventListener()

Removes a previously registered event listener from the specified event type.

**Important:** If you plan to remove event listeners during transfer lifecycle, define your callback as a named function or variable as you cannot remove anonymous functions.

**Parameters:**

- `type` - Event type to stop listening for
- `callback` - The exact function reference that was previously registered
- `options` - Optional configuration (currently unused)

**Example:**

```js
// Can be removed
const progressHandler = (event) => console.log("Progress:", event.snapshot);

tm.addEventListener("bytesTransferred", progressHandler);
tm.removeEventListener("bytesTransferred", progressHandler); // Works

// Cannot be removed
tm.addEventListener("bytesTransferred", (event) => console.log("Progress:", event.snapshot));
tm.removeEventListener("bytesTransferred", (event) => console.log("Progress:", event.snapshot)); // Won't work - different function reference
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

Use the standard AbortController (included in AWS SDK JS V3's HttpHandlerOptions) to cancel downloads at any time during transfer.

**Timeout-Based Cancellation:**

```js
const controller = new AbortController();

// Auto-cancel after 30 seconds
const timeoutId = setTimeout(() => {
  controller.abort();
  console.log("Download timed out");
}, 30000);

try {
  const download = await tm.download({ Bucket: "my-bucket", Key: "data.json" }, { abortSignal: controller.signal });

  clearTimeout(timeoutId); // Cancel timeout on success
  const data = await download.Body?.transformToByteArray();
} catch (error) {
  clearTimeout(timeoutId);
  if (error.name === "AbortError") {
    console.log("Operation was aborted");
  }
}
```

**User-Triggered Cancellation:**

```js
const controller = new AbortController();

// UI cancel button
document.getElementById("cancelBtn").onclick = () => {
  controller.abort();
  console.log("Download cancelled by user");
};

// Start download
try {
  const download = await tm.download({ Bucket: "my-bucket", Key: "video.mp4" }, { abortSignal: controller.signal });

  const data = await download.Body?.transformToByteArray();
  console.log("Download completed");
} catch (error) {
  if (error.name === "AbortError") {
    console.log("Download was cancelled");
  }
}
```

### Event Listeners

Event listeners can be configured at two levels: **client-level** (applies to all transfers) and **request-level** (applies to specific transfers). (see [Event Handling](#event-handling))

In the following code we will define basic callback functions that will be used in the proceeding examples:

```js
const downloadingKey = ({ request }) => {
  console.log(`Started: ${request.Key}`);
};

const progressBar = ({ snapshot }) => {
  const percent = snapshot.totalBytes ? (snapshot.transferredBytes / snapshot.totalBytes) * 100 : 0;
  console.log(`Progress: ${percent.toFixed(1)}%`);
};

const transferComplete = ({ request, snapshot }) => {
  console.log(`Completed: ${request.Key} (${snapshot.transferredBytes} bytes)`);
};

const transferFailed = ({ request }) => {
  console.log(`Failed: ${request.Key}`);
};
```

**Client-Level Event Listeners:**

You can configure the event listeners when creating your Transfer Manager instance. These listeners apply to all transfers made with this instance.

```js
const tm = new S3TransferManager({
  s3ClientInstance: s3Client,
  multipartDownloadType: "RANGE",
  checksumValidationEnabled: true,
  eventListeners: {
    transferInitiated: [downloadingKey],
    bytesTransferred: [progressBar],
    transferComplete: [
      {
        handleEvent: ({ request, snapshot, response }) => {
          console.log(`Transfer completed: ${request.Key}`);
          console.log(`Total bytes: ${snapshot.transferredBytes}`);
        },
      },
    ],
    transferFailed: [transferFailed],
  },
});

// All downloads will use these event listeners
const download1 = await tm.download({ Bucket: "my-bucket", Key: "file1.txt" });
const download2 = await tm.download({ Bucket: "my-bucket", Key: "file2.txt" });
```

**Request-Level Event Listeners:**

You can add event listeners for individual requests like this. Note adding event listeners at request-level will supplement any event listeners defined at client-level. So if you add the same callback at client and request level they will duplicate when the respective event occurs.

```js
const download = await tm.download(
  {
    Bucket: "my-bucket",
    Key: "large-file.zip",
    Range: `bytes=0-${5 * 1024 * 1024 - 1}`,
  },
  {
    eventListeners: {
      transferInitiated: [downloadingKey],
      bytesTransferred: [
        {
          handleEvent: ({ request, snapshot }) => {
            const percent = snapshot.totalBytes ? (snapshot.transferredBytes / snapshot.totalBytes) * 100 : 0;
            console.log(`Progress: ${percent.toFixed(1)}%`);
          },
        },
      ],
      transferComplete: [transferComplete],
      transferFailed: [transferFailed],
    },
  }
);
```

**Practical Example of Combining Both Levels:**

Because request-level listeners are added to client-level listeners (not replaced), it allows for global logging plus request-specific handling.

```js
const globalErrorHandler = ({ request }) => {
  console.error(`Global error: ${request.Key} failed`);
};

const videoProgressBar = ({ snapshot }) => {
  const percent = snapshot.totalBytes ? (snapshot.transferredBytes / snapshot.totalBytes) * 100 : 0;
  console.log(`Video download: ${percent.toFixed(1)}%`);
};

// Client-level: global logging
const tm = new S3TransferManager({
  s3ClientInstance: s3Client,
  eventListeners: {
    transferInitiated: [
      {
        handleEvent: ({ request }) => {
          console.log(`Global: Started ${request.Key}`);
        },
      },
    ],
    transferFailed: [globalErrorHandler],
  },
});

// Request-level: specific progress tracking
const download = await tm.download(
  { Bucket: "my-bucket", Key: "video.mp4" },
  {
    eventListeners: {
      bytesTransferred: [videoProgressBar], // Added to global listeners
      transferComplete: [
        {
          handleEvent: ({ request, response }) => {
            console.log(`Video ${request.Key} completed with status ${response.$metadata?.httpStatusCode}`);
          },
        },
      ],
    },
  }
);
```
