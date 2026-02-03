import { Checksum, ChecksumConstructor, Decoder, HashConstructor, SourceData } from "@smithy/types";

const MiB = 1048576;

/**
 * @internal
 *
 * A Hash that will calculate a Sha256 tree hash.
 */
export class TreeHash implements Checksum {
  private buffer?: Uint8Array;
  private collectedHashDigests: Promise<Uint8Array>[] = [];

  /**
   * Initializes a TreeHash.
   * @param Sha256 A Sha256 hash constructor.
   */
  constructor(private readonly Sha256: ChecksumConstructor | HashConstructor, private readonly fromUtf8: Decoder) {}

  /**
   * Generates Sha256 hashes from 1 MiB chunks of the
   * internal buffer.
   * Will set the internal buffer to any bytes remaining
   * that is less than 1 MiB.
   */
  private hashBuffer() {
    if (!this.buffer) {
      return;
    }

    let remainingSize = this.buffer.byteLength;
    while (remainingSize >= MiB) {
      const hash = new this.Sha256();
      hash.update(this.buffer.subarray(0, MiB));
      this.collectedHashDigests.push(hash.digest());

      this.buffer = this.buffer.subarray(MiB);
      remainingSize = this.buffer.byteLength;
    }
  }

  /**
   * Updates the tree hash with byte data.
   * @param data Byte data to apply to the tree hash.
   */
  public update(data: SourceData) {
    const chunk = this.convertToBuffer(data);
    if (!this.buffer) {
      this.buffer = chunk;
    } else {
      // determine size of both pieces
      const totalSize = this.buffer.byteLength + chunk.byteLength;
      const tempBuffer = new Uint8Array(totalSize);

      tempBuffer.set(this.buffer);
      tempBuffer.set(chunk, this.buffer.byteLength);
      this.buffer = tempBuffer;
    }

    // hasBuffer will set this.buffer with remaining data
    this.hashBuffer();
  }

  /**
   * Calculates the digest for the tree hash.
   */
  public async digest(): Promise<Uint8Array> {
    let collectedHashDigests = this.collectedHashDigests;
    // remove the reference to collected hashes to free up space
    this.collectedHashDigests = [];

    // loop through collected hashes
    if (this.buffer && this.buffer.byteLength > 0) {
      const smallHash = new this.Sha256();
      smallHash.update(this.buffer);
      collectedHashDigests.push(smallHash.digest());
      // remove the remaining buffer
      this.buffer = void 0;
    }

    while (collectedHashDigests.length > 1) {
      const higherLevelHashDigests: Promise<Uint8Array>[] = [];
      for (let i = 0; i < collectedHashDigests.length; i += 2) {
        if (i + 1 < collectedHashDigests.length) {
          // concatenate the pair of hashes
          const [digest1, digest2] = await Promise.all([collectedHashDigests[i], collectedHashDigests[i + 1]]);

          const chunk = new Uint8Array(digest1.byteLength + digest2.byteLength);
          chunk.set(digest1);
          chunk.set(digest2, digest1.byteLength);

          const hash = new this.Sha256();
          hash.update(chunk);
          higherLevelHashDigests.push(hash.digest());
        } else {
          // move a lone hash up a level
          higherLevelHashDigests.push(collectedHashDigests[i]);
        }
      }
      collectedHashDigests = higherLevelHashDigests;
    }

    return collectedHashDigests[0];
  }

  /**
   * Converts source data into a Uint8Array.
   * @param data Data to convert to a Uint8Array.
   */
  private convertToBuffer(data: SourceData): Uint8Array {
    if (typeof data === "string") {
      return this.fromUtf8(data);
    }

    if (ArrayBuffer.isView(data)) {
      return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }

    return new Uint8Array(data);
  }

  reset() {
    this.buffer = undefined;
    this.collectedHashDigests = [];
  }
}
