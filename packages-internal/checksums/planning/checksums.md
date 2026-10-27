# @aws-sdk/checksums Benchmarks

Platform: Node.js v22.22.2 (linux x64)
Date: 2026-10-27T00:41:03.565Z
Iterations per size: [10000, 5000, 2000, 200, 20, 5], Warmup: 1s per algo

## CRC-32

| Size | Crc32Js (JS) | Crc32Node (node:zlib) | @aws-crypto/crc32 |
| ---- | ------------ | --------------------- | ----------------- |
| 32B  | 39.8 MB/s    | 41.7 MB/s             | 25.5 MB/s         |
| 256B | 100.9 MB/s   | 321.9 MB/s            | 78.2 MB/s         |
| 1KB  | 115.8 MB/s   | 1.30 GB/s             | 89.9 MB/s         |
| 64KB | 121.0 MB/s   | 4.57 GB/s             | 99.5 MB/s         |
| 1MB  | 121.3 MB/s   | 4.73 GB/s             | 101.8 MB/s        |
| 10MB | 121.3 MB/s   | 4.76 GB/s             | 102.0 MB/s        |

## CRC-32C

| Size | Crc32cJs (JS) | @aws-crypto/crc32c |
| ---- | ------------- | ------------------ |
| 32B  | 97.4 MB/s     | 27.1 MB/s          |
| 256B | 365.9 MB/s    | 77.9 MB/s          |
| 1KB  | 423.4 MB/s    | 95.5 MB/s          |
| 64KB | 437.5 MB/s    | 101.5 MB/s         |
| 1MB  | 437.7 MB/s    | 101.7 MB/s         |
| 10MB | 437.9 MB/s    | 102.0 MB/s         |

## CRC-64/NVME

| Size | Crc64NvmeJs (JS) | Crc64Nvme (auto CRT) |
| ---- | ---------------- | -------------------- |
| 32B  | 59.5 MB/s        | 18.7 MB/s            |
| 256B | 213.3 MB/s       | 146.7 MB/s           |
| 1KB  | 312.3 MB/s       | 422.0 MB/s           |
| 64KB | 393.8 MB/s       | 1.74 GB/s            |
| 1MB  | 421.1 MB/s       | 1.83 GB/s            |
| 10MB | 420.6 MB/s       | 1.83 GB/s            |

## SHA-1 (hash)

> **Note:** WebCrypto (`crypto.subtle`) was benchmarked from Node.js and may be significantly faster in a browser.

| Size | Sha1Js (JS) | Sha1Node (node:crypto) | Sha1WebCrypto |
| ---- | ----------- | ---------------------- | ------------- |
| 32B  | 11.3 MB/s   | 11.1 MB/s              | 1.4 MB/s      |
| 256B | 78.0 MB/s   | 71.7 MB/s              | 10.9 MB/s     |
| 1KB  | 154.2 MB/s  | 533.6 MB/s             | 38.8 MB/s     |
| 64KB | 193.8 MB/s  | 1.72 GB/s              | 732.6 MB/s    |
| 1MB  | 195.1 MB/s  | 1.80 GB/s              | 784.3 MB/s    |
| 10MB | 194.2 MB/s  | 1.81 GB/s              | 186.7 MB/s    |

## SHA-1 (HMAC)

> **Note:** WebCrypto (`crypto.subtle`) was benchmarked from Node.js and may be significantly faster in a browser.

| Size | Sha1Js (JS) | Sha1Node (node:crypto) | Sha1WebCrypto |
| ---- | ----------- | ---------------------- | ------------- |
| 32B  | 4.9 MB/s    | 9.4 MB/s               | 994.5 KB/s    |
| 256B | 36.1 MB/s   | 99.7 MB/s              | 7.6 MB/s      |
| 1KB  | 110.7 MB/s  | 416.7 MB/s             | 29.8 MB/s     |
| 64KB | 192.6 MB/s  | 1.71 GB/s              | 731.3 MB/s    |
| 1MB  | 194.4 MB/s  | 1.79 GB/s              | 1.20 GB/s     |
| 10MB | 194.2 MB/s  | 1.81 GB/s              | 185.8 MB/s    |

## SHA-256 (hash)

> **Note:** WebCrypto (`crypto.subtle`) was benchmarked from Node.js and may be significantly faster in a browser.

| Size | Sha256Js (JS) | Sha256Node (node:crypto) | Sha256WebCrypto | @aws-crypto/sha256-js |
| ---- | ------------- | ------------------------ | --------------- | --------------------- |
| 32B  | 12.2 MB/s     | 18.4 MB/s                | 1.4 MB/s        | 8.3 MB/s              |
| 256B | 49.2 MB/s     | 143.0 MB/s               | 10.3 MB/s       | 40.4 MB/s             |
| 1KB  | 104.5 MB/s    | 314.3 MB/s               | 41.9 MB/s       | 79.6 MB/s             |
| 64KB | 122.0 MB/s    | 1.61 GB/s                | 759.8 MB/s      | 100.0 MB/s            |
| 1MB  | 121.9 MB/s    | 1.69 GB/s                | 879.7 MB/s      | 100.4 MB/s            |
| 10MB | 122.5 MB/s    | 1.70 GB/s                | 118.1 MB/s      | 99.9 MB/s             |

