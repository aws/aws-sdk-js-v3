import { addChecksumHeadersMiddleware } from "./add-checksum-headers";
import { minimalRequest, commonConfig } from "./fixture";
import { join } from "path";
import { tmpdir } from "os";
import { createReadStream, mkdtempSync, writeFileSync } from "fs";
import { HttpRequest } from "@aws-sdk/protocol-http";
import { Readable } from "stream";

function createTemporaryFile(contents: string | Buffer): string {
  const folder = mkdtempSync(
    join(tmpdir(), "add-glacier-checksum-headers-node-")
  );
  const fileLoc = join(folder, "test.txt");
  writeFileSync(fileLoc, contents);

  return fileLoc;
}

describe("addChecksumHeadersMiddleware", () => {
  const unusedDep = jest.fn();
  const next = jest.fn();

  const nodeConfig = {
    ...commonConfig,
    runtime: "node",
    blobReader: unusedDep
  };

  const browserConfig = {
    ...commonConfig,
    runtime: "browser",
    createReadStream: unusedDep,
    streamReader: unusedDep
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("will not set content-sha256 headers if request body is empty", async () => {
    const handler = addChecksumHeadersMiddleware(nodeConfig)(next, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        ...minimalRequest
      })
    });

    expect(next.mock.calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.headers["x-amz-content-sha256"]).toBeUndefined();
    expect(request.headers["x-amz-sha-256-tree-hash"]).toBeUndefined();
    expect(unusedDep.mock.calls.length).toBe(0);
  });

  it("will set sha256 headers if request body is present", async () => {
    const body = new Uint8Array(5767168); // 5.5 MiB
    body.fill(0);
    const handler = addChecksumHeadersMiddleware(nodeConfig)(next, {} as any);

    await handler({
      input: {},
      request: new HttpRequest({
        ...minimalRequest,
        body: body
      })
    });

    expect(next.mock.calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.headers["x-amz-content-sha256"]).toBe(
      "733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60"
    );
    expect(request.headers["x-amz-sha256-tree-hash"]).toBe(
      "a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455"
    );
    expect(unusedDep.mock.calls.length).toBe(0);
  });

  it("will not set sha256 tree header if header is already present", async () => {
    const body = new Uint8Array(5767168); // 5.5 MiB
    body.fill(0);
    const handler = addChecksumHeadersMiddleware(nodeConfig)(next, {} as any);

    await handler({
      input: {},
      request: new HttpRequest({
        ...minimalRequest,
        headers: {
          "x-amz-sha256-tree-hash": "foo"
        },
        body: body
      })
    });

    expect(next.mock.calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.headers["x-amz-content-sha256"]).toBe(
      "733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60"
    );
    expect(request.headers["x-amz-sha256-tree-hash"]).toBe("foo");
    expect(unusedDep.mock.calls.length).toBe(0);
  });

  it("will calculate sha256 hashes when request body is a string", async () => {
    const handler = addChecksumHeadersMiddleware(nodeConfig)(next, {} as any);

    await handler({
      input: {},
      request: new HttpRequest({
        ...minimalRequest,
        body: "bar"
      })
    });

    expect(next.mock.calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.headers["x-amz-content-sha256"]).toBe(
      "fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9"
    );
    expect(request.headers["x-amz-sha256-tree-hash"]).toBe(
      "fcde2b2edba56bf408601fb721fe9b5c338d10ee429ea04fae5511b68fbf8fb9"
    );
    expect(unusedDep.mock.calls.length).toBe(0);
  });

  it("will calculate sha256 hashes when request body is a file stream", async () => {
    const temporaryFile = createTemporaryFile(Buffer.alloc(5767168, 0));
    const handler = addChecksumHeadersMiddleware(nodeConfig)(next, {} as any);

    await handler({
      input: {},
      request: new HttpRequest({
        ...minimalRequest,
        body: createReadStream(temporaryFile)
      })
    });

    expect(next.mock.calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.headers["x-amz-content-sha256"]).toBe(
      "733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60"
    );
    expect(request.headers["x-amz-sha256-tree-hash"]).toBe(
      "a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455"
    );
    expect(unusedDep.mock.calls.length).toBe(0);
  });

  it("will reject when request body is a non-file stream", async () => {
    const handler = addChecksumHeadersMiddleware(nodeConfig)(next, {} as any);

    await expect(
      handler({
        input: {},
        request: new HttpRequest({
          ...minimalRequest,
          body: new Readable()
        })
      })
    ).rejects.toHaveProperty(
      "message",
      "Unable to calculate checksums for non-file streams."
    );
  });

  it("will calculate sha256 hashes when request body is a blob", async () => {
    const data = new Uint8Array(5767168);
    const blob = new Blob([data]);

    const handler = addChecksumHeadersMiddleware(browserConfig)(
      next,
      {} as any
    );

    await handler({
      input: {},
      request: new HttpRequest({
        ...minimalRequest,
        body: blob
      })
    });

    expect(next.mock.calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.headers["x-amz-content-sha256"]).toBe(
      "733cf513448ce6b20ad1bc5e50eb27c06aefae0c320713a5dd99f4e51bc1ca60"
    );
    expect(request.headers["x-amz-sha256-tree-hash"]).toBe(
      "a3a82dbe3644dd6046be472f2e3ec1f8ef47f8f3adb86d0de4de7a254f255455"
    );
    expect(unusedDep.mock.calls.length).toBe(0);
  });
});
