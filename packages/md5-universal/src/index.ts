import { Md5 as BrowserMd5 } from "@aws-sdk/md5-js";
import { Hash as NodeHash } from "@aws-sdk/hash-node";
import { Hash, SourceData } from "@aws-sdk/types";

export class Md5 implements Hash {
  private readonly hash: Hash;

  constructor() {
    if (supportsCryptoModule()) {
      this.hash = new NodeHash("md5");
    } else {
      this.hash = new BrowserMd5();
    }
  }

  update(data: SourceData, encoding?: "utf8" | "ascii" | "latin1"): void {
    this.hash.update(data, encoding);
  }

  digest(): Promise<Uint8Array> {
    return this.hash.digest();
  }
}

function supportsCryptoModule(): boolean {
  try {
    require("crypto");
    return true;
  } catch {
    return false;
  }
}
