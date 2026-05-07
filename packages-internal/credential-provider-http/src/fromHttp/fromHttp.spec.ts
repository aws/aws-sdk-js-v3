import { HttpResponse } from "@smithy/protocol-http";
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

const mockHandlerCreate = vi.fn(() => ({
  destroy: () => {},
  handle: mockHandle,
}));

vi.mock("@smithy/node-http-handler", () => ({
  NodeHttpHandler: (() => {
    const impl = Object.assign(vi.fn().mockImplementation(mockHandlerCreate), {
      create: mockHandlerCreate,
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

    expect(mockHandle).toHaveBeenCalledWith(helpers.createGetRequest(new URL("https://u1.aws")));
  });

  it("uses the relative uri", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "",
      awsContainerCredentialsRelativeUri: "/some-path",
    });

    await provider();

    expect(mockHandle).toHaveBeenCalledWith(helpers.createGetRequest(new URL("http://169.254.170.2/some-path")));
  });

  it("can use the token", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://t1.aws",
      awsContainerAuthorizationToken: mockToken,
    });

    const request = helpers.createGetRequest(new URL("https://t1.aws"));
    request.headers.Authorization = mockToken;

    await provider();

    expect(mockHandle).toHaveBeenCalledWith(request);
  });

  it("can use the token file", async () => {
    const provider = fromHttp({
      awsContainerCredentialsFullUri: "https://t2.aws",
      awsContainerAuthorizationTokenFile: "some-file",
    });

    const request = helpers.createGetRequest(new URL("https://t1.aws"));
    request.headers.Authorization = mockToken;

    await provider();

    expect(mockHandle).toHaveBeenCalledWith(request);
  });

  describe("requestHandler reuse (issue #7913)", () => {
    it("reuses the default NodeHttpHandler across multiple fromHttp calls and credential refreshes", async () => {
      // Snapshot the call count up to this point — earlier tests in this file
      // already exercised the default handler and primed the module-level cache.
      const baseline = mockHandlerCreate.mock.calls.length;

      // Build many providers sharing the same default timeout. They should
      // all share a single underlying handler.
      const providerA = fromHttp({ awsContainerCredentialsFullUri: "https://leak-test-a.aws" });
      const providerB = fromHttp({ awsContainerCredentialsFullUri: "https://leak-test-b.aws" });
      const providerC = fromHttp({ awsContainerCredentialsFullUri: "https://leak-test-c.aws" });

      await providerA();
      await providerA();
      await providerB();
      await providerC();

      // No new handler instances should have been created — the SDK-default
      // handler is memoized across fromHttp invocations.
      expect(mockHandlerCreate.mock.calls.length - baseline).toBe(0);
    });

    it("creates a new default handler only for a previously-unseen timeout value", async () => {
      const baseline = mockHandlerCreate.mock.calls.length;

      // First use of timeout=2500 should construct a new handler.
      const provider1 = fromHttp({ awsContainerCredentialsFullUri: "https://t-2500.aws", timeout: 2500 });
      await provider1();
      expect(mockHandlerCreate.mock.calls.length - baseline).toBe(1);

      // Second use of the same timeout should reuse it.
      const provider2 = fromHttp({ awsContainerCredentialsFullUri: "https://t-2500-b.aws", timeout: 2500 });
      await provider2();
      expect(mockHandlerCreate.mock.calls.length - baseline).toBe(1);
    });

    it("respects a caller-supplied requestHandler and does not construct a default one", async () => {
      const baseline = mockHandlerCreate.mock.calls.length;

      const customHandle = vi.fn().mockResolvedValue({
        response: new HttpResponse({
          statusCode: 200,
          headers: { "content-type": "application/json" },
          body: Readable.from([""]),
        }),
      });
      const customHandler = { handle: customHandle, destroy: () => {} } as any;

      const provider = fromHttp({
        awsContainerCredentialsFullUri: "https://custom-handler.aws",
        requestHandler: customHandler,
      });

      await provider();
      await provider();

      // Caller-supplied handler should be used directly...
      expect(customHandle).toHaveBeenCalled();
      // ...and no SDK-default handler should be constructed for this provider.
      expect(mockHandlerCreate.mock.calls.length - baseline).toBe(0);
    });
  });
});
