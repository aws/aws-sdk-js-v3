import { errorTypeRegistries, GetObject$ } from "@aws-sdk/client-s3";
import type { StaticStructureSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { S3RestXmlProtocol } from "./S3RestXmlProtocol";

describe("S3RestXmlProtocol", () => {
  const protocol = new S3RestXmlProtocol({
    defaultNamespace: "com.amazonaws.s3",
    errorTypeRegistries,
    xmlNamespace: "http://s3.amazonaws.com/doc/2006-03-01/",
  });

  const [, namespace, name, traits, input, output] = GetObject$;

  const input_BucketNotRequired = [
    3,
    "com.amazonaws.s3",
    "Input",
    {},
    ["Key", "Bucket"],
    [0, [0, { httpLabel: 1 }]],
    1,
  ] satisfies StaticStructureSchema;
  const input_BucketNotHttpLabel = [
    3,
    "com.amazonaws.s3",
    "Input",
    {},
    ["Key", "Bucket"],
    [0, 0],
    2,
  ] satisfies StaticStructureSchema;

  it("should throw an error if Bucket is missing from input top level, it is required, and it is an http label", async () => {
    await expect(
      async () =>
        await protocol.serializeRequest(
          {
            namespace,
            name,
            traits,
            input,
            output,
          },
          {
            Key: "test-key",
          },
          {
            async endpoint() {
              return {
                hostname: "localhost",
                path: "/",
                protocol: "https:",
              };
            },
          } as any
        )
    ).rejects.toThrowError("No value provided for input HTTP label: Bucket.");
  });

  it("should not throw if the Bucket member is not required", async () => {
    await protocol.serializeRequest(
      {
        namespace,
        name,
        traits,
        input: input_BucketNotRequired,
        output,
      },
      {
        Key: "test-key",
      },
      {
        async endpoint() {
          return {
            hostname: "localhost",
            path: "/",
            protocol: "https:",
          };
        },
      } as any
    );
  });

  it("should not throw if the Bucket member is not an HTTP Label", async () => {
    await protocol.serializeRequest(
      {
        namespace,
        name,
        traits,
        input: input_BucketNotHttpLabel,
        output,
      },
      {
        Key: "test-key",
      },
      {
        async endpoint() {
          return {
            hostname: "localhost",
            path: "/",
            protocol: "https:",
          };
        },
      } as any
    );
  });
});
