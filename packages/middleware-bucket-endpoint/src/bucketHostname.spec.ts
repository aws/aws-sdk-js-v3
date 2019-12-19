import { bucketHostname } from "./bucketHostname";

describe("bucketHostname", () => {
  it("should use a virtual-hosted-style endpoint by default", () => {
    const baseHostname = "s3.us-west-2.amazonaws.com";
    const { bucketEndpoint, hostname } = bucketHostname({
      bucketName: "foo",
      baseHostname
    });

    expect(bucketEndpoint).toBe(true);
    expect(hostname).toBe(`foo.${baseHostname}`);
  });

  it("should use a path-style endpoint when requested", () => {
    const baseHostname = "s3.us-west-2.amazonaws.com";
    const { bucketEndpoint, hostname } = bucketHostname({
      bucketName: "foo",
      baseHostname,
      pathStyleEndpoint: true
    });

    expect(bucketEndpoint).toBe(false);
    expect(hostname).toBe(baseHostname);
  });

  it("should ignore transfer acceleration when a path-style endpoint is requested", () => {
    const baseHostname = "s3.us-west-2.amazonaws.com";
    const { bucketEndpoint, hostname } = bucketHostname({
      bucketName: "foo",
      baseHostname,
      pathStyleEndpoint: true,
      accelerateEndpoint: true
    });

    expect(bucketEndpoint).toBe(false);
    expect(hostname).toBe(baseHostname);
  });

  it("should use a path-style endpoint when the bucket name contains a dot", () => {
    const baseHostname = "s3.us-west-2.amazonaws.com";
    const { bucketEndpoint, hostname } = bucketHostname({
      bucketName: "foo.bar",
      baseHostname
    });

    expect(bucketEndpoint).toBe(false);
    expect(hostname).toBe(baseHostname);
  });

  it("should use a virtual-hosted-style endpoint when SSL compatibility is not requested and the bucket name contains a dot", () => {
    const baseHostname = "s3.us-west-2.amazonaws.com";
    const { bucketEndpoint, hostname } = bucketHostname({
      bucketName: "foo.bar",
      baseHostname,
      tlsCompatible: false
    });

    expect(bucketEndpoint).toBe(true);
    expect(hostname).toBe(`foo.bar.${baseHostname}`);
  });

  for (const [baseHostname, dualstackHostname] of [
    ["s3.amazonaws.com", "s3.dualstack.us-east-1.amazonaws.com"],
    ["s3-external-1.amazonaws.com", "s3.dualstack.us-east-1.amazonaws.com"],
    ["s3.us-east-1.amazonaws.com", "s3.dualstack.us-east-1.amazonaws.com"],
    ["s3-sa-east-1.amazonaws.com", "s3.dualstack.sa-east-1.amazonaws.com"]
  ]) {
    it(`should derive a virtual-hosted-style accelerate hostname of s3-accelerate.amazonaws.com for the base hostname of ${baseHostname}`, () => {
      const { bucketEndpoint, hostname } = bucketHostname({
        bucketName: "foo",
        baseHostname,
        accelerateEndpoint: true
      });

      expect(bucketEndpoint).toBe(true);
      expect(hostname).toBe(`foo.s3-accelerate.amazonaws.com`);
    });

    it(`should derive a virtual-hosted-style accelerate dualstack hostname of s3-accelerate.amazonaws.com for the base hostname of ${baseHostname}`, () => {
      const { bucketEndpoint, hostname } = bucketHostname({
        bucketName: "foo",
        baseHostname,
        accelerateEndpoint: true,
        dualstackEndpoint: true
      });

      expect(bucketEndpoint).toBe(true);
      expect(hostname).toBe(`foo.s3-accelerate.dualstack.amazonaws.com`);
    });

    it(`should derive a virtual-hosted-style dualstack hostname of ${dualstackHostname} for the base hostname of ${baseHostname}`, () => {
      const { bucketEndpoint, hostname } = bucketHostname({
        bucketName: "foo",
        baseHostname,
        dualstackEndpoint: true
      });

      expect(bucketEndpoint).toBe(true);
      expect(hostname).toBe(`foo.${dualstackHostname}`);
    });

    it(`should derive a path-style dualstack hostname of ${dualstackHostname} for the base hostname of ${baseHostname}`, () => {
      const { bucketEndpoint, hostname } = bucketHostname({
        bucketName: "foo",
        baseHostname,
        dualstackEndpoint: true,
        pathStyleEndpoint: true
      });

      expect(bucketEndpoint).toBe(false);
      expect(hostname).toBe(dualstackHostname);
    });
  }

  for (const nonDnsCompliantBucketName of [
    // too short
    "fo",
    // too long
    new Array(64).map(_ => "a").join(""),
    // leading period
    ".myawsbucket",
    // trailing period
    "myawsbucket.",
    // sequential periods
    "my..examplebucket",
    // capital letters
    "MyAWSBucket",
    // IP address
    "192.168.5.4"
  ]) {
    it(`should use a path-style endpoint for the non-DNS-compliant bucket name of ${nonDnsCompliantBucketName}`, () => {
      const baseHostname = "s3.us-west-2.amazonaws.com";
      const { bucketEndpoint, hostname } = bucketHostname({
        bucketName: nonDnsCompliantBucketName,
        baseHostname
      });

      expect(bucketEndpoint).toBe(false);
      expect(hostname).toBe(baseHostname);
    });
  }

  it("should perform no transformations when provided a non-S3 hostname", () => {
    expect(
      bucketHostname({
        bucketName: "foo",
        baseHostname: "example.com"
      })
    ).toEqual({
      bucketEndpoint: false,
      hostname: "example.com"
    });
  });
});
