import { parse as parseArn } from "@aws-sdk/util-arn-parser";

import { bucketHostname } from "./bucketHostname";

describe("bucketHostname", () => {
  describe("from bucket name", () => {
    it("should use a virtual-hosted-style endpoint by default", () => {
      const baseHostname = "s3.us-west-2.amazonaws.com";
      const { bucketEndpoint, hostname } = bucketHostname({
        bucketName: "foo",
        baseHostname,
      });

      expect(bucketEndpoint).toBe(true);
      expect(hostname).toBe(`foo.${baseHostname}`);
    });

    it("should use a path-style endpoint when requested", () => {
      const baseHostname = "s3.us-west-2.amazonaws.com";
      const { bucketEndpoint, hostname } = bucketHostname({
        bucketName: "foo",
        baseHostname,
        pathStyleEndpoint: true,
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
        accelerateEndpoint: true,
      });

      expect(bucketEndpoint).toBe(false);
      expect(hostname).toBe(baseHostname);
    });

    it("should use a path-style endpoint when the bucket name contains a dot", () => {
      const baseHostname = "s3.us-west-2.amazonaws.com";
      const { bucketEndpoint, hostname } = bucketHostname({
        bucketName: "foo.bar",
        baseHostname,
      });

      expect(bucketEndpoint).toBe(false);
      expect(hostname).toBe(baseHostname);
    });

    it("should use a virtual-hosted-style endpoint when SSL compatibility is not requested and the bucket name contains a dot", () => {
      const baseHostname = "s3.us-west-2.amazonaws.com";
      const { bucketEndpoint, hostname } = bucketHostname({
        bucketName: "foo.bar",
        baseHostname,
        tlsCompatible: false,
      });

      expect(bucketEndpoint).toBe(true);
      expect(hostname).toBe(`foo.bar.${baseHostname}`);
    });

    for (const [baseHostname, dualstackHostname] of [
      ["s3.amazonaws.com", "s3.dualstack.us-east-1.amazonaws.com"],
      ["s3-external-1.amazonaws.com", "s3.dualstack.us-east-1.amazonaws.com"],
      ["s3.us-east-1.amazonaws.com", "s3.dualstack.us-east-1.amazonaws.com"],
      ["s3-sa-east-1.amazonaws.com", "s3.dualstack.sa-east-1.amazonaws.com"],
    ]) {
      it(`should derive a virtual-hosted-style accelerate hostname of s3-accelerate.amazonaws.com for the base hostname of ${baseHostname}`, () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: "foo",
          baseHostname,
          accelerateEndpoint: true,
        });

        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe(`foo.s3-accelerate.amazonaws.com`);
      });

      it(`should derive a virtual-hosted-style accelerate dualstack hostname of s3-accelerate.amazonaws.com for the base hostname of ${baseHostname}`, () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: "foo",
          baseHostname,
          accelerateEndpoint: true,
          dualstackEndpoint: true,
        });

        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe(`foo.s3-accelerate.dualstack.amazonaws.com`);
      });

      it(`should derive a virtual-hosted-style dualstack hostname of ${dualstackHostname} for the base hostname of ${baseHostname}`, () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: "foo",
          baseHostname,
          dualstackEndpoint: true,
        });

        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe(`foo.${dualstackHostname}`);
      });

      it(`should derive a path-style dualstack hostname of ${dualstackHostname} for the base hostname of ${baseHostname}`, () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: "foo",
          baseHostname,
          dualstackEndpoint: true,
          pathStyleEndpoint: true,
        });

        expect(bucketEndpoint).toBe(false);
        expect(hostname).toBe(dualstackHostname);
      });
    }

    for (const nonDnsCompliantBucketName of [
      // too short
      "fo",
      // too long
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      new Array(64).map((_) => "a").join(""),
      // leading period
      ".myawsbucket",
      // trailing period
      "myawsbucket.",
      // sequential periods
      "my..examplebucket",
      // capital letters
      "MyAWSBucket",
      // IP address
      "192.168.5.4",
    ]) {
      it(`should use a path-style endpoint for the non-DNS-compliant bucket name of ${nonDnsCompliantBucketName}`, () => {
        const baseHostname = "s3.us-west-2.amazonaws.com";
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: nonDnsCompliantBucketName,
          baseHostname,
        });

        expect(bucketEndpoint).toBe(false);
        expect(hostname).toBe(baseHostname);
      });
    }

    it("should perform no transformations when provided a non-S3 hostname", () => {
      expect(
        bucketHostname({
          bucketName: "foo",
          baseHostname: "example.com",
        })
      ).toEqual({
        bucketEndpoint: false,
        hostname: "example.com",
      });
    });
  });

  describe("from Access Point ARN", () => {
    describe("populates access point endpoint from ARN", () => {
      it("should use client region", () => {
        const baseHostname = "s3.us-west-2.amazonaws.com";
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: parseArn("arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint"),
          baseHostname,
        });
        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint.us-west-2.amazonaws.com");
      });

      it("should use ARN region", () => {
        const baseHostname = "s3.us-west-2.amazonaws.com";
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: parseArn("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint"),
          baseHostname,
          useArnRegion: true,
        });
        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint.us-east-1.amazonaws.com");
      });
    });

    describe("allows different client region with same signing scope", () => {
      ["s3-external-1", "s3"].forEach((clientRegion) => {
        const baseHostname = `${clientRegion}.amazonaws.com`;
        it(`should use client region from base hostname ${baseHostname}`, () => {
          const { bucketEndpoint, hostname } = bucketHostname({
            bucketName: parseArn("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint"),
            baseHostname,
            clientSigningRegion: "us-east-1",
          });
          expect(bucketEndpoint).toBe(true);
          expect(hostname).toBe(`myendpoint-123456789012.s3-accesspoint.${clientRegion}.amazonaws.com`);
        });
      });

      ["s3-external-1", "s3"].forEach((clientRegion) => {
        const baseHostname = `${clientRegion}.amazonaws.com`;
        it(`should use ARN region with base hostname ${baseHostname}`, () => {
          const { bucketEndpoint, hostname } = bucketHostname({
            bucketName: parseArn("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint"),
            baseHostname,
            clientSigningRegion: "us-east-1",
            useArnRegion: true,
          });
          expect(bucketEndpoint).toBe(true);
          expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint.us-east-1.amazonaws.com");
        });
      });
    });

    it("should throw if ARN region and client region are incompatible", () => {
      expect(() => {
        bucketHostname({
          bucketName: parseArn("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint"),
          baseHostname: "s3.us-west-2.amazonaws.com",
        });
      }).toThrow("Region in ARN is incompatible, got us-east-1 but expected us-west-2");
    });

    it("should allow dualstack endpoint", () => {
      const { bucketEndpoint, hostname } = bucketHostname({
        bucketName: parseArn("arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint"),
        baseHostname: "s3.us-west-2.amazonaws.com",
        useArnRegion: true,
        dualstackEndpoint: true,
      });
      expect(bucketEndpoint).toBe(true);
      expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint.dualstack.us-west-2.amazonaws.com");
    });

    describe("allows non-AWS partition", () => {
      const bucketArn = parseArn("arn:aws-cn:s3:cn-north-1:123456789012:accesspoint:myendpoint");
      it("should throw when ARN partition and client region partition are different", () => {
        expect(() => {
          bucketHostname({
            bucketName: bucketArn,
            baseHostname: "s3.us-west-2.amazonaws.com",
            useArnRegion: true,
          });
        }).toThrow(`Partition in ARN is incompatible, got "aws-cn" but expected "aws"`);
      });

      it("should use ARN region", () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: parseArn("arn:aws-cn:s3:cn-northwest-1:123456789012:accesspoint:myendpoint"),
          baseHostname: "s3.cn-north-1.amazonaws.com.cn",
          clientPartition: "aws-cn",
          useArnRegion: true,
        });
        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint.cn-northwest-1.amazonaws.com.cn");
      });

      it("should use client region", () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: bucketArn,
          baseHostname: "s3.cn-north-1.amazonaws.com.cn",
          clientPartition: "aws-cn",
        });
        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint.cn-north-1.amazonaws.com.cn");
      });
    });

    describe("allows fips client region", () => {
      const bucketArn = parseArn("arn:aws-us-gov:s3:us-gov-east-1:123456789012:accesspoint:myendpoint");
      it("should use client region", () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: bucketArn,
          baseHostname: "s3.fips-us-gov-east-1.amazonaws.com",
          clientPartition: "aws-us-gov",
        });
        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint.fips-us-gov-east-1.amazonaws.com");
      });

      it("should use ARN region", () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: bucketArn,
          baseHostname: "s3.fips-us-gov-east-1.amazonaws.com",
          clientPartition: "aws-us-gov",
          useArnRegion: true,
        });
        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint.us-gov-east-1.amazonaws.com");
      });

      it("should allow dualstack", () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: bucketArn,
          baseHostname: "s3.fips-us-gov-east-1.amazonaws.com",
          clientPartition: "aws-us-gov",
          useArnRegion: true,
          dualstackEndpoint: true,
        });
        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint.dualstack.us-gov-east-1.amazonaws.com");
      });
    });

    it("should throw if use accelerate endpoint", () => {
      expect(() => {
        bucketHostname({
          bucketName: parseArn("arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint"),
          baseHostname: "s3.us-west-2.amazonaws.com",
          accelerateEndpoint: true,
        });
      }).toThrow("Accelerate is not supported when bucket is an Access Point ARN");
    });

    describe("should validate Access Point ARN", () => {
      [
        {
          bucketArn: "arn:aws:sqs:us-west-2:123456789012:someresource",
          message: "Expect 's3' in access point ARN service component",
        },
        {
          bucketArn: "arn:aws:s3:us-west-2:123456789012:bucket_name:mybucket",
          message: "Access point ARN resource should begin with 'accesspoint/'",
        },
        {
          bucketArn: "arn:aws:s3::123456789012:accesspoint:myendpoint",
          message: "Access point ARN region is empty",
        },
        {
          bucketArn: "arn:aws:s3:us-west-2::accesspoint:myendpoint",
          message: "Access point ARN accountID does not match regex '[0-9]{12}'",
        },
        {
          bucketArn: "arn:aws:s3:us-west-2:123.45678.9012:accesspoint:mybucket",
          message: "Access point ARN accountID does not match regex '[0-9]{12}'",
        },
        {
          bucketArn: "arn:aws:s3:us-west-2:123456789012:accesspoint:",
          message: "Access Point ARN should have one resource accesspoint/{accesspointname}",
        },
        {
          bucketArn: "arn:aws:s3:us-west-2:123456789012:accesspoint:*",
          message: "Invalid DNS label *-123456789012",
        },
        {
          bucketArn: "arn:aws:s3:us-west-2:123456789012:accesspoint:my.bucket",
          message: "Invalid DNS label my.bucket-123456789012",
        },
        {
          bucketArn: "arn:aws:s3:us-west-2:123456789012:accesspoint:mybucket:object:foo	",
          message: "Access Point ARN should have one resource accesspoint/{accesspointname}",
        },
      ].forEach(({ bucketArn, message }) => {
        it(`should throw "${message}"`, () => {
          expect(() => {
            bucketHostname({
              bucketName: parseArn(bucketArn),
              baseHostname: "s3.us-west-2.amazonaws.com",
            });
          }).toThrow(message);
        });
      });
    });
  });
});
