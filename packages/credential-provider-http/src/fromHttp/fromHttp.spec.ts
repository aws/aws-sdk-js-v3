import { HttpResponse } from "@smithy/protocol-http";
import { Readable } from "stream";
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

const mockResponse = {
  AccessKeyId: credentials.accessKeyId,
  SecretAccessKey: credentials.secretAccessKey,
  Token: credentials.sessionToken,
  AccountId: "123",
  Expiration: new Date(credentials.expiration).toISOString(), // rfc3339
};

const mockHandle = vi.fn().mockResolvedValue({
  response: new HttpResponse({
    statusCode: 200,
    headers: {
      "content-type": "application/json",
    },
    body: Readable.from([""]),
  }),
});

vi.mock("@smithy/node-http-handler", () => ({
  NodeHttpHandler: vi.fn().mockImplementation(() => ({
    destroy: () => {},
    handle: mockHandle,
  })),
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
});
