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
  const mockRawOutput = Buffer.from(mockOutput);

  beforeEach(() => {
    mockOptions.base64Encoder.mockResolvedValueOnce(mockOutput);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("gets checksum from streamHasher if body is streaming", async () => {
    (isStreaming as jest.Mock).mockReturnValue(true);
    mockOptions.streamHasher.mockResolvedValue(mockRawOutput);
    const checksum = await getChecksum(mockBody, mockOptions);
    expect(checksum).toEqual(mockOutput);
    expect(stringHasher).not.toHaveBeenCalled();
    expect(mockOptions.streamHasher).toHaveBeenCalledWith(mockOptions.checksumAlgorithmFn, mockBody);
  });

  it("gets checksum from stringHasher if body is not streaming", async () => {
    (isStreaming as jest.Mock).mockReturnValue(false);
    (stringHasher as jest.Mock).mockResolvedValue(mockRawOutput);
    const checksum = await getChecksum(mockBody, mockOptions);
    expect(checksum).toEqual(mockOutput);
    expect(mockOptions.streamHasher).not.toHaveBeenCalled();
    expect(stringHasher).toHaveBeenCalledWith(mockOptions.checksumAlgorithmFn, mockBody);
  });
});
