import { describe, expect, test as it } from "vitest";

import { ChecksumAlgorithm } from "./constants";
import { getChecksumLocationName } from "./getChecksumLocationName";

describe(getChecksumLocationName.name, () => {
  it.each([
    ["content-md5", ChecksumAlgorithm.MD5],
    ["x-amz-checksum-crc32", ChecksumAlgorithm.CRC32],
    ["x-amz-checksum-crc32c", ChecksumAlgorithm.CRC32C],
    ["x-amz-checksum-sha1", ChecksumAlgorithm.SHA1],
    ["x-amz-checksum-sha256", ChecksumAlgorithm.SHA256],
  ])("returns %s for %s", (output, input) => {
    expect(getChecksumLocationName(input)).toEqual(output);
  });
});
