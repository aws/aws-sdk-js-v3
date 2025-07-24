# @aws-sdk/lib-storage/s3-transfer-manager

## Overview

S3TransferManager is a high level library that helps customer interact with S3
for their most common use cases that involve multiple API operations through SDK JS V3.
S3TransferManager provides the following features:

- automatic multipart upload to S3
- automatic multipart download from S3
- upload all files in a directory to an S3 bucket recursively or non-recursively
- download all objects in a bucket to a local directory recursively or non-recursively
- transfer progress listener

## Installation

## Getting Started

## Configuration

When creating an instance of the S3TransferManager, users can configure some of it's client options
to best fit their use case.

- s3ClientInstance - specify the low level S3 client that will be used to send reqeusts to S3
- targetPartSizeBytes - specify the target part size to use in mulitpart transfer. Does not
  apply to the last part and downloads if multipartDownloadType is PART
- multipartUploadThresholdBytes - specify the size threshold in bytes for multipart upload.
- checksumValidationEnabled - option to disable checksum validation for donwload.
- multipartDownloadType - specify how the SDK should perform multipart download. Either RANGE or PART.
- eventListeners - transfer progress listeners to receive event-driven updates on transfer
  progress throughout the lifecycle of a request at client level. Supported callbacks:
  - transferInitiated: A new transfer has been initiated. This method is invoked exactly once per
    transfer, right after the operation has started. It allows users to retrieve the request and ProgressSnapshot.
  - bytesTransferred: Additional bytes have been submitted or received. This method may be called
    many times per transfer, depending on the transfer size and I/O buffer sizes. It must be called
    at least once for a successful transfer. It allows users to retrieve the the request and the ProgressSnapshot.
  - transferComplete: The transfer has completed successfully. This method is called exactly once for
    a successful transfer. It allows users to retrieve the request, the response and the ProgressSnapshot.
  - transferFailed: The transfer has failed. This method is called exactly once for a failed transfer.
    It allows users to retrieve the request and a progress snapshot.

### Example

```js
import { S3Client } from "@aws-sdk/client-s3";
import { S3TransferManager } from "@aws-sdk/lib-storage";

  const tm = new S3TransferManager ({
    s3ClientInstance: new S3Client({}),
    multipartDownloadType: "RANGE",
    targetPartSizeBytes: 8 * 1024 * 1024
    multipartThresholdBytes: 16 * 1024 * 1024,
    checksumValidationEnabled: true,
    checksumAlgorithm: CRC32,
    multipartDownloadType: PART,
    eventListeners: {
      transferInitiated: [transferStarted],
      bytesTrnasferred: [progressBar],
      transferComplete: [{
        handleEvent: console.log({
          request, snapshot, response
        })
      }],
      trasnferFailed: [transferFailed]
    }
  })
```

### Constructor Options

## API Reference

## Methods

### upload()

### download()

The download() function in S3TransferManager is a wrapper function for the S3 GetObjectCommand
allowing users to download objects from an S3 bucket using multipart download of two types
which are specified in the configuration of the S3TransferManager instance: Part GET and Ranged GET.
Both of which download the object using GetObjectCommand in separate streams then join them into
one single stream. The S3TransferManager download() supports Readable and ReadableStream for node and browser.

- Part GET
  - Use case: Optimizes downloads for objects that were uploaded using the S3 multipart upload
  - How it works: Uses the S3 native download feature with the PartNumber parameter. It fetches part 1 of the object to get the metadata then downloads the remaining parts concurrently.
- Range GET
  - Use case: Allows for multipart download for any S3 object regardless of whether it was
    uploaded using multipart upload or not
  - How it works: Uses the HTTP Range request with the bytes=start-end headers to split objects into
    chunks based on the user-provided byte range header, or if not included the MIN_PART_SIZE to make concurrent range requests.

Users can also include an abortController allowing for cancellation mid download along
with eventListeners for the callbacks: 'transferInitiated', 'bytesTransferred', 'transferComplete',
and 'transferFailed' at client level and request level. 'bytesTransferred' provides progress updates per byte chunk during streaming.

#### Validation

Both multipartDownloadTypes have methods that validates the bytes and ranges of the multipart download requests. In multipartDownloadType PART, bytes of the part boundaries in each concurrent request are checked for whether they match the expected byte boundaries. In multipartDownloadType RANGE, the byte ranges are checked for whether they match the expected ranges. An error is thrown on mismatches and all requests for download is cancelled.

Both both PART and RANGE GET uses the S3 standard IfMatch header with the initial ETag for subsequent parts to ensure object version consistency during a download.

#### uploadAll()

#### downloadAll()

### Event Handling

#### addEventListener()

#### removeEventListener()

#### dispatchEvent()

## Transfer Options

### AbortSignal

### Event Listeners

## Examples

### Basic Upload

### Basic Download

### Multipart Download

### Event Handling

### Abort Operations

## Performance Considerations

## Error Handling
