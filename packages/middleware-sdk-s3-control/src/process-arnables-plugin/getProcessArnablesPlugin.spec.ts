import { constructStack } from "@smithy/middleware-stack";
import { HttpRequest } from "@smithy/protocol-http";
import { Provider, RegionInfo } from "@smithy/types";

import { S3ControlResolvedConfig } from "../configurations";
import { getProcessArnablesPlugin } from "./getProcessArnablesPlugin";

describe("getProcessArnablesMiddleware", () => {
  type FakeOptions = {
    region: string;
    regionInfoProvider?: Provider<RegionInfo>;
    useAccelerateEndpoint?: boolean;
    useFipsEndpoint?: Provider<boolean>;
    useDualstackEndpoint?: Provider<boolean>;
    useArnRegion?: boolean;
  };
  const setupPluginOptions = (options: FakeOptions): S3ControlResolvedConfig => {
    return {
      useFipsEndpoint: () => Promise.resolve(false),
      useDualstackEndpoint: () => Promise.resolve(false),
      ...options,
      regionInfoProvider: options.regionInfoProvider ?? jest.fn().mockResolvedValue({ partition: "aws" }),
      region: jest.fn().mockResolvedValue(options.region),
      useArnRegion: jest.fn().mockResolvedValue(options.useArnRegion ?? false),
      isCustomEndpoint: false,
    };
  };

  const getStack = (baseHostname: string, options: S3ControlResolvedConfig) => {
    const stack = constructStack();
    stack.add(
      (next) => (args) => {
        args.request = new HttpRequest({
          hostname: baseHostname,
        });
        return next(args);
      },
      { step: "serialize" }
    );
    // Add middleware intercepting the stack and return early with the
    // execution information of stack.
    stack.add(
      (next, context) => async (args) => {
        return {
          response: "" as any,
          output: {
            request: args.request,
            context,
            input: args.input,
          },
        };
      },
      { step: "finalizeRequest" }
    );
    getProcessArnablesPlugin(options).applyToStack(stack);
    return stack;
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Outposts Access Point Arn", () => {
    it("should update endpoint, headers and context correctly", async () => {
      expect.assertions(4);
      const clientRegion = "us-west-2";
      const options = setupPluginOptions({
        region: clientRegion,
      });
      // Test with hostname with prefix
      const stack = getStack(`123456789012.s3-control.${clientRegion}.amazonaws.com`, options);
      const handler = stack.resolve((() => {}) as any, {});
      const {
        output: { request, context, input },
      } = (await handler({
        input: {
          Name: "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint",
        },
      })) as any;
      expect(request.hostname).toBe("s3-outposts.us-west-2.amazonaws.com");
      expect(request.headers).toMatchObject({ "x-amz-outpost-id": "op-01234567890123456" });
      expect(context).toMatchObject({ signing_service: "s3-outposts" });
      expect(input.AccountId).toBe("123456789012");
    });

    it("handle useArnRegion config", async () => {
      expect.assertions(4);
      const clientRegion = "us-west-2";
      const options = setupPluginOptions({
        region: clientRegion,
        useArnRegion: true,
      });
      const stack = getStack(`s3-control.${clientRegion}.amazonaws.com`, options);
      const handler = stack.resolve((() => {}) as any, {});
      const {
        output: { request, context, input },
      } = (await handler({
        input: {
          Name: "arn:aws:s3-outposts:us-east-1:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint",
        },
      })) as any;
      expect(request.hostname).toBe("s3-outposts.us-east-1.amazonaws.com");
      expect(request.headers).toMatchObject({ "x-amz-outpost-id": "op-01234567890123456" });
      expect(context).toMatchObject({ signing_service: "s3-outposts", signing_region: "us-east-1" });
      expect(input.AccountId).toBe("123456789012");
    });

    it("should throw if region is not matched", async () => {
      expect.assertions(1);
      const clientRegion = "us-west-2";
      const options = setupPluginOptions({
        region: clientRegion,
      });
      const stack = getStack(`s3-control.${clientRegion}.amazonaws.com`, options);
      const handler = stack.resolve((() => {}) as any, {});
      try {
        await handler({
          input: {
            Name: "arn:aws:s3-outposts:us-east-1:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint",
          },
        });
      } catch (e) {
        expect(e.message).toContain("Region in ARN is incompatible, got us-east-1 but expected us-west-2");
      }
    });

    it("should throw if partition is not matched", async () => {
      expect.assertions(1);
      const clientRegion = "us-west-2";
      const hostname = `s3-control.${clientRegion}.amazonaws.com`;
      const options = setupPluginOptions({
        region: clientRegion,
        useArnRegion: true,
      });
      const stack = getStack(hostname, options);
      const handler = stack.resolve((() => {}) as any, {});
      try {
        await handler({
          input: {
            Name: "arn:aws-cn:s3-outposts:cn-north-1:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint",
          },
        });
      } catch (e) {
        expect(e.message).toContain('Partition in ARN is incompatible, got "aws-cn" but expected "aws"');
      }
    });

    it("should update endpoint, headers and context correctly in us gov partition", async () => {
      expect.assertions(4);
      const clientRegion = "us-gov-east-1";
      const hostname = `s3-control.${clientRegion}.amazonaws.com`;
      const options = setupPluginOptions({
        region: clientRegion,
        useArnRegion: true,
        regionInfoProvider: () => Promise.resolve({ hostname, partition: "aws-us-gov" }),
      });
      const stack = getStack(hostname, options);
      const handler = stack.resolve((() => {}) as any, {});
      const {
        output: { request, context, input },
      } = (await handler({
        input: {
          Name: "arn:aws-us-gov:s3-outposts:us-gov-east-1:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint",
        },
      })) as any;
      expect(request.hostname).toBe("s3-outposts.us-gov-east-1.amazonaws.com");
      expect(request.headers).toMatchObject({ "x-amz-outpost-id": "op-01234567890123456" });
      expect(input.AccountId).toBe("123456789012");
      expect(context).toMatchObject({ signing_service: "s3-outposts", signing_region: "us-gov-east-1" });
    });

    it("should compute hostname for fips region", async () => {
      expect.assertions(4);
      const clientRegion = "us-gov-east-1";
      const hostname = `s3-control.${clientRegion}.amazonaws.com`;
      const options = setupPluginOptions({
        region: clientRegion,
        regionInfoProvider: () => Promise.resolve({ hostname, partition: "aws-us-gov" }),
        useArnRegion: true,
        useFipsEndpoint: () => Promise.resolve(true),
      });
      const stack = getStack(hostname, options);
      const handler = stack.resolve((() => {}) as any, {});
      const {
        output: { request, context, input },
      } = (await handler({
        input: {
          Name: "arn:aws-us-gov:s3-outposts:us-gov-east-1:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint",
        },
      })) as any;
      expect(request.hostname).toBe("s3-outposts-fips.us-gov-east-1.amazonaws.com");
      expect(request.headers).toMatchObject({ "x-amz-outpost-id": "op-01234567890123456" });
      expect(input.AccountId).toBe("123456789012");
      expect(context).toMatchObject({ signing_service: "s3-outposts", signing_region: "us-gov-east-1" });
    });

    it("should validate dualstack flag", async () => {
      expect.assertions(1);
      const clientRegion = "us-west-2";
      const options = setupPluginOptions({
        region: clientRegion,
        useDualstackEndpoint: () => Promise.resolve(true),
      });
      const stack = getStack(`s3-control.${clientRegion}.amazonaws.com`, options);
      const handler = stack.resolve((() => {}) as any, {});
      try {
        await handler({
          input: {
            Name: "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint",
          },
        });
      } catch (e) {
        expect(e.message).toContain("Dualstack endpoint is not supported with Outpost");
      }
    });

    it("should validate invalid access point Arns", async () => {
      const message1 = "Outpost ARN should have resource outpost/{outpostId}/accesspoint/{accesspointName}";
      const message2 = "Outpost ARN should have resource outpost:{outpostId}:accesspoint:{accesspointName}";
      const cases = [
        { arn: "arn:aws:s3-outposts:us-west-2:123456789012:outpost", message: message1 },
        { arn: "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456", message: message2 },
        { arn: "arn:aws:s3-outposts:us-west-2:123456789012:outpost:myaccesspoint", message: message2 },
      ];
      expect.assertions(cases.length);
      for (const { arn, message } of cases) {
        const stack = getStack(
          "s3-control.us-west-2.amazonaws.com",
          setupPluginOptions({
            region: "us-west-2",
          })
        );
        const handler = stack.resolve((() => {}) as any, {});
        await expect(handler({ input: { Name: arn } })).rejects.toThrow(new Error(message));
      }
    });

    it("should handle non-Arn parameter", async () => {
      const accountId = "123456789012";
      const hostname = `${accountId}.s3-control.us-west-2.amazonaws.com`;
      const stack = getStack(
        hostname,
        setupPluginOptions({
          region: "us-west-2",
        })
      );
      const handler = stack.resolve((() => {}) as any, {});
      const {
        output: { request, context },
      } = (await handler({
        input: { Name: "myaccesspoint" },
      })) as any;
      expect(request.hostname).toBe(hostname);
      expect(context["signing_service"]).toBe(undefined); //signed by 's3'
    });

    it("should throw when Account ID mismatches", async () => {
      const arn = "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:accesspoint:myaccesspoint";
      const AccountId = "923456789012";
      const stack = getStack("s3-control.us-west-2.amazonaws.com", setupPluginOptions({ region: "us-west-2" }));
      const handler = stack.resolve((() => {}) as any, {});
      await expect(handler({ input: { Name: arn, AccountId } })).rejects.toThrow(
        new Error("AccountId is incompatible with account id inferred from Name")
      );
    });
  });

  describe("Outpost Bucket Arn", () => {
    it("should update endpoint, headers and context correctly", async () => {
      expect.assertions(4);
      const clientRegion = "us-west-2";
      const options = setupPluginOptions({ region: clientRegion });
      const stack = getStack(`s3-control.${clientRegion}.amazonaws.com`, options);
      const handler = stack.resolve((() => {}) as any, {});
      const {
        output: { request, context, input },
      } = (await handler({
        input: {
          Bucket: "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:bucket:mybucket",
        },
      })) as any;
      expect(request.hostname).toBe(`s3-outposts.${clientRegion}.amazonaws.com`);
      expect(request.headers).toMatchObject({ "x-amz-outpost-id": "op-01234567890123456" });
      expect(input.AccountId).toBe("123456789012");
      expect(context).toMatchObject({ signing_service: "s3-outposts" });
    });

    it("handle useArnRegion config", async () => {
      expect.assertions(4);
      const clientRegion = "us-west-2";
      const options = setupPluginOptions({
        region: clientRegion,
        useArnRegion: true,
      });
      const stack = getStack(`s3-control.${clientRegion}.amazonaws.com`, options);
      const handler = stack.resolve((() => {}) as any, {});
      const {
        output: { request, context, input },
      } = (await handler({
        input: {
          Bucket: "arn:aws:s3-outposts:us-east-1:123456789012:outpost:op-01234567890123456:bucket:mybucket",
        },
      })) as any;
      expect(request.hostname).toBe("s3-outposts.us-east-1.amazonaws.com");
      expect(request.headers).toMatchObject({ "x-amz-outpost-id": "op-01234567890123456" });
      expect(input.AccountId).toBe("123456789012");
      expect(context).toMatchObject({ signing_service: "s3-outposts", signing_region: "us-east-1" });
    });

    it("should throw if region is not matched", async () => {
      expect.assertions(1);
      const clientRegion = "us-west-2";
      const options = setupPluginOptions({ region: clientRegion });
      const stack = getStack(`s3-control.${clientRegion}.amazonaws.com`, options);
      const handler = stack.resolve((() => {}) as any, {});
      try {
        await handler({
          input: {
            Bucket: "arn:aws:s3-outposts:us-east-1:123456789012:outpost:op-01234567890123456:bucket:mybucket",
          },
        });
      } catch (e) {
        expect(e.message).toContain("Region in ARN is incompatible, got us-east-1 but expected us-west-2");
      }
    });

    it("should throw if partition is not matched", async () => {
      expect.assertions(1);
      const clientRegion = "us-west-2";
      const hostname = `s3-control.${clientRegion}.amazonaws.com`;
      const options = setupPluginOptions({
        region: clientRegion,
        useArnRegion: true,
      });
      const stack = getStack(hostname, options);
      const handler = stack.resolve((() => {}) as any, {});
      try {
        await handler({
          input: {
            Bucket: "arn:aws-cn:s3-outposts:cn-north-1:123456789012:outpost:op-01234567890123456:bucket:mybucket",
          },
        });
      } catch (e) {
        expect(e.message).toContain('Partition in ARN is incompatible, got "aws-cn" but expected "aws"');
      }
    });

    it("should update endpoint, headers and context correctly in us gov partition", async () => {
      expect.assertions(4);
      const clientRegion = "us-gov-east-1";
      const hostname = `s3-control.${clientRegion}.amazonaws.com`;
      const options = setupPluginOptions({
        region: clientRegion,
        useArnRegion: true,
        regionInfoProvider: () => Promise.resolve({ hostname, partition: "aws-us-gov" }),
      });
      const stack = getStack(hostname, options);
      const handler = stack.resolve((() => {}) as any, {});
      const {
        output: { request, context, input },
      } = (await handler({
        input: {
          Bucket: "arn:aws-us-gov:s3-outposts:us-gov-east-1:123456789012:outpost:op-01234567890123456:bucket:mybucket",
        },
      })) as any;
      expect(request.hostname).toBe("s3-outposts.us-gov-east-1.amazonaws.com");
      expect(request.headers).toMatchObject({ "x-amz-outpost-id": "op-01234567890123456" });
      expect(input.AccountId).toBe("123456789012");
      expect(context).toMatchObject({ signing_service: "s3-outposts", signing_region: "us-gov-east-1" });
    });

    it("should compute hostname for fips region", async () => {
      expect.assertions(4);
      const clientRegion = "us-gov-east-1";
      const hostname = `s3-control.${clientRegion}.amazonaws.com`;
      const options = setupPluginOptions({
        region: clientRegion,
        regionInfoProvider: () => Promise.resolve({ hostname, partition: "aws-us-gov" }),
        useArnRegion: true,
        useFipsEndpoint: () => Promise.resolve(true),
      });
      const stack = getStack(hostname, options);
      const handler = stack.resolve((() => {}) as any, {});
      const {
        output: { request, context, input },
      } = (await handler({
        input: {
          Bucket: "arn:aws-us-gov:s3-outposts:us-gov-east-1:123456789012:outpost:op-01234567890123456:bucket:mybucket",
        },
      })) as any;
      expect(request.hostname).toBe("s3-outposts-fips.us-gov-east-1.amazonaws.com");
      expect(request.headers).toMatchObject({ "x-amz-outpost-id": "op-01234567890123456" });
      expect(input.AccountId).toBe("123456789012");
      expect(context).toMatchObject({ signing_service: "s3-outposts", signing_region: "us-gov-east-1" });
    });

    it("should update endpoint, headers and context correctly if client is fips region", async () => {
      expect.assertions(4);
      const clientRegion = "fip-us-gov-east-1";
      const hostname = `s3-control.${clientRegion}.amazonaws.com`;
      const options = setupPluginOptions({
        region: clientRegion,
        useArnRegion: true,
        regionInfoProvider: () => Promise.resolve({ hostname, partition: "aws-us-gov" }),
      });
      const stack = getStack(hostname, options);
      const handler = stack.resolve((() => {}) as any, {});
      const {
        output: { request, context, input },
      } = (await handler({
        input: {
          Bucket: "arn:aws-us-gov:s3-outposts:us-gov-east-1:123456789012:outpost:op-01234567890123456:bucket:mybucket",
        },
      })) as any;
      expect(request.hostname).toBe("s3-outposts.us-gov-east-1.amazonaws.com");
      expect(request.headers).toMatchObject({ "x-amz-outpost-id": "op-01234567890123456" });
      expect(input.AccountId).toBe("123456789012");
      expect(context).toMatchObject({ signing_service: "s3-outposts", signing_region: "us-gov-east-1" });
    });

    it("should validate dualstack flag", async () => {
      expect.assertions(1);
      const clientRegion = "us-west-2";
      const options = setupPluginOptions({
        region: clientRegion,
        useDualstackEndpoint: () => Promise.resolve(true),
      });
      const stack = getStack(`s3-control.${clientRegion}.amazonaws.com`, options);
      const handler = stack.resolve((() => {}) as any, {});
      try {
        await handler({
          input: {
            Bucket: "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:bucket:mybucket",
          },
        });
      } catch (e) {
        expect(e.message).toContain("Dualstack endpoint is not supported with Outpost");
      }
    });

    it("should validate invalid access point Arns", async () => {
      const message = "Outpost Bucket ARN should have resource outpost:{outpostId}:bucket:{bucketName}";
      const cases = [
        { arn: "arn:aws:s3-outposts:us-west-2:123456789012:outpost:bucket", message },
        { arn: "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:bucket", message },
        {
          arn: "arn:aws:s3-outposts:us-west-2::outpost:op-01234567890123456:bucket:mybucket",
          message: "Access point ARN accountID does not match regex '[0-9]{12}'",
        },
      ];
      expect.assertions(cases.length);
      for (const { arn, message } of cases) {
        const stack = getStack(
          "s3-control.us-west-2.amazonaws.com",
          setupPluginOptions({
            region: "us-west-2",
          })
        );
        const handler = stack.resolve((() => {}) as any, {});
        await expect(handler({ input: { Bucket: arn } })).rejects.toThrow(new Error(message));
      }
    });

    it("should throw when Account ID mismatches", async () => {
      const arn = "arn:aws:s3-outposts:us-west-2:123456789012:outpost:op-01234567890123456:bucket:mybucket";
      const AccountId = "923456789012";
      const stack = getStack(
        "s3-control.us-west-2.amazonaws.com",
        setupPluginOptions({
          region: "us-west-2",
        })
      );
      const handler = stack.resolve((() => {}) as any, {});
      await expect(handler({ input: { Bucket: arn, AccountId } })).rejects.toThrow(
        new Error("AccountId is incompatible with account id inferred from Bucket")
      );
    });
  });
});
