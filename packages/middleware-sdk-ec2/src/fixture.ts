import { SourceData } from "@aws-sdk/types";

export class MockSha256 {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(secret?: string | ArrayBuffer | ArrayBufferView) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(data?: SourceData) {}
  digest() {
    return Promise.resolve(new Uint8Array(5));
  }
}

export const region = () => Promise.resolve("mock-region");

export const endpoint = () =>
  Promise.resolve({
    protocol: "https:",
    path: "/",
    hostname: "ec2.mock-region.amazonaws.com",
  });

export const credentials = () =>
  Promise.resolve({
    accessKeyId: "akid",
    secretAccessKey: "secret",
    sessionToken: "session",
  });
