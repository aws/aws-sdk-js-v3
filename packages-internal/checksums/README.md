# @aws-sdk/checksums

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/checksums/latest.svg)](https://www.npmjs.com/package/@aws-sdk/checksums)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/checksums.svg)](https://www.npmjs.com/package/@aws-sdk/checksums)

Checksum algorithms and flexible checksums middleware for the AWS SDK.

## Standardized API

The following checksum API symbols are available.

```ts
import { Sha1, Sha256 } from "@aws-sdk/checksums/sha";
import { Md5 } from "@aws-sdk/checksums/md5";
import { Crc32, Crc32c, Crc64Nvme } from "@aws-sdk/checksums/crc";
```

Each follows an identical interface, the Smithy Checksum interface:

```ts
interface Checksum {
  update(chunk: Uint8Array): void;
  digest(): Promise<Uint8Array>;
  reset();
}
```

Bytes go into update, and the checksums comes out of digest.

Where possible, digest is non-destructive. That means you can digest to get a checksum, and then
keep adding more data with update.

Some checksums accept initial seeds.

| Algorithm | Digest length | Non-destructive digest   | Accepts secret (HMAC) |
| --------- | ------------- | ------------------------ | --------------------- |
| Sha256    | 32 bytes      | ✅ (only without secret) | ✅                    |
| Sha1      | 20 bytes      | ✅ (only without secret) | ✅                    |
| Md5       | 16 bytes      | ✅                       | ❌                    |
| Crc32     | 4 bytes       | ✅                       | ❌                    |
| Crc32c    | 4 bytes       | ✅                       | ❌                    |
| Crc64Nvme | 8 bytes       | ✅                       | ❌                    |

## Selective API

By default, the canonically named checksum algorithms (above) will use the best implementation for
your bundling or runtime environment, some of which use natively available implementations.
All checksums have a pure JavaScript fallback. To use a specific implementation, you
can use the following implementation-specific import symbols, but this is not recommended.

```ts
import {
  // SHA1
  Sha1Js,
  Sha1Node,
  Sha1WebCrypto,
  // SHA256
  Sha256Js,
  Sha256Node,
} from "@aws-sdk/checksums/sha";
import { Md5Js, Md5Node } from "@aws-sdk/checksums/md5";
import {
  // CRC32
  Crc32Js,
  Crc32Node,
  // CRC32C
  Crc32cJs,
  Crc32cNode,
  //CRC32NVME
  Crc64Nvme,
  Crc64NvmeJs,
} from "@aws-sdk/checksums/crc";
```

Sha1Node, Sha256Node, and Md5Node use the `node:crypto` lib.

Sha1WebCrypto uses subtle crypto but falls back to JS when buffered data exceeds 8 MB.

Crc32Node uses `node:zlib`.

Crc64Nvme uses the AWS CRT if you load `@aws-sdk/crc64-nvme-crt`.

## What does the AWS SDK do with this package?

The AWS SDK uses Sha256 for Signature V4 signing, Crc32 for event stream message integrity,
and all other algorithms are used for data integrity checksumming.
