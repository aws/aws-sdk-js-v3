import type { Checksum } from "@smithy/types";

import { Crc32cJs } from "./Crc32cJs";

/**
 * CRC-32C (Castagnoli). No native Node.js implementation exists,
 * so this is equivalent to the pure JS version.
 * @public
 */
export interface Crc32cNode extends Checksum {
  readonly digestLength: 4;
}

/**
 * @public
 */
export const Crc32cNode: new () => Crc32cNode = Crc32cJs;
