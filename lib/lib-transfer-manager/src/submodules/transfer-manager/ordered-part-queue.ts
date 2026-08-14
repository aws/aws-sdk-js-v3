/**
 * Ordered delivery queue for stream downloads using ArrayBuffer ownership transfer.
 *
 * Workers download parts in parallel and transfer ArrayBuffers (zero copy) to main in
 * arbitrary order. This queue holds out-of-order arrivals and delivers them
 * sequentially to the Readable stream consumer.
 *
 * @internal
 */

export interface QueuedPart {
  /**
   * The transferred ArrayBuffer containing the part data.
   */
  buffer: ArrayBuffer;
  /**
   * Actual bytes written (may be less than buffer.byteLength for the last part).
   */
  byteLength: number;
}

export class OrderedPartQueue {
  /**
   * Out-of-order parts waiting for their turn. Keyed by rangeIndex.
   */
  private pending = new Map<number, QueuedPart>();

  /**
   * Next sequential rangeIndex the consumer expects.
   */
  private nextExpected = 0;

  /**
   * Total number of parts to deliver.
   */
  private readonly totalParts: number;

  /**
   * Resolve callback for the consumer waiting for the next part.
   */
  private waitingConsumer: ((value: QueuedPart | null) => void) | null = null;

  /**
   * Error from a failed download.
   */
  private error: unknown = undefined;

  constructor(totalParts: number) {
    this.totalParts = totalParts;
  }

  /**
   * Called when a worker delivers a part (may arrive out of order).
   * If the consumer is waiting for this exact part, delivers immediately.
   * Otherwise stores it until its turn.
   */
  public enqueue(rangeIndex: number, buffer: ArrayBuffer, byteLength: number): void {
    if (this.error) return;

    if (rangeIndex === this.nextExpected && this.waitingConsumer) {
      // Consumer is already waiting for this exact part — deliver immediately
      const consumer = this.waitingConsumer;
      this.waitingConsumer = null;
      this.nextExpected++;
      consumer({ buffer, byteLength });
    } else {
      // Out of order — hold until it's this part's turn
      this.pending.set(rangeIndex, { buffer, byteLength });
    }
  }

  /**
   * Called by the Readable stream's read() to get the next sequential part.
   * Returns null when all parts have been consumed.
   * Waits asynchronously if the next part hasn't arrived yet.
   */
  public async dequeue(): Promise<QueuedPart | null> {
    if (this.error) {
      throw this.error;
    }

    if (this.nextExpected >= this.totalParts) {
      return null; // All parts consumed
    }

    // Check if the next expected part already arrived out of order
    const ready = this.pending.get(this.nextExpected);
    if (ready) {
      this.pending.delete(this.nextExpected);
      this.nextExpected++;
      return ready;
    }

    // Wait for it to arrive
    return new Promise<QueuedPart | null>((resolve) => {
      this.waitingConsumer = resolve;
    });
  }

  /**
   * Signals an error, waking up any waiting consumer.
   */
  public setError(error: unknown): void {
    this.error = error;

    if (this.waitingConsumer) {
      const consumer = this.waitingConsumer;
      this.waitingConsumer = null;
      consumer(null);
    }
  }

  /**
   * Returns whether an error has been set.
   */
  public hasError(): boolean {
    return this.error !== undefined;
  }

  /**
   * Returns the stored error, if any.
   */
  public getError(): unknown {
    return this.error;
  }

  /**
   * Returns the number of parts currently held (arrived but not yet delivered).
   * Useful for monitoring reorder buffer depth.
   */
  public get pendingCount(): number {
    return this.pending.size;
  }
}
