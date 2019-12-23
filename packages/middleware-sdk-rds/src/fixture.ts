import { SourceData } from "@aws-sdk/types";

export class MockSha256 {
  constructor(secret?: string | ArrayBuffer | ArrayBufferView) {}
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
    hostname: "ec2.mock-region.amazonaws.com"
  });

export const credentials = () =>
  Promise.resolve({
    accessKeyId: "akid",
    secretAccessKey: "secret",
    sessionToken: "session"
  });
