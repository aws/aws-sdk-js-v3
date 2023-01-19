import { Checksum, Hash } from "@aws-sdk/types";
import { toUint8Array } from "@aws-sdk/util-utf8";
import { Writable, WritableOptions } from "stream";

export class HashCalculator extends Writable {
  constructor(public readonly hash: Checksum | Hash, options?: WritableOptions) {
    super(options);
  }

  _write(chunk: Buffer, encoding: string, callback: (err?: Error) => void) {
    try {
      this.hash.update(toUint8Array(chunk));
    } catch (err) {
      return callback(err);
    }
    callback();
  }
}
