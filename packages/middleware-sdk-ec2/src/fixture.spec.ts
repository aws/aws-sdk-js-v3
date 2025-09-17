import { SourceData } from "@smithy/types";
import { describe, test as it } from "vitest";

export class MockSha256 {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(secret?: string | ArrayBuffer | ArrayBufferView) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(data?: SourceData) {}

  digest(): Promise<Uint8Array> {
    return Promise.resolve(new Uint8Array(5));
  }
}

export const region = () => Promise.resolve("mock-region");

export const credentials = () =>
  Promise.resolve({
    accessKeyId: "akid",
    secretAccessKey: "secret",
    sessionToken: "session",
  });

describe("placeholder", () => {
  it("placeholder for exports of testing constructs", () => {});
});
