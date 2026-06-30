# @aws-sdk/checksums Benchmarks

Platform: Node.js v22.22.2 (linux x64)
Date: 2026-06-25T18:37:30.293Z
Iterations per size: [10000, 5000, 2000, 200, 20, 5], Warmup: 1s per algo

## CRC-32

| Size | Crc32Js (JS) | Crc32Node (node:zlib) | @aws-crypto/crc32 |
| ---- | ------------ | --------------------- | ----------------- |
| 32B  | 31.0 MB/s    | 34.8 MB/s             | 28.0 MB/s         |
| 256B | 99.1 MB/s    | 296.1 MB/s            | 80.6 MB/s         |
| 1KB  | 115.7 MB/s   | 1.19 GB/s             | 95.1 MB/s         |
| 64KB | 121.1 MB/s   | 4.55 GB/s             | 100.8 MB/s        |
| 1MB  | 121.2 MB/s   | 4.76 GB/s             | 92.3 MB/s         |
| 10MB | 121.3 MB/s   | 4.75 GB/s             | 97.6 MB/s         |

## CRC-32C

| Size | Crc32cJs (JS) | @aws-crypto/crc32c |
| ---- | ------------- | ------------------ |
| 32B  | 89.2 MB/s     | 27.9 MB/s          |
| 256B | 353.9 MB/s    | 83.2 MB/s          |
| 1KB  | 422.1 MB/s    | 96.1 MB/s          |
| 64KB | 438.3 MB/s    | 102.0 MB/s         |
| 1MB  | 438.0 MB/s    | 99.9 MB/s          |
| 10MB | 438.0 MB/s    | 101.1 MB/s         |

## CRC-64/NVME

| Size | Crc64NvmeJs (JS) | Crc64Nvme (auto CRT) |
| ---- | ---------------- | -------------------- |
| 32B  | 58.4 MB/s        | 20.6 MB/s            |
| 256B | 259.8 MB/s       | 141.4 MB/s           |
| 1KB  | 380.0 MB/s       | 394.0 MB/s           |
| 64KB | 422.8 MB/s       | 1.76 GB/s            |
| 1MB  | 423.9 MB/s       | 1.83 GB/s            |
| 10MB | 424.0 MB/s       | 1.83 GB/s            |

## SHA-1 (hash)

> **Note:** WebCrypto (`crypto.subtle`) was benchmarked from Node.js and may be significantly faster in a browser.

| Size | Sha1Js (JS) | Sha1Node (node:crypto) | Sha1WebCrypto |
| ---- | ----------- | ---------------------- | ------------- |
| 32B  | 8.9 MB/s    | 11.3 MB/s              | 1.5 MB/s      |
| 256B | 64.6 MB/s   | 91.0 MB/s              | 11.2 MB/s     |
| 1KB  | 140.7 MB/s  | 344.8 MB/s             | 40.1 MB/s     |
| 64KB | 192.0 MB/s  | 1.72 GB/s              | 621.7 MB/s    |
| 1MB  | 195.0 MB/s  | 1.80 GB/s              | 991.7 MB/s    |
| 10MB | 194.9 MB/s  | 1.81 GB/s              | 183.1 MB/s    |

## SHA-1 (HMAC)

> **Note:** WebCrypto (`crypto.subtle`) was benchmarked from Node.js and may be significantly faster in a browser.

| Size | Sha1Js (JS) | Sha1Node (node:crypto) | Sha1WebCrypto |
| ---- | ----------- | ---------------------- | ------------- |
| 32B  | 4.0 MB/s    | 9.9 MB/s               | 1018.0 KB/s   |
| 256B | 31.7 MB/s   | 58.4 MB/s              | 7.8 MB/s      |
| 1KB  | 97.1 MB/s   | 218.3 MB/s             | 30.4 MB/s     |
| 64KB | 190.9 MB/s  | 1.71 GB/s              | 531.9 MB/s    |
| 1MB  | 194.8 MB/s  | 1.79 GB/s              | 814.6 MB/s    |
| 10MB | 194.3 MB/s  | 1.81 GB/s              | 187.7 MB/s    |

## SHA-256 (hash)

> **Note:** WebCrypto (`crypto.subtle`) was benchmarked from Node.js and may be significantly faster in a browser.

| Size | Sha256Js (JS) | Sha256Node (node:crypto) | Sha256WebCrypto | @aws-crypto/sha256-js |
| ---- | ------------- | ------------------------ | --------------- | --------------------- |
| 32B  | 13.4 MB/s     | 10.8 MB/s                | 1.5 MB/s        | 8.1 MB/s              |
| 256B | 51.1 MB/s     | 132.7 MB/s               | 10.7 MB/s       | 33.0 MB/s             |
| 1KB  | 99.7 MB/s     | 215.1 MB/s               | 40.1 MB/s       | 75.9 MB/s             |
| 64KB | 122.0 MB/s    | 1.61 GB/s                | 850.0 MB/s      | 99.7 MB/s             |
| 1MB  | 122.5 MB/s    | 1.69 GB/s                | 1.15 GB/s       | 100.5 MB/s            |
| 10MB | 122.6 MB/s    | 1.70 GB/s                | 118.1 MB/s      | 100.5 MB/s            |

## SHA-256 (HMAC)

> **Note:** WebCrypto (`crypto.subtle`) was benchmarked from Node.js and may be significantly faster in a browser.

| Size | Sha256Js (JS) | Sha256Node (node:crypto) | Sha256WebCrypto | @aws-crypto/sha256-js |
| ---- | ------------- | ------------------------ | --------------- | --------------------- |
| 32B  | 4.0 MB/s      | 13.5 MB/s                | 1.0 MB/s        | 3.6 MB/s              |
| 256B | 20.1 MB/s     | 89.7 MB/s                | 8.0 MB/s        | 24.2 MB/s             |
| 1KB  | 76.4 MB/s     | 269.3 MB/s               | 29.6 MB/s       | 65.1 MB/s             |
| 64KB | 121.0 MB/s    | 1.58 GB/s                | 742.2 MB/s      | 99.5 MB/s             |
| 1MB  | 122.4 MB/s    | 1.69 GB/s                | 997.1 MB/s      | 100.4 MB/s            |
| 10MB | 122.6 MB/s    | 1.70 GB/s                | 117.9 MB/s      | 100.4 MB/s            |

## MD5

| Size | Md5Js (JS) | Md5Node (node:crypto) |
| ---- | ---------- | --------------------- |
| 32B  | 12.5 MB/s  | 17.8 MB/s             |
| 256B | 50.4 MB/s  | 112.3 MB/s            |
| 1KB  | 113.8 MB/s | 363.7 MB/s            |
| 64KB | 142.6 MB/s | 761.1 MB/s            |
| 1MB  | 144.3 MB/s | 776.2 MB/s            |
| 10MB | 144.1 MB/s | 777.6 MB/s            |
