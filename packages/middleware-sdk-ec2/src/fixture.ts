export class MockSha256 {
  constructor() {}
  update() {}
  digest(): Promise<Uint8Array> {
    return Promise.resolve(new Uint8Array(5));
  }
}

export const region = (): Promise<string> => Promise.resolve("mock-region");

export const endpoint = (): Promise<{
  protocol: string;
  path: string;
  hostname: string;
}> =>
  Promise.resolve({
    protocol: "https:",
    path: "/",
    hostname: "ec2.mock-region.amazonaws.com",
  });

export const credentials = (): Promise<{
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken: string;
}> =>
  Promise.resolve({
    accessKeyId: "akid",
    secretAccessKey: "secret",
    sessionToken: "session",
  });
