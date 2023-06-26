import { HttpRequest } from "@smithy/protocol-http";

import { addChecksumHeadersMiddleware } from "./add-checksum-headers";

describe("addChecksumHeadersMiddleware", () => {
  const bodyChecksumGenerator = jest
    .fn()
    .mockReturnValue([
      "733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60",
      "733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60",
    ]);
  const sha256 = jest.fn();
  const utf8Decoder = jest.fn();
  const next = jest.fn();

  const minimalRequest = {
    method: "POST",
    protocol: "https:",
    path: "/",
    headers: {},
    hostname: "foo.us-east-1.amazonaws.com",
  };

  const config = {
    apiVersion: "1970-01-01",
    bodyChecksumGenerator,
    sha256,
    utf8Decoder,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("will not set content-sha256 headers if request body is empty", async () => {
    const handler = addChecksumHeadersMiddleware(config)(next, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        ...minimalRequest,
      }),
    });

    expect(next.mock.calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.headers["x-amz-content-sha256"]).toBeUndefined();
    expect(request.headers["x-amz-sha-256-tree-hash"]).toBeUndefined();
    expect(bodyChecksumGenerator.mock.calls.length).toBe(0);
  });

  it("will not set sha256 tree header if header is already present", async () => {
    const body = new Uint8Array(5767168); // 5.5 MiB
    body.fill(0);
    const handler = addChecksumHeadersMiddleware(config)(next, {} as any);

    await handler({
      input: {},
      request: new HttpRequest({
        ...minimalRequest,
        headers: {
          "x-amz-sha256-tree-hash": "foo",
        },
        body: body,
      }),
    });

    expect(next.mock.calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.headers["x-amz-content-sha256"]).toBe(
      "733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60"
    );
    expect(request.headers["x-amz-sha256-tree-hash"]).toBe("foo");
    expect(bodyChecksumGenerator.mock.calls.length).toBe(1);
  });

  it("will not set content sha256 header if header is already present", async () => {
    const body = new Uint8Array(5767168); // 5.5 MiB
    body.fill(0);
    const handler = addChecksumHeadersMiddleware(config)(next, {} as any);

    await handler({
      input: {},
      request: new HttpRequest({
        ...minimalRequest,
        headers: {
          "x-amz-content-sha256": "foo",
        },
        body: body,
      }),
    });

    expect(next.mock.calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.headers["x-amz-sha256-tree-hash"]).toBe(
      "733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60"
    );
    expect(request.headers["x-amz-content-sha256"]).toBe("foo");
    expect(bodyChecksumGenerator.mock.calls.length).toBe(1);
  });
});
