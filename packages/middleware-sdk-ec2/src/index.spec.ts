import { credentials, endpoint, MockSha256, region } from "./fixture";
import { copySnapshotPresignedUrlMiddleware } from "./index";

const nextHandler = jest.fn();
const handler = copySnapshotPresignedUrlMiddleware({
  credentials,
  endpoint,
  region,
  sha256: MockSha256,
  signingEscapePath: true,
})(nextHandler, {} as any);

describe("middleware-sdk-ec2", () => {
  beforeEach(() => {
    jest.clearAllMocks();
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
    expect(presignedUrl).toMatch(/https%3A%2F%2Fec2.src-region.amazonaws.com%2F%3F/);
    expect(presignedUrl).toMatch(/Action%3DCopySnapshot/);
    expect(presignedUrl).toMatch(/Version%3D2016\-11\-15/);
    expect(presignedUrl).toMatch(
      /DestinationRegion%3Dmock\-region%26SourceRegion%3Dsrc\-region%26SourceSnapshotId%3Dsnap\-123456789/
    );
    expect(presignedUrl).toMatch(/X\-Amz\-Security\-Token%3Dsession/);
    expect(presignedUrl).toMatch(/X\-Amz\-Algorithm%3DAWS4\-HMAC\-SHA256/);
    expect(presignedUrl).toMatch(/X\-Amz\-SignedHeaders%3Dhost/);
    expect(presignedUrl).toMatch(/X\-Amz\-Credential%3D/);
    expect(presignedUrl).toMatch(/X\-Amz\-Date%3D/);
    expect(presignedUrl).toMatch(/X-Amz-Expires%3D([\d]+)/);
    expect(presignedUrl).toMatch(/X-Amz-Signature%3D000000/);
  });

  it("does not modify input if PresignedUrl has already  been set", async () => {
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
});
