import { HttpResponse } from "@smithy/core/protocols";
import { Readable } from "node:stream";
import { afterAll, describe, expect, test as it, vi } from "vitest";

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

let createCallCount = 0;

vi.mock("@smithy/node-http-handler", () => ({
  NodeHttpHandler: (() => {
    const getImpl = () => ({
      destroy: () => {},
      handle: mockHandle,
    });
    const impl = Object.assign(vi.fn().mockImplementation(getImpl), {
      create: () => {
        createCallCount++;
        return getImpl();
      },
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

  it("can use the token", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://t1.aws",
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
      awsContainerAuthorizationTokenFile: "some-file",
    });

    const request = helpers.createGetRequest(new URL("https://t1.aws"));
    request.headers.Authorization = mockToken;

    await provider();

    expect(mockHandle).toHaveBeenCalledWith(request, { requestTimeout: 1000 });
  });

  it("passes custom timeout as requestTimeout to handle()", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://u1.aws",
      timeout: 5000,
    });

    await provider();

    expect(mockHandle).toHaveBeenCalledWith(expect.anything(), { requestTimeout: 5000 });
  });

  it("reuses a single NodeHttpHandler instance across multiple calls", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://u1.aws",
    });

    await provider();
    await provider();
    await provider();

    // NodeHttpHandler.create() should only be called once (cached at module level)
    // across all tests in this file
    expect(createCallCount).toBe(1);
  });
});
