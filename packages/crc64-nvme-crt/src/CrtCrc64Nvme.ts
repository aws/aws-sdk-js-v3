import { checksums } from "@aws-sdk/crt-loader";
import { Checksum } from "@smithy/types";
import { toUint8Array } from "@smithy/util-utf8";

export class CrtCrc64Nvme implements Checksum {
  private previous: DataView | undefined;

  update(chunk: Uint8Array) {
    this.previous = checksums.crc64nvme(chunk, this.previous);
  }

  async digest() {
    if (!this.previous) {
      throw new Error("No data provided to checksum");
    }
    return toUint8Array(this.previous);
  }

  reset() {
    this.previous = undefined;
  }
}
