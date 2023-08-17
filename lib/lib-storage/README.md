# @aws-sdk/lib-storage

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/lib-storage/latest.svg)](https://www.npmjs.com/package/@aws-sdk/lib-storage)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/lib-storage.svg)](https://www.npmjs.com/package/@aws-sdk/lib-storage)

### Upload

Upload allows for easy and efficient uploading of buffers, blobs, or streams, using a configurable amount of concurrency to perform multipart uploads where possible. This abstraction enables uploading large files or streams of unknown size due to the use of multipart uploads under the hood.

```js
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client, S3 } from "@aws-sdk/client-s3";

try {
  const parallelUploads3 = new Upload({
    client: new S3({}) || new S3Client({}),
    params: { Bucket, Key, Body },

    tags: [
      /*...*/
    ], // optional tags
    queueSize: 4, // optional concurrency configuration
    partSize: 1024 * 1024 * 5, // optional size of each part, in bytes, at least 5MB
    leavePartsOnError: false, // optional manually handle dropped parts
  });

  parallelUploads3.on("httpUploadProgress", (progress) => {
    console.log(progress);
  });

  await parallelUploads3.done();
} catch (e) {
  console.log(e);
}
```
