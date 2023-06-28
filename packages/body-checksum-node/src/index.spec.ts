import { Sha256 } from "@aws-crypto/sha256-js";
import { HttpRequest } from "@smithy/protocol-http";
import { fromUtf8 } from "@smithy/util-utf8";
import { createReadStream, mkdtempSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { Readable } from "stream";

import { bodyChecksumGenerator } from ".";

function createTemporaryFile(contents: string | Buffer): string {
  const folder = mkdtempSync(join(tmpdir(), "add-glacier-checksum-headers-node-"));
  const fileLoc = join(folder, "test.txt");
  writeFileSync(fileLoc, contents);

  return fileLoc;
}

describe("bodyChecksumGenerator for node", () => {
  const sharedRequest = {
    method: "POST",
    protocol: "https:",
    path: "/",
    headers: {},
    hostname: "foo.us-east-1.amazonaws.com",
  };
  const options = {
    sha256: Sha256,
    utf8Decoder: fromUtf8,
  };

  it("will calculate sha256 hashes when request body is Uint8Array", async () => {
    const body = new Uint8Array(5767168); // 5.5 MiB
    body.fill(0);

    const request = new HttpRequest({
      ...sharedRequest,
      body,
    });

    const [contentHash, treeHash] = await bodyChecksumGenerator(request, options);

    expect(contentHash).toBe("733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60");
    expect(treeHash).toBe("a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455");
  });

  it("will calculate sha256 hashes when request body is a string", async () => {
    const request = new HttpRequest({
      ...sharedRequest,
      body: "bar",
    });

    const [contentHash, treeHash] = await bodyChecksumGenerator(request, options);

    expect(contentHash).toBe("fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9");
    expect(treeHash).toBe("fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9");
  });

  it("will calculate sha256 hashes when request body is a file stream", async () => {
    const temporaryFile = createTemporaryFile(Buffer.alloc(5767168, 0));
    const request = new HttpRequest({
      ...sharedRequest,
      body: createReadStream(temporaryFile),
    });

    const [contentHash, treeHash] = await bodyChecksumGenerator(request, options);

    expect(contentHash).toBe("733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60");
    expect(treeHash).toBe("a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455");
  });

  it("will reject when request body is a non-file stream", async () => {
    const request = new HttpRequest({
      ...sharedRequest,
      body: new Readable(),
    });

    try {
      await bodyChecksumGenerator(request, options);
    } catch (e) {
      expect(e).toEqual(new Error("Unable to calculate checksums for non-file streams."));
    }
  });
});
