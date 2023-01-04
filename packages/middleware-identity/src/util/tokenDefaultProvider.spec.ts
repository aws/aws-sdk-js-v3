import { nodeProvider } from "@aws-sdk/token-providers";

import { tokenDefaultProvider } from "./tokenDefaultProvider";

jest.mock("@aws-sdk/token-providers");

const ONE_HOUR_IN_MS = 3600 * 1000;

describe(tokenDefaultProvider.name, () => {
  const mockOutputToken = () =>
    Promise.resolve({
      token: "mockOutputAccessToken",
      expiration: new Date(Date.now() + 2 * ONE_HOUR_IN_MS),
    });

  beforeEach(() => {
    (nodeProvider as jest.Mock).mockReturnValue(mockOutputToken);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return nodeProvider", () => {
    const mockInput = {};
    expect(tokenDefaultProvider(mockInput)).toBe(mockOutputToken);
    expect(nodeProvider).toHaveBeenCalledWith(mockInput);
  });
});
