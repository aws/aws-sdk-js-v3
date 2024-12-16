import { toBase64 } from "@smithy/util-base64";
import { describe, expect, it } from "vitest";

import { CrtCrc64Nvme } from "./CrtCrc64Nvme";

describe(CrtCrc64Nvme.name, () => {
  it("should throw an error if digest is called before update", async () => {
    const crc64 = new CrtCrc64Nvme();
    await expect(crc64.digest()).rejects.toThrowError("No data provided to checksum");
  });

  it.each([
    ["", "AAAAAAAAAAA="],
    ["abc", "BeXKuz/B+us="],
    ["Hello world", "OOJZ0D8xKts="],
  ])(`crc64-nvme for "%s" is "%s"`, async (input, output) => {
    const crc64 = new CrtCrc64Nvme();
    crc64.update(new TextEncoder().encode(input));
    const digest = await crc64.digest();
    expect(toBase64(digest)).toEqual(output);
  });
});
