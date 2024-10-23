import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { getChecksum } from "./getChecksum";
import { isStreaming } from "./isStreaming";
import { stringHasher } from "./stringHasher";

vi.mock("./isStreaming");
vi.mock("./stringHasher");

describe(getChecksum.name, () => {
  const mockOptions = {
    streamHasher: vi.fn(),
    checksumAlgorithmFn: vi.fn(),
    base64Encoder: vi.fn(),
  };

  const mockBody = "mockBody";
  const mockOutput = "mockOutput";
  const mockRawOutput = Buffer.from(mockOutput);

  beforeEach(() => {
    mockOptions.base64Encoder.mockResolvedValueOnce(mockOutput);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("gets checksum from streamHasher if body is streaming", async () => {
    vi.mocked(isStreaming).mockReturnValue(true);
    mockOptions.streamHasher.mockResolvedValue(mockRawOutput);
    const checksum = await getChecksum(mockBody, mockOptions);
    expect(checksum).toEqual(mockOutput);
    expect(stringHasher).not.toHaveBeenCalled();
    expect(mockOptions.streamHasher).toHaveBeenCalledWith(mockOptions.checksumAlgorithmFn, mockBody);
  });

  it("gets checksum from stringHasher if body is not streaming", async () => {
    vi.mocked(isStreaming).mockReturnValue(false);
    vi.mocked(stringHasher).mockResolvedValue(mockRawOutput);
    const checksum = await getChecksum(mockBody, mockOptions);
    expect(checksum).toEqual(mockOutput);
    expect(mockOptions.streamHasher).not.toHaveBeenCalled();
    expect(stringHasher).toHaveBeenCalledWith(mockOptions.checksumAlgorithmFn, mockBody);
  });
});
