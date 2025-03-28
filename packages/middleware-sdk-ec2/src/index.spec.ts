import { HttpRequest } from "@smithy/protocol-http";
import { EndpointV2 } from "@smithy/types";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { credentials, MockSha256, region } from "./fixture";
import { copySnapshotPresignedUrlMiddleware } from "./index";

const nextHandler = vi.fn();
const handler = copySnapshotPresignedUrlMiddleware({
  credentials,
  region,
  sha256: MockSha256,
  signingEscapePath: true,
  endpointProvider: async () =>
    ({
      url: {
        hostname: "ec2.src-region.test-host.com",
      },
    } as EndpointV2),
} as any)(nextHandler, {} as any);

describe("middleware-sdk-ec2", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("generates PresignedUrl and DestinationRegion parameters", async () => {
    const params = {
      SourceRegion: "src-region",
      SourceSnapshotId: "snap-123456789",
    };
    await handler({ input: params });
    expect(nextHandler.mock.calls.length).toBe(1);
    const middlewareOutput = nextHandler.mock.calls[0][0];
    expect(middlewareOutput.input.SourceRegion).toEqual(params.SourceRegion);
    expect(middlewareOutput.input.SourceSnapshotId).toEqual(params.SourceSnapshotId);
    expect(middlewareOutput.input.DestinationRegion).toEqual(await region());
    const presignedUrl = middlewareOutput.input.PresignedUrl;
    expect(presignedUrl).not.toMatch(/https\:\/\/ec2.src-region.amazonaws.com\/\?/);
    expect(presignedUrl).toMatch(/https\:\/\/ec2.src-region.test-host.com\/\?/);
    expect(presignedUrl).toMatch(/Action\=CopySnapshot/);
    expect(presignedUrl).toMatch(/Version\=2016\-11\-15/);
    expect(presignedUrl).toMatch(
      /DestinationRegion\=mock\-region\&SourceRegion\=src\-region\&SourceSnapshotId\=snap\-123456789/
    );
    expect(presignedUrl).toMatch(/X\-Amz\-Security\-Token\=session/);
    expect(presignedUrl).toMatch(/X\-Amz\-Algorithm\=AWS4\-HMAC\-SHA256/);
    expect(presignedUrl).toMatch(/X\-Amz\-SignedHeaders\=host/);
    expect(presignedUrl).toMatch(/X\-Amz\-Credential\=/);
    expect(presignedUrl).toMatch(/X\-Amz\-Date\=/);
    expect(presignedUrl).toMatch(/X-Amz-Expires\=([\d]+)/);
    expect(presignedUrl).toMatch(/X-Amz-Signature\=000000/);
  });

  it("does not modify input if PresignedUrl has already been set", async () => {
    const params = {
      PresignedUrl: "provided",
      SourceRegion: "src-region",
      SourceSnapshotId: "snap-123456789",
    };
    await handler({ input: params });
    expect(nextHandler.mock.calls.length).toBe(1);
    const middlewareOutput = nextHandler.mock.calls[0][0];
    expect(middlewareOutput.input.SourceRegion).toEqual(params.SourceRegion);
    expect(middlewareOutput.input.PresignedUrl).toEqual(params.PresignedUrl);
  });

  it("serializes the presignedUrl into the request body", async () => {
    const params = {
      SourceRegion: "src-region",
      SourceSnapshotId: "snap-123456789",
    };
    await handler({ input: params, request: new HttpRequest({ body: "" }) });
    expect(nextHandler.mock.calls.length).toBe(1);
    const middlewareOutput = nextHandler.mock.calls[0][0];
    expect(middlewareOutput.request.body).toContain(
      `&DestinationRegion=mock-region&PresignedUrl=https%3A%2F%2Fec2.src-region.test-host.com%2F%3FAction%3DCopySnapshot`
    );
  });
});