## SHA-256 (HMAC)

> **Note:** WebCrypto (`crypto.subtle`) was benchmarked from Node.js and may be significantly faster in a browser.

| Size | Sha256Js (JS) | Sha256Node (node:crypto) | Sha256WebCrypto | @aws-crypto/sha256-js |
| ---- | ------------- | ------------------------ | --------------- | --------------------- |
| 32B  | 4.2 MB/s      | 13.9 MB/s                | 1001.4 KB/s     | 4.6 MB/s              |
| 256B | 27.5 MB/s     | 93.4 MB/s                | 7.5 MB/s        | 28.3 MB/s             |
| 1KB  | 66.2 MB/s     | 189.6 MB/s               | 28.1 MB/s       | 66.4 MB/s             |
| 64KB | 121.3 MB/s    | 1.59 GB/s                | 728.1 MB/s      | 99.4 MB/s             |
| 1MB  | 122.4 MB/s    | 1.69 GB/s                | 893.2 MB/s      | 100.3 MB/s            |
| 10MB | 122.5 MB/s    | 1.70 GB/s                | 120.0 MB/s      | 100.5 MB/s            |

## SHA-512 (hash)

> **Note:** WebCrypto (`crypto.subtle`) was benchmarked from Node.js and may be significantly faster in a browser.

| Size | Sha512Js (JS) | Sha512 (node:crypto) | Sha512WebCrypto |
| ---- | ------------- | -------------------- | --------------- |
| 32B  | 3.8 MB/s      | 6.4 MB/s             | 1.4 MB/s        |
| 256B | 13.3 MB/s     | 93.9 MB/s            | 10.0 MB/s       |
| 1KB  | 19.6 MB/s     | 286.4 MB/s           | 36.9 MB/s       |
| 64KB | 16.5 MB/s     | 807.4 MB/s           | 539.4 MB/s      |
| 1MB  | 16.6 MB/s     | 835.1 MB/s           | 679.8 MB/s      |
| 10MB | 16.7 MB/s     | 840.1 MB/s           | 16.5 MB/s       |

## SHA-512 (HMAC)

> **Note:** WebCrypto (`crypto.subtle`) was benchmarked from Node.js and may be significantly faster in a browser.

| Size | Sha512Js (JS) | Sha512 (node:crypto) | Sha512WebCrypto |
| ---- | ------------- | -------------------- | --------------- |
| 32B  | 1.1 MB/s      | 1.6 MB/s             | 973.5 KB/s      |
| 256B | 6.5 MB/s      | 12.9 MB/s            | 7.4 MB/s        |
| 1KB  | 13.9 MB/s     | 51.2 MB/s            | 27.9 MB/s       |
| 64KB | 16.4 MB/s     | 672.1 MB/s           | 496.8 MB/s      |
| 1MB  | 16.6 MB/s     | 823.1 MB/s           | 681.0 MB/s      |
| 10MB | 16.7 MB/s     | 836.4 MB/s           | 16.5 MB/s       |

## MD5

| Size | Md5Js (JS) | Md5Node (node:crypto) |
| ---- | ---------- | --------------------- |
| 32B  | 16.7 MB/s  | 19.5 MB/s             |
| 256B | 60.8 MB/s  | 155.9 MB/s            |
| 1KB  | 100.1 MB/s | 366.6 MB/s            |
| 64KB | 142.3 MB/s | 758.7 MB/s            |
| 1MB  | 143.4 MB/s | 776.1 MB/s            |
| 10MB | 141.4 MB/s | 777.0 MB/s            |

## XXH64

| Size | Xxh64 (JS) |
| ---- | ---------- |
| 32B  | 30.4 MB/s  |
| 256B | 111.9 MB/s |
| 1KB  | 180.8 MB/s |
| 64KB | 214.3 MB/s |
| 1MB  | 214.4 MB/s |
| 10MB | 215.7 MB/s |

## XXH3_64

| Size | Xxh3_64 (JS) |
| ---- | ------------ |
| 32B  | 8.4 MB/s     |
| 256B | 52.2 MB/s    |
| 1KB  | 155.7 MB/s   |
| 64KB | 247.1 MB/s   |
| 1MB  | 239.7 MB/s   |
| 10MB | 231.8 MB/s   |

## XXH3_128

| Size | Xxh3_128 (JS) |
| ---- | ------------- |
| 32B  | 6.9 MB/s      |
| 256B | 38.7 MB/s     |
| 1KB  | 119.4 MB/s    |
| 64KB | 247.7 MB/s    |
| 1MB  | 239.8 MB/s    |
| 10MB | 231.6 MB/s    |
