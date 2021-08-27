import { resolveCustomEndpointsConfig } from "./resolveCustomEndpointsConfig";
import { normalizeEndpoint } from "./utils/normalizeEndpoint";

jest.mock("./utils/normalizeEndpoint");

describe(resolveCustomEndpointsConfig.name, () => {
  const mockEndpoint = {
    protocol: "http:",
    hostname: "localhost",
    path: "/",
  };

  const mockInput = { endpoint: mockEndpoint } as any;

  beforeEach(() => {
    (normalizeEndpoint as jest.Mock).mockReturnValueOnce(() => Promise.resolve(mockEndpoint));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("tls", () => {
    it.each([true, false])("returns %s when it's %s", (tls) => {
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
    expect(normalizeEndpoint).toHaveBeenCalledTimes(1);
    expect(normalizeEndpoint).toHaveBeenCalledWith(mockInput);
  });
});
