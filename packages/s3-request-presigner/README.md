# @aws-sdk/s3-request-presigner

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/s3-request-presigner/latest.svg)](https://www.npmjs.com/package/@aws-sdk/s3-request-presigner)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/s3-request-presigner.svg)](https://www.npmjs.com/package/@aws-sdk/s3-request-presigner)

This package provides a presigner based on signature V4 that will attempt to
generate signed url for S3.

### Get Presigned URL with Client and Command

You can generated presigned url from S3 client and command. Here's the example:

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

```javascript
import { S3RequestPresigner } from "@aws-sdk/s3-request-presigner";
import { Sha256 } from "@aws-crypto/sha256-browser";
import { Hash } from "@aws-sdk/hash-node";
const signer = new S3RequestPresigner({
  region: regionProvider,
  credentials: credentialsProvider,
  sha256: Hash.bind(null, "sha256"), // In Node.js
  //sha256: Sha256 // In browsers
});
const presigned = await signer.presign(request);
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

### Get Presigned URL with headers that cannot be signed

By using the `getSignedUrl` with a `S3Client` you are able to sign your
headers, improving the security of presigned url. Importantly, if you want to
sign any `x-amz-*` headers (like the ChecksumSHA256 header in this example),
you need to provide those headers to the set of `unhoistableHeaders` in the
`getSignedUrl` params which will force those headers to be present in the
upload request.

```javascript
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({ region: "us-east-1" });
const command = new PutObjectCommand({
  Bucket: bucket,
  Key: key,
  ChecksumSHA256: sha,
});

const presigned = getSignedUrl(s3Client, command, {
  expiresIn: expiration,
  // Set of all x-amz-* headers you wish to have signed
  unhoistableHeaders: new Set(["x-amz-checksum-sha256"]),
});
```

### Get Presigned URL with headers that should be signed

For headers that are not `x-amz-*` you are able to add them to the set of
`signableHeaders` to be enforced in the presigned urls request.

```javascript
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({ region: "us-east-1" });
const command = new PutObjectCommand({
  Bucket: bucket,
  Key: key,
  ContentType: contentType,
});

const presigned = getSignedUrl(s3Client, command, {
  signableHeaders: new Set(["content-type"]),
  expiresIn: expiration,
});
```

### PutObject with use of `hoistableHeaders`

`hoistableHeaders` overrides the default behavior of not hoisting
any headers that begin with `x-amz-*`.

```js
// example: Server Side Encryption headers
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const params = {
  Key: "...",
  Bucket: "...",
  ServerSideEncryption: "aws:kms",
  SSEKMSKeyId: "arn:aws:kms:us-west-2:0000:key/abcd-1234-abcd",
};
const s3Client = new S3Client();
const command = new PutObjectCommand(params);

const preSignedUrl = await getSignedUrl(s3Client, command, {
  hoistableHeaders: new Set(["x-amz-server-side-encryption", "x-amz-server-side-encryption-aws-kms-key-id"]),
});
```
