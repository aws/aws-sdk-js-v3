import type { AwsSdkFeatures } from "@aws-sdk/types";

const BYTE_LIMIT = 1024;

/**
 * @internal
 */
export function encodeFeatures(features: AwsSdkFeatures): string {
  let buffer = "";

  // currently all possible values are 1 byte,
  // so string length is used.

  for (const key in features) {
    const val = features[key as keyof typeof features]!;
    if (buffer.length + val!.length + 1 <= BYTE_LIMIT) {
      if (buffer.length) {
        buffer += "," + val;
      } else {
        buffer += val;
      }
      continue;
    }
    break;
  }

  return buffer;
}
