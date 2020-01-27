import { createReadStream, mkdtempSync, writeFileSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { Readable } from "stream";
import { Sha256 } from "@aws-crypto/sha256-js";
import { toHex } from "@aws-sdk/util-hex-encoding";
import { fileStreamHasher } from "./index";

function createTemporaryFile(contents: string): string {
  const folder = mkdtempSync(join(tmpdir(), "sha256-stream-node-"));
  const fileLoc = join(folder, "test.txt");
  writeFileSync(fileLoc, contents);

  return fileLoc;
}

describe("fileStreamHasher", () => {
  const temporaryFile = createTemporaryFile(
    "Shot through the bar, but you're too late bizzbuzz you give foo, a bad name."
  );

  it("calculates the SHA256 hash of a stream", async () => {
    const result = await fileStreamHasher(
      Sha256,
      createReadStream(temporaryFile)
    );

    expect(result instanceof Uint8Array).toBe(true);
    expect(toHex(result)).toBe(
      "24dabf4db3774a3224d571d4c089a9c570c3045dbe1e67ee9ee2e2677f57dbe0"
    );
  });

  it("does not exhaust the input stream", async () => {
    const inputStream = createReadStream(temporaryFile);

    const onSpy = jest.spyOn(inputStream, "on");
    const pipeSpy = jest.spyOn(inputStream, "pipe");

    const result = await fileStreamHasher(Sha256, inputStream);

    expect(result instanceof Uint8Array).toBe(true);
    expect(toHex(result)).toBe(
      "24dabf4db3774a3224d571d4c089a9c570c3045dbe1e67ee9ee2e2677f57dbe0"
    );
    expect(onSpy.mock.calls.length).toBe(0);
    expect(pipeSpy.mock.calls.length).toBe(0);
  });

  it("throws an error when a non-file stream is encountered", async () => {
    const inputStream = new Readable();

    await expect(
      fileStreamHasher(Sha256, inputStream as any)
    ).rejects.toHaveProperty("message");
  });
});
