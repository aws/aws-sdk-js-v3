# @aws-sdk/s3-request-presigner

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/s3-request-presigner/rc.svg)](https://www.npmjs.com/package/@aws-sdk/s3-request-presigner)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/s3-request-presigner/rc.svg)](https://www.npmjs.com/package/@aws-sdk/s3-request-presigner)

This package provides a presigner based on signature V4 that will attempt to
generate signed url for S3.

### Get Presigned URL with Client and Command

You can generated presigned url from S3 client and command. Here's the example:

JavaScript Example:

```javascript
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const client = new S3Client(clientParams);
const command = new GetObjectCommand(getObjectParams);
const url = await getSignedUrl(client, command, { expiresIn: 3600 });
```

ES6 Example

```javascript
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
const client = new S3Client(clientParams);
const command = new GetObjectCommand(getObjectParams);
const url = await getSignedUrl(client, command, { expiresIn: 3600 });
```

You can get signed URL for other S3 operations too, like `PutObjectCommand`.
`expiresIn` config from the examples above is optional. If not set, it's default
at `900`.

If you already have a request, you can pre-sign the request following the
section bellow.

### Get Presigned URL from an Existing Request

JavaScript Example:

```javascript
const S3Presigner = require("@aws-sdk/s3-request-presigner").S3RequestPresigner;
const browserSha256 = require("@aws-crypto/sha256-browser").Sha256;
const nodeSha256 = require("@aws-sdk/hash-node").Hash;
const signer = new S3Presigner({
  region: regionProvider,
  credentials: credentialsProvider,
  sha256: nodeSha256, //if the signer is used in browser, use `browserSha256` then
});
const url = await signer.presign(request);
```

ES6 Example:

```javascript
import { S3RequestPresigner } from "@aws-sdk/s3-request-presigner";
import { Sha256 as browserSha256 } from "@aws-crypto/sha256-browser";
import { Hash as nodeSha256 } from "@aws-sdk/hash-node";
const signer = new S3RequestPresigner({
  region: regionProvider,
  credentials: credentialsProvider,
  sha256: nodeSha256, //if the signer is used in browser, use `browserSha256` then
});
const url = await signer.presign(request);
```

To avoid redundant construction parameters when instantiating the s3 presigner,
you can simply spread the configuration of an existing s3 client and supply it to
the presigner's constructor.

```javascript
//s3 is instantiated from S3Client from @aws-sdk/client-s3-* packages
const signer = new S3RequestPresigner({
  ...s3.config,
});
```
