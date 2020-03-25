# @aws-sdk/s3-request-presigner

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/s3-request-presigner/beta.svg)](https://www.npmjs.com/package/@aws-sdk/s3-request-presigner)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/s3-request-presigner/beta.svg)](https://www.npmjs.com/package/@aws-sdk/s3-request-presigner)

This package provides a presigner based on signature V4 that will attempt to generate signed url for S3.

JavaScript Example:

```javascript
const S3Presigner = require("@aws-sdk/s3-request-presigner").S3RequestPresigner;
const browserSha256 = require("@aws-crypto/sha256-browser").Sha256;
const nodeSha256 = require("@aws-sdk/hash-node").Hash;
const signer = new S3Presigner({
  region: regionProvider,
  credentials: credentialsProvider,
  sha256: nodeSha256 //if the signer is used in browser, use `browserSha256` then
});
const url = await signer.presign(request);
```

Typescript Example:

```javascript
import { S3RequestPresigner } from "@aws-sdk/s3-request-presigner";
import { Sha256 as browserSha256 } from "@aws-crypto/sha256-browser";
import { Hash as nodeSha256 } from "@aws-sdk/hash-node";
const signer = new S3RequestPresigner({
  region: regionProvider,
  credentials: credentialsProvider,
  sha256: nodeSha256 //if the signer is used in browser, use `browserSha256` then
});
const url = await signer.presign(request);
```

To avoid redundant construction parameters when instantiate the s3 presigner,
you can simply spread the configurations of an existing s3 clients and supply to
the presigner's constructor.

```javascript
//s3 is instantiated from S3Client from @aws-sdk/client-s3-* packages
const signer = new S3RequestPresigner({
  ...s3.config
});
```
