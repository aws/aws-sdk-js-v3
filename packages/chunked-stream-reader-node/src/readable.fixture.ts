import { Readable, ReadableOptions } from "stream";

/**
 * @internal
 */
export interface ReadFromBuffersOptions extends ReadableOptions {
  buffers: Buffer[];
  errorAfter?: number;
}

/**
 * @internal
 */
export class ReadFromBuffers extends Readable {
  private buffersToRead: Buffer[];
  private numBuffersRead = 0;

  private errorAfter: number;
  constructor(options: ReadFromBuffersOptions) {
    super(options);
    this.buffersToRead = options.buffers;
    this.errorAfter = typeof options.errorAfter === "number" ? options.errorAfter : -1;
  }

  _read() {
    if (this.errorAfter !== -1 && this.errorAfter === this.numBuffersRead) {
      this.emit("error", new Error("Mock Error"));
      return;
    }
    if (this.numBuffersRead >= this.buffersToRead.length) {
      return this.push(null);
    }
    return this.push(this.buffersToRead[this.numBuffersRead++]);
  }
}
