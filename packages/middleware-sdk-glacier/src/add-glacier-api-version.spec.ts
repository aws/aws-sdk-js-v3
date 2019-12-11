import { addGlacierApiVersionMiddleware } from "./add-glacier-api-version";
import { HttpRequest } from "@aws-sdk/protocol-http";

describe("addGlacierApiVersion", () => {
  const mockNextHandler = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("sets the x-amz-glacier-version header", async () => {
    const handler = addGlacierApiVersionMiddleware({
      apiVersion: "1970-01-01"
    })(mockNextHandler, {} as any);

    await handler({
      input: {},
      request: new HttpRequest({
        headers: {}
      })
    });

    // ensure the next handler was called
    expect(mockNextHandler.mock.calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers["x-amz-glacier-version"]).toBe("1970-01-01");
  });
});
