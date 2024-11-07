import { AwsCrc32 } from "@aws-crypto/crc32";
import { numToUint8 } from "@aws-crypto/util";
import { Checksum } from "@smithy/types";
import zlib from "zlib";

export const getCrc32ChecksumAlgorithmFunction = () => {
  // @ts-expect-error crc32 is defined only for Node.js >=v20.15.0 and >=v22.2.0.
  if (typeof zlib.crc32 === "undefined") {
    return AwsCrc32;
  }

  return class NodeCrc32 implements Checksum {
    private checksum = 0;

    update(data: Uint8Array) {
      // @ts-expect-error crc32 is defined only for Node.js >=v20.15.0 and >=v22.2.0.
      this.checksum = zlib.crc32(data, this.checksum);
    }

    async digest() {
      return numToUint8(this.checksum);
    }

    reset() {
      this.checksum = 0;
    }
  };
};
