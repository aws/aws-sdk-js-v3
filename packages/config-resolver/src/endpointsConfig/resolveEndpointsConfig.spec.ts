import { normalizeProvider } from "@aws-sdk/util-middleware";

import { resolveEndpointsConfig } from "./resolveEndpointsConfig";
import { getEndpointFromRegion } from "./utils/getEndpointFromRegion";

jest.mock("@aws-sdk/util-middleware");
jest.mock("./utils/getEndpointFromRegion");

describe(resolveEndpointsConfig.name, () => {
  const mockEndpoint = {
    protocol: "http:",
    hostname: "localhost",
    path: "/",
  };

  const mockInput = {
    endpoint: mockEndpoint,
    urlParser: jest.fn(() => mockEndpoint),
    useDualstackEndpoint: () => Promise.resolve(false),
    useFipsEndpoint: () => Promise.resolve(false),
  } as any;

  beforeEach(() => {
    (getEndpointFromRegion as jest.Mock).mockResolvedValueOnce(mockEndpoint);
    (normalizeProvider as jest.Mock).mockImplementation((input) =>
      typeof input === "function" ? input : () => Promise.resolve(input)
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("tls", () => {
    afterEach(() => {
      expect(normalizeProvider).toHaveBeenNthCalledWith(1, mockInput.useDualstackEndpoint);
    });

    it.each([true, false])("returns %s when it's %s", (tls) => {
      expect(resolveEndpointsConfig({ ...mockInput, tls }).tls).toStrictEqual(tls);
    });

    it("returns true is input.tls is undefined", () => {
      expect(resolveEndpointsConfig({ ...mockInput }).tls).toStrictEqual(true);
    });
  });

  describe("isCustomEndpoint", () => {
    afterEach(() => {
      expect(normalizeProvider).toHaveBeenNthCalledWith(1, mockInput.useDualstackEndpoint);
    });

    it("returns true when endpoint is defined", () => {
      expect(resolveEndpointsConfig(mockInput).isCustomEndpoint).toStrictEqual(true);
    });

    it("returns false when endpoint is not defined", () => {
      const { endpoint, ...mockInputWithoutEndpoint } = mockInput;
      expect(resolveEndpointsConfig(mockInputWithoutEndpoint).isCustomEndpoint).toStrictEqual(false);
    });
  });

  it("returns false when useDualstackEndpoint is not defined", async () => {
    const useDualstackEndpoint = await resolveEndpointsConfig({
      ...mockInput,
      useDualstackEndpoint: undefined,
    }).useDualstackEndpoint();
    expect(useDualstackEndpoint).toStrictEqual(false);
  });

  describe("endpoint", () => {
    afterEach(() => {
      expect(normalizeProvider).toHaveBeenNthCalledWith(1, mockInput.useDualstackEndpoint);
    });

    describe("returns from normalizeProvider when endpoint is defined", () => {
      afterEach(() => {
        expect(normalizeProvider).toHaveBeenCalledTimes(2);
        expect(normalizeProvider).toHaveBeenNthCalledWith(2, mockInput.endpoint);
        expect(getEndpointFromRegion).not.toHaveBeenCalled();
      });

      it("calls urlParser endpoint is of type string", async () => {
        const mockEndpointString = "http://localhost/";
        const endpoint = await resolveEndpointsConfig({ ...mockInput, endpoint: mockEndpointString }).endpoint();
        expect(endpoint).toStrictEqual(mockEndpoint);
        expect(mockInput.urlParser).toHaveBeenCalledWith(mockEndpointString);
      });

      it("passes endpoint to normalize if not string", async () => {
        const endpoint = await resolveEndpointsConfig(mockInput).endpoint();
        expect(endpoint).toStrictEqual(mockEndpoint);
        expect(mockInput.urlParser).not.toHaveBeenCalled();
      });
    });

    it("returns from getEndpointFromRegion when endpoint is not defined", async () => {
      const { endpoint, ...mockInputWithoutEndpoint } = mockInput;
      const returnedEndpoint = await resolveEndpointsConfig(mockInputWithoutEndpoint).endpoint();
      expect(returnedEndpoint).toStrictEqual(mockEndpoint);
      expect(normalizeProvider).toHaveBeenCalledTimes(1);
      expect(getEndpointFromRegion).toHaveBeenCalledTimes(1);
      expect(getEndpointFromRegion).toHaveBeenCalledWith(mockInputWithoutEndpoint);
    });
  });
});
