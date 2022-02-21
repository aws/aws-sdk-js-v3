import { getChecksum } from "./getChecksum";
import { isStreaming } from "./isStreaming";
import { stringHasher } from "./stringHasher";

jest.mock("./isStreaming");
jest.mock("./stringHasher");

describe(getChecksum.name, () => {
  const mockOptions = {
    streamHasher: jest.fn(),
    checksumAlgorithmFn: jest.fn(),
    base64Encoder: jest.fn(),
  };

  const mockBody = "mockBody";
  const mockOutput = "mockOutput";

  beforeEach(() => {
    mockOptions.base64Encoder.mockResolvedValueOnce(mockOutput);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("gets checksum from streamHasher if body is streaming", async () => {
    (isStreaming as jest.Mock).mockReturnValue(true);
    const checksum = await getChecksum(mockBody, mockOptions);
    expect(checksum).toEqual(mockOutput);
    expect(stringHasher).not.toHaveBeenCalled();
    expect(mockOptions.streamHasher).toHaveBeenCalledTimes(1);
  });

  it("gets checksum from stringHasher if body is not streaming", async () => {
    (isStreaming as jest.Mock).mockReturnValue(false);
    const checksum = await getChecksum(mockBody, mockOptions);
    expect(checksum).toEqual(mockOutput);
    expect(stringHasher).toHaveBeenCalledTimes(1);
    expect(mockOptions.streamHasher).not.toHaveBeenCalled();
  });
});
