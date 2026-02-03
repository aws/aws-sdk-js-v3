import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { getChecksum } from "./getChecksum";
import { stringHasher } from "./stringHasher";

vi.mock("./stringHasher");

describe(getChecksum.name, () => {
  const mockOptions = {
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

  it("gets checksum from stringHasher", async () => {
    vi.mocked(stringHasher).mockResolvedValue(mockRawOutput);
    const checksum = await getChecksum(mockBody, mockOptions);
    expect(checksum).toEqual(mockOutput);
    expect(stringHasher).toHaveBeenCalledWith(mockOptions.checksumAlgorithmFn, mockBody);
  });
});
