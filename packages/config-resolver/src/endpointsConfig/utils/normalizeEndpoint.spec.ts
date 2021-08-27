import { normalizeEndpoint } from "./normalizeEndpoint";

describe(normalizeEndpoint.name, () => {
  const mockUrlParser = jest.fn();
  const mockEndpoint = {
    protocol: "http:",
    hostname: "localhost",
    path: "/",
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("returns parsed Url if endpoint is a string", async () => {
    const mockEndpointStr = "http://localhost/";
    mockUrlParser.mockReturnValue(mockEndpoint);
    const endpoint = normalizeEndpoint({
      endpoint: mockEndpointStr,
      urlParser: mockUrlParser,
    } as any);

    expect(mockUrlParser).toHaveBeenCalledTimes(1);
    expect(mockUrlParser).toHaveBeenCalledWith(mockEndpointStr);
    expect(await endpoint()).toEqual(mockEndpoint);
  });

  it("returns object if endpoint is an object", async () => {
    const mockEndpointObj = mockEndpoint;
    const endpoint = normalizeEndpoint({
      endpoint: mockEndpointObj,
      urlParser: mockUrlParser,
    } as any);

    expect(mockUrlParser).not.toHaveBeenCalled();
    expect(await endpoint()).toEqual(mockEndpoint);
  });

  it("returns provider if endpoint is already a provider", async () => {
    const mockEndpointProvider = () => Promise.resolve(mockEndpoint);
    const endpoint = normalizeEndpoint({
      endpoint: mockEndpointProvider,
      urlParser: mockUrlParser,
    } as any);

    expect(mockUrlParser).not.toHaveBeenCalled();
    expect(await endpoint()).toEqual(mockEndpoint);
  });
});
