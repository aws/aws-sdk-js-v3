import { normalizeProvider } from "@aws-sdk/util-middleware";

import { resolveCustomEndpointsConfig } from "./resolveCustomEndpointsConfig";
import { normalizeEndpoint } from "./utils/normalizeEndpoint";

jest.mock("@aws-sdk/util-middleware");
jest.mock("./utils/normalizeEndpoint");

describe(resolveCustomEndpointsConfig.name, () => {
  const mockEndpoint = {
    protocol: "http:",
    hostname: "localhost",
    path: "/",
  };

  const mockInput = { endpoint: mockEndpoint, useDualstackEndpoint: () => Promise.resolve(false) } as any;

  beforeEach(() => {
    (normalizeEndpoint as jest.Mock).mockReturnValueOnce(() => Promise.resolve(mockEndpoint));
    (normalizeProvider as jest.Mock).mockImplementation((value) => value);
  });

  afterEach(() => {
    expect(normalizeEndpoint).toHaveBeenCalledTimes(1);
    expect(normalizeProvider).toHaveBeenCalledWith(mockInput.useDualstackEndpoint);
    jest.clearAllMocks();
  });

  describe("tls", () => {
    it.each([true, false])("returns %s when the value is passed", (tls) => {
      expect(resolveCustomEndpointsConfig({ ...mockInput, tls }).tls).toStrictEqual(tls);
    });

    it("returns true if input.tls is undefined", () => {
      expect(resolveCustomEndpointsConfig({ ...mockInput }).tls).toStrictEqual(true);
    });
  });

  it("returns true for isCustomEndpoint", () => {
    expect(resolveCustomEndpointsConfig(mockInput).isCustomEndpoint).toStrictEqual(true);
  });

  it("returns normalized endpoint", async () => {
    const endpoint = await resolveCustomEndpointsConfig(mockInput).endpoint();
    expect(endpoint).toStrictEqual(mockEndpoint);
    expect(normalizeEndpoint).toHaveBeenCalledWith(mockInput);
  });
});
