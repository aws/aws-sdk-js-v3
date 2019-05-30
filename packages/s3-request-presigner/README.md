# @aws-sdk/s3-request-presigner

This package provides a presigner based on signature V4 that will attempt to generate signed url for S3.
Not all operation parameters are supported when using pre-signed URLs. Certain parameters, such as
`SSECustomerKey`, `ACL`, `Expires`, `ContentLength`, or `Tagging` must be provided as headers when
sending a request.

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
const Day = 24 * 60 * 60 * 1000;
const expiration = new Date(Date.now() + 1 * Day);
const url = signer.presignRequest(request, expiration);
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
const Day = 24 * 60 * 60 * 1000;
const expiration = new Date(Date.now() + 1 * Day);
const url = signer.presignRequest(request, expiration);
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
