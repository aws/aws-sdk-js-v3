import { checksums } from "@aws-sdk/crt-loader";
import { Checksum } from "@smithy/types";
import { toUint8Array } from "@smithy/util-utf8";

export class CrtCrc64Nvme implements Checksum {
  private checksum: DataView = new DataView(new ArrayBuffer(8));

  update(data: Uint8Array) {
    this.checksum = checksums.crc64nvme(data, this.checksum);
  }

  async digest() {
    return toUint8Array(this.checksum);
  }

  reset() {
    this.checksum = new DataView(new ArrayBuffer(8));
  }
}
