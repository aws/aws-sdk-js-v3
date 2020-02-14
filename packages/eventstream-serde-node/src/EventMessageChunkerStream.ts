import { Transform, TransformOptions, TransformCallback } from "stream";

export class EventMessageChunkerStream extends Transform {
  private currentMessageTotalLength: number;
  private currentMessagePendingLength: number;
  private currentMessage: Buffer | null;
  private messageLengthBuffer: Buffer | null;

  constructor(options: TransformOptions = {}) {
    super({
      readableObjectMode: true,
      ...options
    });
    this.currentMessageTotalLength = 0;
    this.currentMessagePendingLength = 0;
    this.currentMessage = null;
    this.messageLengthBuffer = null;
    //TODO: use 'autoDestroy' when targeting Node 11
    //reference: https://nodejs.org/dist/latest-v13.x/docs/api/stream.html#stream_new_stream_readable_options
    this.on("error", () => {
      this.destroy();
    });
    this.on("end", () => {
      this.destroy();
    });
  }

  _transform(chunk: any, encoding: string, callback: TransformCallback): void {
    const chunkLength = chunk.length;
    let currentOffset = 0;

    while (currentOffset < chunkLength) {
      // create new message if necessary
      if (!this.currentMessage) {
        // working on a new message, determine total length
        const bytesRemaining = chunkLength - currentOffset;
        // prevent edge case where total length spans 2 chunks
        if (!this.messageLengthBuffer) {
          this.messageLengthBuffer = Buffer.alloc(4);
        }
        const numBytesForTotal = Math.min(
          4 - this.currentMessagePendingLength, // remaining bytes to fill the messageLengthBuffer
          bytesRemaining // bytes left in chunk
        );

        chunk.copy(
          this.messageLengthBuffer,
          this.currentMessagePendingLength,
          currentOffset,
          currentOffset + numBytesForTotal
        );

        this.currentMessagePendingLength += numBytesForTotal;
        currentOffset += numBytesForTotal;

        if (this.currentMessagePendingLength < 4) {
          // not enough information to create the current message
          break;
        }
        this.allocateMessage(this.messageLengthBuffer.readUInt32BE(0));
        this.messageLengthBuffer = null;
      }

      // write data into current message
      const numBytesToWrite = Math.min(
        this.currentMessageTotalLength - this.currentMessagePendingLength, // number of bytes left to complete message
        chunkLength - currentOffset // number of bytes left in the original chunk
      );
      chunk.copy(
        this.currentMessage, // target buffer
        this.currentMessagePendingLength, // target offset
        currentOffset, // chunk offset
        currentOffset + numBytesToWrite // chunk end to write
      );
      this.currentMessagePendingLength += numBytesToWrite;
      currentOffset += numBytesToWrite;

      // check if a message is ready to be pushed
      if (
        this.currentMessageTotalLength &&
        this.currentMessageTotalLength === this.currentMessagePendingLength
      ) {
        // push out the message
        this.push(this.currentMessage);
        // cleanup
        this.currentMessage = null;
        this.currentMessageTotalLength = 0;
        this.currentMessagePendingLength = 0;
      }
    }

    callback();
  }

  _flush(callback: TransformCallback): void {
    if (this.currentMessageTotalLength) {
      if (this.currentMessageTotalLength === this.currentMessagePendingLength) {
        callback(undefined, this.currentMessage);
      } else {
        callback(new Error("Truncated event message received."));
      }
    } else {
      callback();
    }
  }

  private allocateMessage(size: number) {
    if (typeof size !== "number") {
      throw new Error(
        "Attempted to allocate an event message where size was not a number: " +
          size
      );
    }
    this.currentMessageTotalLength = size;
    this.currentMessagePendingLength = 4;
    this.currentMessage = Buffer.alloc(size);
    this.currentMessage!.writeUInt32BE(size, 0);
  }
}
