import { CredentialsProviderError } from "@smithy/property-provider";

import { checkUrl } from "./checkUrl";

describe(checkUrl.name, () => {
  it("allows https", () => {
    expect(checkUrl(new URL("https://___.com"))).toBeUndefined();
    expect(() => checkUrl(new URL("http://___.com"))).toThrow(CredentialsProviderError);
  });

  it("allows ECS container host", () => {
    expect(checkUrl(new URL("http://169.254.170.2/test"))).toBeUndefined();
    expect(() => checkUrl(new URL("http://169.254.170.3/test"))).toThrow(CredentialsProviderError);
  });

  it("allows EKS container host", () => {
    expect(checkUrl(new URL("http://169.254.170.23/test"))).toBeUndefined();
    expect(() => checkUrl(new URL("http://169.254.170.24/test"))).toThrow(CredentialsProviderError);

    expect(checkUrl(new URL("http://[fd00:ec2::23]/test"))).toBeUndefined();
    expect(() => checkUrl(new URL("http://[fd00:ec2::24]/test"))).toThrow(CredentialsProviderError);
  });

  it("allows localhost", () => {
    expect(checkUrl(new URL("http://localhost/test"))).toBeUndefined();
    expect(checkUrl(new URL("http://127.0.0.0/test"))).toBeUndefined();
    expect(checkUrl(new URL("http://127.0.0.1/test"))).toBeUndefined();
    expect(checkUrl(new URL("http://127.255.255.255/test"))).toBeUndefined();
    expect(checkUrl(new URL("http://[::1]/test"))).toBeUndefined();
    expect(checkUrl(new URL("http://[0000:0000:0000:0000:0000:0000:0000:0001]/test"))).toBeUndefined();
  });

  it("rejects other http", () => {
    expect(() => checkUrl(new URL("http://abcd.com"))).toThrow(CredentialsProviderError);
  });

  describe("additional test cases", () => {
    it("rejects forbidden host in full URI", () => {
      expect(() => checkUrl(new URL("http://192.168.1.1/endpoint"))).toThrow(CredentialsProviderError);
    });
    it("rejects forbidden link-local host in full URI", () => {
      expect(() => checkUrl(new URL("http://169.254.170.3/endpoint"))).toThrow(CredentialsProviderError);
    });
    it("allows http loopback v4 URI", () => {
      expect(() => checkUrl(new URL("http://127.0.0.2/credentials"))).not.toThrow();
    });
  });
});
