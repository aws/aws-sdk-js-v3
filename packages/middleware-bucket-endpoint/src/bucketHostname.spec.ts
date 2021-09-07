import { parse as parseArn } from "@aws-sdk/util-arn-parser";

import { bucketHostname } from "./bucketHostname";

describe("bucketHostname", () => {
  const region = "us-west-2";
  describe("from bucket name", () => {
    [
      { baseHostname: "s3.us-west-2.amazonaws.com", isCustomEndpoint: false },
      { baseHostname: "beta.example.com", isCustomEndpoint: true },
    ].forEach(({ baseHostname, isCustomEndpoint }) => {
      describe(`baseHostname: ${baseHostname}`, () => {
        it("should use a virtual-hosted-style endpoint by default", () => {
          const { bucketEndpoint, hostname } = bucketHostname({
            bucketName: "foo",
            baseHostname,
            isCustomEndpoint,
            clientRegion: region,
          });

          expect(bucketEndpoint).toBe(true);
          expect(hostname).toBe(`foo.${baseHostname}`);
        });

        it("should use a path-style endpoint when requested", () => {
          const { bucketEndpoint, hostname } = bucketHostname({
            bucketName: "foo",
            baseHostname,
            isCustomEndpoint,
            clientRegion: region,
            pathStyleEndpoint: true,
          });

          expect(bucketEndpoint).toBe(false);
          expect(hostname).toBe(baseHostname);
        });

        it("should use a path-style endpoint when the bucket name contains a dot", () => {
          const { bucketEndpoint, hostname } = bucketHostname({
            bucketName: "foo.bar",
            baseHostname,
            isCustomEndpoint,
            clientRegion: region,
          });

          expect(bucketEndpoint).toBe(false);
          expect(hostname).toBe(baseHostname);
        });

        it("should use a virtual-hosted-style endpoint when SSL compatibility is not requested and the bucket name contains a dot", () => {
          const { bucketEndpoint, hostname } = bucketHostname({
            bucketName: "foo.bar",
            baseHostname,
            isCustomEndpoint,
            clientRegion: region,
            tlsCompatible: false,
          });

          expect(bucketEndpoint).toBe(true);
          expect(hostname).toBe(`foo.bar.${baseHostname}`);
        });

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
            const { bucketEndpoint, hostname } = bucketHostname({
              bucketName: nonDnsCompliantBucketName,
              baseHostname,
              isCustomEndpoint,
              clientRegion: region,
            });

            expect(bucketEndpoint).toBe(false);
            expect(hostname).toBe(baseHostname);
          });
        }
      });
    });

    it("should ignore transfer acceleration when a path-style endpoint is requested", () => {
      const baseHostname = "s3.us-west-2.amazonaws.com";
      const { bucketEndpoint, hostname } = bucketHostname({
        bucketName: "foo",
        baseHostname,
        isCustomEndpoint: false,
        clientRegion: region,
        pathStyleEndpoint: true,
        accelerateEndpoint: true,
      });

      expect(bucketEndpoint).toBe(false);
      expect(hostname).toBe(baseHostname);
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
          isCustomEndpoint: false,
          clientRegion: region,
          accelerateEndpoint: true,
        });

        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe(`foo.s3-accelerate.amazonaws.com`);
      });

      it(`should derive a virtual-hosted-style accelerate dualstack hostname of s3-accelerate.amazonaws.com for the base hostname of ${baseHostname}`, () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: "foo",
          baseHostname,
          isCustomEndpoint: false,
          clientRegion: region,
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
          isCustomEndpoint: false,
          clientRegion: region,
          dualstackEndpoint: true,
        });

        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe(`foo.${dualstackHostname}`);
      });

      it(`should derive a path-style dualstack hostname of ${dualstackHostname} for the base hostname of ${baseHostname}`, () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: "foo",
          baseHostname,
          isCustomEndpoint: false,
          clientRegion: region,
          dualstackEndpoint: true,
          pathStyleEndpoint: true,
        });

        expect(bucketEndpoint).toBe(false);
        expect(hostname).toBe(dualstackHostname);
      });
    }

    describe("should throw when provided a non-S3 hostname with", () => {
      ["dualstackEndpoint", "accelerateEndpoint"].forEach((option) => {
        it(`${option} enabled`, () => {
          expect(() => {
            bucketHostname({
              bucketName: "foo",
              baseHostname: "example.com",
              isCustomEndpoint: true,
              clientRegion: region,
              [option]: true,
            });
          }).toThrow("endpoint is not supported with custom endpoint");
        });
      });
    });
  });

  describe("from Access Point ARN", () => {
    describe("populates access point endpoint from ARN", () => {
      const s3Hostname = "s3.us-west-2.amazonaws.com";
      const customHostname = "example.com";

      describe(`baseHostname: ${s3Hostname}`, () => {
        const baseHostname = s3Hostname;
        it("should use client region", () => {
          const { bucketEndpoint, hostname } = bucketHostname({
            bucketName: parseArn("arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint"),
            baseHostname,
            isCustomEndpoint: false,
            clientRegion: region,
          });
          expect(bucketEndpoint).toBe(true);
          expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint.us-west-2.amazonaws.com");
        });

        it("should use ARN region", () => {
          const { bucketEndpoint, hostname } = bucketHostname({
            bucketName: parseArn("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint"),
            baseHostname,
            isCustomEndpoint: false,
            clientRegion: region,
            useArnRegion: true,
          });
          expect(bucketEndpoint).toBe(true);
          expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint.us-east-1.amazonaws.com");
        });
      });

      describe(`baseHostname: ${customHostname}`, () => {
        const baseHostname = customHostname;
        [true, false].forEach((useArnRegion) => {
          it(`should ignore useArnRegion=${useArnRegion}`, () => {
            const { bucketEndpoint, hostname } = bucketHostname({
              bucketName: parseArn("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint"),
              baseHostname,
              isCustomEndpoint: true,
              clientRegion: "us-east-1",
              useArnRegion,
            });
            expect(bucketEndpoint).toBe(true);
            expect(hostname).toBe(`myendpoint-123456789012.${baseHostname}`);
          });
        });
      });
    });

    describe("validate client region", () => {
      [
        { baseHostname: "s3.amazonaws.com", region: "aws-global", signingRegion: "us-east-1" },
        {
          baseHostname: "s3-external-1.amazonaws.com",
          region: "s3-external-1",
          signingRegion: "us-east-1",
        },
      ].forEach(({ baseHostname, region, signingRegion }) => {
        it(`should throw if supplied with global region ${region}`, () => {
          try {
            bucketHostname({
              bucketName: parseArn("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint"),
              baseHostname,
              isCustomEndpoint: false,
              clientRegion: region,
              clientSigningRegion: signingRegion,
            });
            fail("function should have thrown");
          } catch (e) {
            expect(e).toBeDefined();
          }
        });
      });
    });

    it("should throw if ARN region and client region are incompatible", () => {
      expect(() => {
        bucketHostname({
          bucketName: parseArn("arn:aws:s3:us-east-1:123456789012:accesspoint:myendpoint"),
          baseHostname: "s3.us-west-2.amazonaws.com",
          isCustomEndpoint: false,
          clientRegion: region,
        });
      }).toThrow("Region in ARN is incompatible, got us-east-1 but expected us-west-2");
    });

    it("should allow dualstack endpoint", () => {
      const { bucketEndpoint, hostname } = bucketHostname({
        bucketName: parseArn("arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint"),
        baseHostname: "s3.us-west-2.amazonaws.com",
        isCustomEndpoint: false,
        clientRegion: region,
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
            isCustomEndpoint: false,
            clientRegion: region,
            useArnRegion: true,
          });
        }).toThrow(`Partition in ARN is incompatible, got "aws-cn" but expected "aws"`);
      });

      it("should use ARN region", () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: parseArn("arn:aws-cn:s3:cn-northwest-1:123456789012:accesspoint:myendpoint"),
          baseHostname: "s3.cn-north-1.amazonaws.com.cn",
          isCustomEndpoint: false,
          clientRegion: "cn-north-1",
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
          isCustomEndpoint: false,
          clientRegion: "cn-north-1",
          clientPartition: "aws-cn",
        });
        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint.cn-north-1.amazonaws.com.cn");
      });
    });

    describe("allows fips client region", () => {
      const bucketArn = parseArn("arn:aws-us-gov:s3:us-gov-east-1:123456789012:accesspoint:myendpoint");
      const clientRegion = "fips-us-gov-east-1";
      const clientPartition = "aws-us-gov";
      it("should use client region", () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: bucketArn,
          baseHostname: `s3.${clientRegion}.amazonaws.com`,
          isCustomEndpoint: false,
          clientRegion,
          clientPartition,
        });
        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint-fips.us-gov-east-1.amazonaws.com");
      });

      it("should use ARN region", () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: bucketArn,
          baseHostname: `s3.${clientRegion}.amazonaws.com`,
          isCustomEndpoint: false,
          clientRegion,
          clientPartition,
          useArnRegion: true,
        });
        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint-fips.us-gov-east-1.amazonaws.com");
      });

      it("should allow dualstack", () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: bucketArn,
          baseHostname: `s3.${clientRegion}.amazonaws.com`,
          isCustomEndpoint: false,
          clientRegion,
          clientPartition,
          useArnRegion: true,
          dualstackEndpoint: true,
        });
        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe("myendpoint-123456789012.s3-accesspoint-fips.dualstack.us-gov-east-1.amazonaws.com");
      });
    });

    describe("validates FIPS client region matching ARN region", () => {
      const bucketArn = parseArn("arn:aws-us-gov:s3:us-gov-west-1:123456789012:accesspoint:myendpoint");
      const clientRegion = "fips-us-gov-east-1";
      const clientPartition = "aws-us-gov";
      it("should throw client region doesn't match arn region", () => {
        expect(() =>
          bucketHostname({
            bucketName: bucketArn,
            baseHostname: `s3.${clientRegion}.amazonaws.com`,
            isCustomEndpoint: false,
            clientRegion,
            clientPartition,
          })
        ).toThrowError();
      });

      it("should throw client region doesn't match arn region and uses ARN region", () => {
        expect(() =>
          bucketHostname({
            bucketName: bucketArn,
            baseHostname: `s3.${clientRegion}.amazonaws.com`,
            isCustomEndpoint: false,
            clientRegion,
            clientPartition,
            useArnRegion: true,
          })
        ).toThrowError();
      });
    });

    it("should throw if use accelerate endpoint", () => {
      expect(() => {
        bucketHostname({
          bucketName: parseArn("arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint"),
          baseHostname: "s3.us-west-2.amazonaws.com",
          isCustomEndpoint: false,
          clientRegion: region,
          accelerateEndpoint: true,
        });
      }).toThrow("Accelerate endpoint is not supported when bucket is an ARN");
    });

    [
      { baseHostname: "s3.us-west-2.amazonaws.com", isCustomEndpoint: false },
      { baseHostname: "beta.example.com", isCustomEndpoint: true },
    ].forEach(({ baseHostname, isCustomEndpoint }) => {
      describe(`should validate Access Point ARN with baseHostname: ${baseHostname}`, () => {
        [
          {
            bucketArn: "arn:aws:sqs:us-west-2:123456789012:someresource",
            message: "Expect 's3' or 's3-outposts' or 's3-object-lambda' in ARN service component",
          },
          {
            bucketArn: "arn:aws:s3:us-west-2:123456789012:bucket_name:mybucket",
            message: "ARN resource should begin with 'accesspoint:' or 'outpost:'",
          },
          {
            bucketArn: "arn:aws:s3::123456789012:accesspoint:myendpoint",
            message: "ARN region is empty",
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
            message: "Access Point ARN should have one resource accesspoint:{accesspointname}",
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
            message: "Access Point ARN should have one resource accesspoint:{accesspointname}",
          },
        ].forEach(({ bucketArn, message }) => {
          it(`should throw "${message}"`, () => {
            expect(() => {
              bucketHostname({
                bucketName: parseArn(bucketArn),
                baseHostname,
                isCustomEndpoint,
                clientRegion: region,
              });
            }).toThrow(message);
          });
        });
      });
    });

    it("should return correct signing region", () => {
      const bucketArn = parseArn("arn:aws:s3:us-west-2:123456789012:accesspoint:myendpoint");
      expect(
        bucketHostname({
          bucketName: bucketArn,
          baseHostname: "s3.us-east-1.amazonaws.com",
          isCustomEndpoint: false,
          clientRegion: "us-east-1",
          useArnRegion: true,
        }).signingRegion
      ).toBe("us-west-2");
    });
  });

  describe("from Outpost ARN", () => {
    describe("populates access point endpoint from ARN", () => {
      const s3Hostname = "s3.us-west-2.amazonaws.com";
      const customHostname = "example.com";

      describe(`baseHostname: ${s3Hostname}`, () => {
        const baseHostname = s3Hostname;
        it("should use client region", () => {
          const region = "us-west-2";
          const expectedEndpoint =
            "myaccesspoint-123456789012.op-01234567890123456.s3-outposts.us-west-2.amazonaws.com";
          [
            "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint",
            "arn:aws:s3-outposts:us-west-2:123456789012:outpost/op-01234567890123456/accesspoint/myaccesspoint",
          ].forEach((outpostArn) => {
            const { bucketEndpoint, hostname } = bucketHostname({
              bucketName: parseArn(outpostArn),
              baseHostname,
              isCustomEndpoint: false,
              clientRegion: region,
            });
            expect(bucketEndpoint).toBe(true);
            expect(hostname).toBe(expectedEndpoint);
          });
        });

        it("should use ARN region", () => {
          const region = "us-west-2";
          const expectedEndpoint =
            "myaccesspoint-123456789012.op-01234567890123456.s3-outposts.us-east-1.amazonaws.com";
          [
            "arn:aws:s3-outposts:us-east-1:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint",
            "arn:aws:s3-outposts:us-east-1:123456789012:outpost/op-01234567890123456/accesspoint/myaccesspoint",
          ].forEach((outpostArn) => {
            const { bucketEndpoint, hostname } = bucketHostname({
              bucketName: parseArn(outpostArn),
              baseHostname,
              isCustomEndpoint: false,
              clientRegion: region,
              useArnRegion: true,
            });
            expect(bucketEndpoint).toBe(true);
            expect(hostname).toBe(expectedEndpoint);
          });
        });
      });

      describe(`baseHostname: ${customHostname}`, () => {
        const baseHostname = customHostname;
        [true, false].forEach((useArnRegion) => {
          [
            "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint",
            "arn:aws:s3-outposts:us-west-2:123456789012:outpost/op-01234567890123456/accesspoint/myaccesspoint",
          ].forEach((outpostArn) => {
            it(`should ignore useArnRegion=${useArnRegion}`, () => {
              const region = "us-west-2";
              const { bucketEndpoint, hostname } = bucketHostname({
                bucketName: parseArn(outpostArn),
                baseHostname,
                isCustomEndpoint: true,
                clientRegion: region,
                useArnRegion,
              });
              expect(bucketEndpoint).toBe(true);
              expect(hostname).toBe(`myaccesspoint-123456789012.op-01234567890123456.${baseHostname}`);
            });
          });
        });
      });
    });

    it("should throw if ARN region and client region are incompatible", () => {
      expect(() => {
        bucketHostname({
          bucketName: parseArn(
            "arn:aws:s3-outposts:us-east-1:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint"
          ),
          baseHostname: "s3.us-west-2.amazonaws.com",
          isCustomEndpoint: false,
          clientRegion: region,
        });
      }).toThrow("Region in ARN is incompatible, got us-east-1 but expected us-west-2");
    });

    it("should throw when ARN partition and client region partition are different", () => {
      expect(() => {
        bucketHostname({
          bucketName: parseArn(
            "arn:aws-cn:s3-outposts:cn-north-1:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint"
          ),
          baseHostname: "s3.us-west-2.amazonaws.com",
          isCustomEndpoint: false,
          clientRegion: region,
          useArnRegion: true,
        });
      }).toThrow(`Partition in ARN is incompatible, got "aws-cn" but expected "aws"`);
    });

    describe("fips region", () => {
      it("should throw if client is using fips region", () => {
        const clientRegion = "fips-us-gov-east-1";
        const clientPartition = "aws-us-gov";
        expect.assertions(2);
        expect(() => {
          bucketHostname({
            bucketName: parseArn(
              "arn:aws-us-gov:s3-outposts:us-gov-east-1:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint"
            ),
            baseHostname: `s3.${clientRegion}.amazonaws.com`,
            isCustomEndpoint: false,
            clientRegion,
            clientPartition,
          });
        }).toThrow("FIPS region is not supported");

        expect(() => {
          bucketHostname({
            bucketName: parseArn(
              "arn:aws-us-gov:s3-outposts:fips-us-gov-east-1:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint"
            ),
            baseHostname: `s3.${clientRegion}.amazonaws.com`,
            isCustomEndpoint: false,
            clientRegion,
            clientPartition,
            useArnRegion: true,
          });
        }).toThrow("FIPS region is not supported");
      });

      it("should allow if region is not fips", () => {
        const { bucketEndpoint, hostname } = bucketHostname({
          bucketName: parseArn(
            "arn:aws-us-gov:s3-outposts:us-gov-east-1:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint"
          ),
          baseHostname: "s3.fips-us-gov-east-1.amazonaws.com",
          isCustomEndpoint: false,
          clientRegion: "us-gov-east-1",
          clientPartition: "aws-us-gov",
          useArnRegion: true,
        });
        expect(bucketEndpoint).toBe(true);
        expect(hostname).toBe(
          "myaccesspoint-123456789012.op-01234567890123456.s3-outposts.us-gov-east-1.amazonaws.com"
        );
      });
    });

    describe("should throw if dualstack is set", () => {
      [
        { baseHostname: "s3.us-west-2.amazonaws.com", isCustomEndpoint: false },
        { baseHostname: "beta.example.com", isCustomEndpoint: true },
      ].forEach(({ baseHostname, isCustomEndpoint }) => {
        it(`with baseHostname: ${baseHostname}`, () => {
          expect(() => {
            bucketHostname({
              bucketName: parseArn(
                "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint"
              ),
              baseHostname,
              isCustomEndpoint,
              clientRegion: region,
              dualstackEndpoint: true,
            });
          }).toThrow("Dualstack endpoint is not supported");
        });
      });
    });

    describe("should throw if accelerate endpoint is set", () => {
      [
        { baseHostname: "s3.us-west-2.amazonaws.com", isCustomEndpoint: false },
        { baseHostname: "beta.example.com", isCustomEndpoint: true },
      ].forEach(({ baseHostname, isCustomEndpoint }) => {
        it(`with baseHostname: ${baseHostname}`, () => {
          expect(() => {
            bucketHostname({
              bucketName: parseArn(
                "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint"
              ),
              baseHostname,
              isCustomEndpoint,
              clientRegion: region,
              accelerateEndpoint: true,
            });
          }).toThrow("Accelerate endpoint is not supported");
        });
      });
    });

    [
      { baseHostname: "s3.us-west-2.amazonaws.com", isCustomEndpoint: false },
      { baseHostname: "beta.example.com", isCustomEndpoint: true },
    ].forEach(({ baseHostname, isCustomEndpoint }) => {
      describe(`should validate Outpost ARN with baseHostname: ${baseHostname}`, () => {
        [
          {
            outpostArn: "arn:aws:s3-outposts:us-west-2:123456789012:outpost",
            message: "Outpost ARN should have resource outpost/{outpostId}/accesspoint/{accesspointName}",
          },
          {
            outpostArn: "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456",
            message: "Outpost ARN should have resource outpost:{outpostId}:accesspoint:{accesspointName}",
          },
          {
            outpostArn: "arn:aws:s3-outposts:us-west-2:123456789012:outpost:myaccesspoint",
            message: "Outpost ARN should have resource outpost:{outpostId}:accesspoint:{accesspointName}",
          },
          {
            outpostArn: "arn:aws:s3-outposts:us-west-2:123456789012:outpost::accesspoint:myaccesspoint",
            message: "Outpost ARN should have resource outpost:{outpostId}:accesspoint:{accesspointName}",
          },
          {
            outpostArn: "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint",
            message: "Outpost ARN should have resource outpost:{outpostId}:accesspoint:{accesspointName}",
          },
          {
            outpostArn:
              "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:mybucket:object:foo",
            message: "Outpost ARN should have resource outpost:{outpostId}:accesspoint:{accesspointName}",
          },
          {
            outpostArn:
              "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-0123456.890123456:accesspoint:myaccesspoint",
            message: "Invalid DNS label op-0123456.890123456",
          },
          {
            outpostArn: "arn:aws:s3:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint",
            message: "Expect 's3-posts' in Outpost ARN service component",
          },
        ].forEach(({ outpostArn, message }) => {
          it(`should throw "${message}"`, () => {
            expect(() => {
              bucketHostname({
                bucketName: parseArn(outpostArn),
                baseHostname,
                isCustomEndpoint,
                clientRegion: region,
              });
            }).toThrow(message);
          });
        });
      });
    });

    it("should return correct signing region and signing service", () => {
      const bucketArn = parseArn(
        "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint"
      );
      const { signingRegion, signingService } = bucketHostname({
        bucketName: bucketArn,
        baseHostname: "s3.us-east-1.amazonaws.com",
        isCustomEndpoint: false,
        clientRegion: "us-east-1",
        useArnRegion: true,
      });
      expect(signingRegion).toBe("us-west-2");
      expect(signingService).toBe("s3-outposts");
    });
  });

  describe("from Object Lamdba ARN", () => {
    describe("populates access point endpoint from ARN", () => {
      it("should use the proper endpoint", () => {
        const region = "eu-west-1";
        const expectedEndpoint = "js-sdk-ap-name-123456789012.s3-object-lambda.eu-west-1.amazonaws.com";
        ["arn:aws:s3-object-lambda:eu-west-1:123456789012:accesspoint/js-sdk-ap-name"].forEach((outpostArn) => {
          const { bucketEndpoint, hostname } = bucketHostname({
            bucketName: parseArn(outpostArn),
            baseHostname: "s3.eu-west-1.amazonaws.com",
            isCustomEndpoint: false,
            clientRegion: region,
          });
          expect(bucketEndpoint).toBe(true);
          expect(hostname).toBe(expectedEndpoint);
        });
      });
    });

    it("should not be able to use accelerate", () => {
      try {
        bucketHostname({
          bucketName: parseArn("arn:aws:s3-object-lambda:us-west-2:123456789012:accesspoint/mybanner"),
          baseHostname: "s3.us-west-2.amazonaws.com",
          isCustomEndpoint: false,
          clientRegion: "us-west-2",
          accelerateEndpoint: true,
        });
        // should never get here
        expect.assertions(1);
      } catch (e) {
        // should throw since these are error cases
        expect(1).toEqual(1);
      }
    });

    it("should not be able to use dualstack", () => {
      try {
        bucketHostname({
          bucketName: parseArn("arn:aws:s3-object-lambda:us-west-2:123456789012:accesspoint/mybanner"),
          baseHostname: "s3.us-west-2.amazonaws.com",
          isCustomEndpoint: false,
          clientRegion: "us-west-2",
          dualstackEndpoint: true,
        });
        // should never get here
        expect.assertions(1);
      } catch (e) {
        // should throw since these are error cases
        expect(1).toEqual(1);
      }
    });

    it("should support a custom endpoint", () => {
      const { hostname } = bucketHostname({
        bucketName: parseArn("arn:aws:s3-object-lambda:us-west-2:123456789012:accesspoint/mybanner"),
        baseHostname: "my-endpoint.com",
        isCustomEndpoint: true,
        clientRegion: "us-west-2",
      });
      expect(hostname).toEqual("mybanner-123456789012.s3-object-lambda.us-west-2.my-endpoint.com");
    });

    describe("object lambda general test cases", () => {
      it("should match expectations in valid configurations", () => {
        const validLambdaExpectations: [
          arn: string,
          clientRegion: string,
          useArnRegion: boolean,
          expectedEndpoint: string,
          clientPartition?: string
        ][] = [
          [
            "arn:aws:s3-object-lambda:us-west-2:1123456789012:accesspoint/mybanner",
            "us-west-2",
            false,
            "mybanner-1123456789012.s3-object-lambda.us-west-2.amazonaws.com",
          ],
          [
            "arn:aws:s3-object-lambda:us-west-2:2123456789012:accesspoint:mybanner",
            "us-west-2",
            false,
            "mybanner-2123456789012.s3-object-lambda.us-west-2.amazonaws.com",
          ],
          [
            "arn:aws:s3-object-lambda:us-east-1:3123456789012:accesspoint/mybanner",
            "us-west-2",
            true,
            "mybanner-3123456789012.s3-object-lambda.us-east-1.amazonaws.com",
          ],
          [
            "arn:aws-us-gov:s3-object-lambda:us-gov-east-1:123456789012:accesspoint/mybanner",
            "fips-us-gov-east-1",
            false,
            "mybanner-123456789012.s3-object-lambda-fips.us-gov-east-1.amazonaws.com",
            "aws-us-gov",
          ],
          [
            "arn:aws-us-gov:s3-object-lambda:us-gov-east-1:123456789012:accesspoint/mybanner",
            "fips-us-gov-east-1",
            true,
            "mybanner-123456789012.s3-object-lambda-fips.us-gov-east-1.amazonaws.com",
            "aws-us-gov",
          ],
        ];
        validLambdaExpectations.forEach(([arn, clientRegion, useArnRegion, expectedEndpoint, clientPartition]) => {
          const { bucketEndpoint, hostname } = bucketHostname({
            bucketName: parseArn(arn),
            baseHostname: `s3.${region}.amazonaws.com`,
            isCustomEndpoint: false,
            clientRegion,
            useArnRegion,
            clientPartition,
          });
          expect(bucketEndpoint).toBe(true);
          expect(hostname).toBe(expectedEndpoint);
        });
      });

      it("should match not work with invalid configurations", () => {
        const invalidLambdaConfigurations: [
          arn: string,
          clientRegion: string,
          useArnRegion: boolean,
          expectedError: string,
          clientPartition?: string
        ][] = [
          [
            "arn:aws:s3-object-lambda:us-east-1:123456789012:accesspoint/mybanner",
            "us-west-2",
            false,
            "Invalid configuration, cross region Access Point ARN",
          ],
          [
            "arn:aws-cn:s3-object-lambda:cn-north-1:123456789012:accesspoint/mybanner",
            "us-west-2",
            true,
            "Invalid configuration, cross partition Access Point ARN",
          ],
          [
            "arn:aws:sqs:us-west-2:123456789012:someresource",
            "us-west-2",
            false,
            "Invalid ARN not S3 Access Point ARN",
          ],
          [
            "arn:aws:s3-object-lambda:us-west-2:123456789012:bucket_name:mybucket",
            "us-west-2",
            false,
            "Invalid ARN not S3 Access Point ARN",
          ],
          [
            "arn:aws:s3-object-lambda::123456789012:accesspoint/mybanner",
            "us-west-2",
            false,
            "Invalid ARN, missing region",
          ],
          [
            "arn:aws:s3-object-lambda:us-west-2::accesspoint/mybanner",
            "us-west-2",
            false,
            "Invalid ARN, missing account-id",
          ],
          [
            "arn:aws:s3-object-lambda:us-west-2:123.45678.9012:accesspoint:mybucket",
            "us-west-2",
            false,
            "Invalid ARN, account-id contains invalid character, ..",
          ],
          [
            "arn:aws:s3-object-lambda:us-west-2:123456789012:accesspoint",
            "us-west-2",
            false,
            "Invalid ARN, missing Access Point name",
          ],
          [
            "arn:aws:s3-object-lambda:us-west-2:123456789012:accesspoint:*",
            "us-west-2",
            false,
            "Invalid ARN, Access Point Name contains invalid character, *",
          ],
          [
            "arn:aws:s3-object-lambda:us-west-2:123456789012:accesspoint:my.bucket",
            "us-west-2",
            false,
            "Invalid ARN, Access Point Name contains invalid character, .",
          ],
          [
            "arn:aws:s3-object-lambda:us-west-2:123456789012:accesspoint:mybucket:object:foo",
            "us-west-2",
            false,
            "Invalid ARN, Access Point ARN contains sub resources",
          ],
          [
            "arn:aws:s3-object-lambda:us-east-1:4123456789012:accesspoint/mybanner",
            "s3-external-1",
            false,
            "Client region s3-external-1 is not regional",
          ],
          [
            "arn:aws:s3-object-lambda:us-east-1:5123456789012:accesspoint/mybanner",
            "aws-global",
            false,
            "Client region aws-global is not regional",
          ],
          [
            "arn:aws-us-gov:s3-object-lambda:us-gov-west-1:123456789012:accesspoint/mybanner",
            "fips-us-gov-east-1",
            false,
            "Client FIPS region fips-us-gov-east-1 doesn't match region us-gov-west-1 in ARN",
            "aws-us-gov",
          ],
          [
            "arn:aws-us-gov:s3-object-lambda:us-gov-west-1:123456789012:accesspoint/mybanner",
            "fips-us-gov-east-1",
            true,
            "Client FIPS region fips-us-gov-east-1 doesn't match region us-gov-west-1 in ARN",
            "aws-us-gov",
          ],
        ];

        invalidLambdaConfigurations.forEach(([arn, clientRegion, useArnRegion, expectedError, clientPartition]) => {
          try {
            bucketHostname({
              bucketName: parseArn(arn),
              baseHostname: `s3.${region}.amazonaws.com`,
              isCustomEndpoint: false,
              useArnRegion,
              clientRegion,
              clientPartition,
            });
            // should never get here
            fail();
          } catch (e) {
            // should throw since these are error cases
            expect(1).toEqual(1);
          }
        });
      });
    });
  });
});
