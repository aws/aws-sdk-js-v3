import { normalizeProvider } from "@aws-sdk/util-middleware";

import { resolveEndpointsConfig } from "./resolveEndpointsConfig";
import { getEndpointFromRegion } from "./utils/getEndpointFromRegion";
import { normalizeEndpoint } from "./utils/normalizeEndpoint";

jest.mock("@aws-sdk/util-middleware");
jest.mock("./utils/getEndpointFromRegion");
jest.mock("./utils/normalizeEndpoint");

describe(resolveEndpointsConfig.name, () => {
  const mockEndpoint = {
    protocol: "http:",
    hostname: "localhost",
    path: "/",
  };

  const mockInput = {
    endpoint: mockEndpoint,
    useDualstackEndpoint: () => Promise.resolve(false),
    useFipsEndpoint: () => Promise.resolve(false),
  } as any;

  beforeEach(() => {
    (getEndpointFromRegion as jest.Mock).mockResolvedValueOnce(mockEndpoint);
    (normalizeEndpoint as jest.Mock).mockReturnValueOnce(() => Promise.resolve(mockEndpoint));
    (normalizeProvider as jest.Mock).mockImplementation((value) => value);
  });

  afterEach(() => {
    // expect(normalizeProvider).toHaveBeenCalledWith(mockInput.useDualstackEndpoint);
    jest.clearAllMocks();
  });

  describe("tls", () => {
    it.each([true, false])("returns %s when it's %s", (tls) => {
      expect(resolveEndpointsConfig({ ...mockInput, tls }).tls).toStrictEqual(tls);
    });

    it("returns true is input.tls is undefined", () => {
      expect(resolveEndpointsConfig({ ...mockInput }).tls).toStrictEqual(true);
    });
  });

  describe("isCustomEndpoint", () => {
    it("returns true when endpoint is defined", () => {
      expect(resolveEndpointsConfig(mockInput).isCustomEndpoint).toStrictEqual(true);
    });

    it("returns false when endpoint is not defined", () => {
      const { endpoint, ...mockInputWithoutEndpoint } = mockInput;
      expect(resolveEndpointsConfig(mockInputWithoutEndpoint).isCustomEndpoint).toStrictEqual(false);
    });
  });

  describe("endpoint", () => {
    it("returns from normalizeEndpoint when endpoint is defined", async () => {
      const endpoint = await resolveEndpointsConfig(mockInput).endpoint();
      expect(endpoint).toStrictEqual(mockEndpoint);
      expect(normalizeEndpoint).toHaveBeenCalledTimes(1);
      expect(normalizeEndpoint).toHaveBeenCalledWith(mockInput);
      expect(getEndpointFromRegion).not.toHaveBeenCalled();
    });

    it("returns from getEndpointFromRegion when endpoint is not defined", async () => {
      const { endpoint, ...mockInputWithoutEndpoint } = mockInput;
      const returnedEndpoint = await resolveEndpointsConfig(mockInputWithoutEndpoint).endpoint();
      expect(returnedEndpoint).toStrictEqual(mockEndpoint);
      expect(normalizeEndpoint).not.toHaveBeenCalled();
      expect(getEndpointFromRegion).toHaveBeenCalledTimes(1);
      expect(getEndpointFromRegion).toHaveBeenCalledWith(mockInputWithoutEndpoint);
    });
  });
});
