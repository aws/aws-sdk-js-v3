import { AwsCrc32 } from "@aws-crypto/crc32";
import { numToUint8 } from "@aws-crypto/util";
import { Checksum } from "@smithy/types";
import * as zlib from "zlib";

class NodeCrc32 implements Checksum {
  private checksum = 0;

  update(data: Uint8Array) {
    // @ts-ignore
    this.checksum = zlib.crc32(data, this.checksum);
  }

  async digest(): Promise<Uint8Array> {
    return numToUint8(this.checksum);
  }

  reset() {
    this.checksum = 0;
  }
}

export const getCrc32ChecksumAlgorithmFunction = () => {
  // @ts-ignore
  if (typeof zlib.crc32 === "undefined") {
    return AwsCrc32;
  }

  return NodeCrc32;
};
