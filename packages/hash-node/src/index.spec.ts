import { Hash } from "./";
import { fromString, fromArrayBuffer } from "@aws-sdk/util-buffer-from";
const hashVectors = require("hash-test-vectors");
const hmacVectors = require("hash-test-vectors/hmac");

describe("Hash", () => {
  for (const supportedHash of ["md5", "sha256"]) {
    describe(`${supportedHash} test vectors`, () => {
      for (const { input, ...results } of hashVectors) {
        const expected = results[supportedHash];
        it(`should calculate a ${supportedHash} hash of ${expected} for an input of ${input}`, async () => {
          const hash = new Hash(supportedHash);
          hash.update(fromString(input, "base64"));
          const { buffer } = await hash.digest();
          expect(fromArrayBuffer(buffer).toString("hex")).toBe(expected);
        });
      }

      for (const { key, data, ...results } of hmacVectors) {
        const expected = results[supportedHash];
        it(`should calculate a ${supportedHash} hmac of ${expected} for an input of ${data} and a key of ${key}`, async () => {
          const hash = new Hash(supportedHash, fromString(key, "hex"));
          hash.update(fromString(data, "hex"));
          const { buffer } = await hash.digest();
          expect(fromArrayBuffer(buffer).toString("hex")).toMatch(expected);
        });
      }
    });
  }

  it("should accept string data", async () => {
    const hash = new Hash("md5");
    hash.update("");
    const { buffer } = await hash.digest();
    expect(fromArrayBuffer(buffer).toString("hex")).toBe("d41d8cd98f00b204e9800998ecf8427e");
  });

  it("should accept ArrayBuffer data", async () => {
    const hash = new Hash("md5");
    hash.update(new ArrayBuffer(0));
    const { buffer } = await hash.digest();
    expect(fromArrayBuffer(buffer).toString("hex")).toBe("d41d8cd98f00b204e9800998ecf8427e");
  });

  it("should accept ArrayBufferView data", async () => {
    const hash = new Hash("md5");
    hash.update(new Uint8Array(0));
    const { buffer } = await hash.digest();
    expect(fromArrayBuffer(buffer).toString("hex")).toBe("d41d8cd98f00b204e9800998ecf8427e");
  });
});
