import type { Checksum } from "@smithy/types";

/**
 * @internal
 */
export class ChecksumSha512 implements Checksum {
  public digestLength?: number;
  public reset(): void {
    throw new Error("Method not implemented.");
  }
  public digest(): Promise<Uint8Array> {
    throw new Error("Method not implemented.");
  }
  public update(chunk: Uint8Array): void {
    throw new Error("Method not implemented.");
  }
}
