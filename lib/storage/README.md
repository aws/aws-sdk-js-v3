# @aws-sdk/lib-storage

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/lib-storage/latest.svg)](https://www.npmjs.com/package/@aws-sdk/abort-controller)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/lib-storage.svg)](https://www.npmjs.com/package/@aws-sdk/abort-controller)

### Upload

Upload allows for easy and efficient uploading of buffers, blobs, or streams, using a configurable amount of concurrency to perform multipart uploads where possible. This abstraction enables uploading large files or streams of unknown size due to the use of multipart uploads under the hood.

```
  import { Upload } from "@aws-sdk/lib-storage";
  const target = { Bucket, Key, Body };
  try {
    const paralellUploads3 = new Upload({
      client: new S3({}),
      params: target,
    });

    paralellUploads3.on("httpUploadProgress", (progress) => {
      console.log(progress);
    });

    await paralellUploads3.done();
  } catch (e) {
    console.log(e);
  }
```
