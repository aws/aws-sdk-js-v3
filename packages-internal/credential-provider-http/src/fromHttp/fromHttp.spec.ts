import { HttpResponse } from "@smithy/core/protocols";
import { Readable } from "node:stream";
import { afterAll, beforeEach, describe, expect, test as it, vi } from "vitest";

import { fromHttp } from "./fromHttp";
import * as helpers from "./requestHelpers";

const credentials = {
  accessKeyId: "ABC",
  secretAccessKey: "abcd",
  sessionToken: "abcde",
  expiration: new Date(),
};

const mockToken = "abcd";

const mockHandle = vi.fn().mockResolvedValue({
  response: new HttpResponse({
    statusCode: 200,
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([""]),
  }),
});

const mockDestroy = vi.fn();

vi.mock("@smithy/node-http-handler", () => ({
  NodeHttpHandler: (() => {
    const getImpl = () => ({
      destroy: mockDestroy,
      handle: mockHandle,
    });
    const impl = Object.assign(vi.fn().mockImplementation(getImpl), {
      create: () => getImpl(),
    });
    return impl;
  })(),
  streamCollector: vi.fn(),
}));

vi.spyOn(helpers, "getCredentials").mockReturnValue(Promise.resolve(credentials));

vi.mock("fs/promises", () => ({
  default: {
    async readFile() {
      return mockToken;
    },
  },
}));

describe(fromHttp.name, () => {
  beforeEach(() => {
    mockHandle.mockClear();
    mockDestroy.mockClear();
  });

  afterAll(() => {
    vi.resetAllMocks();
  });

  it("uses the full uri", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://u1.aws",
      awsContainerCredentialsRelativeUri: "",
    });

    await provider();

    expect(mockHandle).toHaveBeenCalledWith(helpers.createGetRequest(new URL("https://u1.aws")), {
      requestTimeout: 1000,
    });
  });

  it("uses the relative uri", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "",
      awsContainerCredentialsRelativeUri: "/some-path",
    });

    await provider();

    expect(mockHandle).toHaveBeenCalledWith(helpers.createGetRequest(new URL("http://169.254.170.2/some-path")), {
      requestTimeout: 1000,
    });
  });

  it("relative uri should take precedence over full uri", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://u1.aws",
      awsContainerCredentialsRelativeUri: "/credential-path",
    });

    await provider();

    expect(mockHandle).toHaveBeenCalledWith(helpers.createGetRequest(new URL("http://169.254.170.2/credential-path")), {
      requestTimeout: 1000,
    });
  });

  it("can use the token", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://t1.aws",
      awsContainerCredentialsRelativeUri: "",
      awsContainerAuthorizationToken: mockToken,
    });

    const request = helpers.createGetRequest(new URL("https://t1.aws"));
    request.headers.Authorization = mockToken;

    await provider();

    expect(mockHandle).toHaveBeenCalledWith(request, { requestTimeout: 1000 });
  });

  it("can use the token file", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://t2.aws",
      awsContainerCredentialsRelativeUri: "",
      awsContainerAuthorizationTokenFile: "some-file",
    });

    const request = helpers.createGetRequest(new URL("https://t2.aws"));
    request.headers.Authorization = mockToken;

    await provider();

    expect(mockHandle).toHaveBeenCalledWith(request, { requestTimeout: 1000 });
  });

  it("token file takes precedence over token", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://t3.aws",
      awsContainerCredentialsRelativeUri: "",
      awsContainerAuthorizationToken: "static-token",
      awsContainerAuthorizationTokenFile: "some-file",
    });

    const request = helpers.createGetRequest(new URL("https://t3.aws"));
    request.headers.Authorization = mockToken;

    await provider();

    expect(mockHandle).toHaveBeenCalledWith(request, { requestTimeout: 1000 });
  });

  it("rejects token containing \\r\\n", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://t4.aws",
      awsContainerCredentialsRelativeUri: "",
      awsContainerAuthorizationToken: "Bearer token\r\nX-Injected: header",
    });

    await expect(provider()).rejects.toThrow("Authorization token contains invalid \\r\\n sequence.");
  });

  it("passes custom timeout as requestTimeout to handle()", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://u1.aws",
      awsContainerCredentialsRelativeUri: "",
      timeout: 5000,
    });

    await provider();

    expect(mockHandle).toHaveBeenCalledWith(expect.anything(), { requestTimeout: 5000 });
  });

  it("destroys the request handler after the provider resolves", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://u1.aws",
      awsContainerCredentialsRelativeUri: "",
    });

    await provider();

    expect(mockDestroy).toHaveBeenCalledTimes(1);
  });

  it("destroys the request handler even when the request fails", async () => {
    mockHandle.mockRejectedValueOnce(new Error("network error"));
    mockHandle.mockRejectedValueOnce(new Error("network error"));
    mockHandle.mockRejectedValueOnce(new Error("network error"));
    mockHandle.mockRejectedValueOnce(new Error("network error"));

    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://u1.aws",
      awsContainerCredentialsRelativeUri: "",
    });

    await expect(provider()).rejects.toThrow();

    expect(mockDestroy).toHaveBeenCalledTimes(1);
  });
});
