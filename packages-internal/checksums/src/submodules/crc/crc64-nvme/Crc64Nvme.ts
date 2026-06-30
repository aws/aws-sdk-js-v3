import type { Checksum } from "@smithy/types";

import { crc64NvmeCrtContainer } from "./crc64-nvme-crt-container";
import { Crc64NvmeJs } from "./Crc64NvmeJs";

/**
 * CRC-64/NVME checksum. Uses the CRT native implementation if loaded,
 * otherwise falls back to the pure JS implementation.
 *
 * @example
 * ```typescript
 * const checksum = new Crc64Nvme();
 * checksum.update(new Uint8Array([1, 2, 3]));
 * const result = await checksum.digest();
 * ```
 *
 * @public
 */
export class Crc64Nvme implements Checksum {
  private impl: Checksum;

  constructor() {
    const Crt = crc64NvmeCrtContainer.CrtCrc64Nvme;
    this.impl = Crt ? new Crt() : new Crc64NvmeJs();
  }

  update(data: Uint8Array): void {
    this.impl.update(data);
  }

  async digest(): Promise<Uint8Array> {
    return this.impl.digest();
  }

  reset(): void {
    this.impl.reset();
  }
}
