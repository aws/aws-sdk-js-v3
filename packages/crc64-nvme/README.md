# @aws-sdk/crc64-nvme

[![NPM version](https://img.shields.io/npm/v/@aws-sdk/crc64-nvme/latest.svg)](https://www.npmjs.com/package/@aws-sdk/crc64-nvme)
[![NPM downloads](https://img.shields.io/npm/dm/@aws-sdk/crc64-nvme.svg)](https://www.npmjs.com/package/@aws-sdk/crc64-nvme)

JavaScript Implementation of CRC64NVME which follows Smithy Checksum interface.

## Usage

### Basic Usage

```javascript
import { Crc64Nvme } from "@aws-sdk/crc64-nvme";

const checksum = new Crc64Nvme();
checksum.update(new Uint8Array([1, 2, 3, 4, 5]));
const result = await checksum.digest();
console.log(result); // Uint8Array(8) containing the checksum
```

### String Input

```javascript
import { Crc64Nvme } from "@aws-sdk/crc64-nvme";

const checksum = new Crc64Nvme();
const data = new TextEncoder().encode("Hello, World!");
checksum.update(data);
const result = await checksum.digest();
```

### Incremental Updates

```javascript
import { Crc64Nvme } from "@aws-sdk/crc64-nvme";

const checksum = new Crc64Nvme();

// Process data in chunks
checksum.update(new TextEncoder().encode("Hello, "));
checksum.update(new TextEncoder().encode("World!"));

const result = await checksum.digest();
```

### Reset and Reuse

```javascript
import { Crc64Nvme } from "@aws-sdk/crc64-nvme";

const checksum = new Crc64Nvme();

// First calculation
checksum.update(new TextEncoder().encode("data1"));
const result1 = await checksum.digest();

// Reset for new calculation
checksum.reset();
checksum.update(new TextEncoder().encode("data2"));
const result2 = await checksum.digest();
```
