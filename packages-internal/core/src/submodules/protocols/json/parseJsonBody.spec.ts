import { describe, expect, test as it } from "vitest";

import { loadJsonRpcErrorCode, loadRestJsonErrorCode } from "./parseJsonBody";

describe(loadRestJsonErrorCode.name, () => {
  it("reads the code of the error case-insensitively", () => {
    const code = loadRestJsonErrorCode(
      { statusCode: 200, headers: {} },
      {
        cOdE: "OhNoException:Sender",
      }
    );
    expect(code).toEqual("OhNoException");
  });

  it("strips namespace from header value", () => {
    const code = loadRestJsonErrorCode(
      { statusCode: 400, headers: { "x-amzn-errortype": "com.example#FooError" } },
      {}
    );
    expect(code).toEqual("FooError");
  });

  describe("priority: header > code > type", () => {
    it("prefers header over code and __type", () => {
      const code = loadRestJsonErrorCode(
        { statusCode: 400, headers: { "x-amzn-errortype": "HeaderError" } },
        { code: "CodeError", __type: "TypeErr" }
      );
      expect(code).toEqual("HeaderError");
    });

    it("prefers code over __type when header is absent", () => {
      const code = loadRestJsonErrorCode({ statusCode: 400, headers: {} }, { code: "CodeError", __type: "TypeErr" });
      expect(code).toEqual("CodeError");
    });

    it("falls back to __type when header and code are absent", () => {
      const code = loadRestJsonErrorCode({ statusCode: 400, headers: {} }, { __type: "TypeErr" });
      expect(code).toEqual("TypeErr");
    });
  });
});

describe(loadJsonRpcErrorCode.name, () => {
  it("reads __type from the body", () => {
    const code = loadJsonRpcErrorCode({ statusCode: 400, headers: {} }, { __type: "FooError" }, true);
    expect(code).toEqual("FooError");
  });

  it("strips namespace when removeNamespace is true (awsJson1_1)", () => {
    const code = loadJsonRpcErrorCode(
      { statusCode: 400, headers: {} },
      { __type: "com.amazonaws.example#FooError" },
      true
    );
    expect(code).toEqual("FooError");
  });

  it("preserves namespace when removeNamespace is false (awsJson1_0)", () => {
    const code = loadJsonRpcErrorCode(
      { statusCode: 400, headers: {} },
      { __type: "com.amazonaws.example#FooError" },
      false
    );
    expect(code).toEqual("com.amazonaws.example#FooError");
  });

  it("strips colon suffix regardless of removeNamespace", () => {
    const code = loadJsonRpcErrorCode(
      { statusCode: 400, headers: {} },
      { __type: "com.amazonaws.example#FooError:http://internal.amazon.com/coral" },
      false
    );
    expect(code).toEqual("com.amazonaws.example#FooError");
  });

  it("strips colon then namespace when removeNamespace is true", () => {
    const code = loadJsonRpcErrorCode(
      { statusCode: 400, headers: {} },
      { __type: "com.amazonaws.example#FooError:http://internal.amazon.com/coral" },
      true
    );
    expect(code).toEqual("FooError");
  });

  describe("priority: type > code > header", () => {
    it("prefers __type over code and header", () => {
      const code = loadJsonRpcErrorCode(
        { statusCode: 400, headers: { "x-amzn-errortype": "HeaderError" } },
        { __type: "TypeErr", code: "CodeError" },
        true
      );
      expect(code).toEqual("TypeErr");
    });

    it("prefers code over header when __type is absent", () => {
      const code = loadJsonRpcErrorCode(
        { statusCode: 400, headers: { "x-amzn-errortype": "HeaderError" } },
        { code: "CodeError" },
        false
      );
      expect(code).toEqual("CodeError");
    });

    it("falls back to header when __type and code are absent", () => {
      const code = loadJsonRpcErrorCode({ statusCode: 400, headers: { "x-amzn-errortype": "HeaderError" } }, {}, true);
      expect(code).toEqual("HeaderError");
    });
  });

  it("returns undefined when no error identifier is found", () => {
    const code = loadJsonRpcErrorCode({ statusCode: 400, headers: {} }, { message: "oops" }, false);
    expect(code).toBeUndefined();
  });

  it("returns undefined for null/undefined data", () => {
    expect(loadJsonRpcErrorCode({ statusCode: 400, headers: {} }, null, false)).toBeUndefined();
    expect(loadJsonRpcErrorCode({ statusCode: 400, headers: {} }, undefined, false)).toBeUndefined();
  });

  describe("queryCompat = true changes priority to: code > header > type", () => {
    it("prefers code over header and __type", () => {
      const code = loadJsonRpcErrorCode(
        { statusCode: 400, headers: { "x-amzn-errortype": "HeaderError" } },
        { code: "CodeError", __type: "TypeErr" },
        true,
        true
      );
      expect(code).toEqual("CodeError");
    });

    it("prefers header over __type when code is absent", () => {
      const code = loadJsonRpcErrorCode(
        { statusCode: 400, headers: { "x-amzn-errortype": "HeaderError" } },
        { __type: "TypeErr" },
        true,
        true
      );
      expect(code).toEqual("HeaderError");
    });

    it("falls back to __type when code and header are absent", () => {
      const code = loadJsonRpcErrorCode({ statusCode: 400, headers: {} }, { __type: "TypeErr" }, true, true);
      expect(code).toEqual("TypeErr");
    });

    it("still strips namespace when removeNamespace is true", () => {
      const code = loadJsonRpcErrorCode({ statusCode: 400, headers: {} }, { code: "com.example#BarError" }, true, true);
      expect(code).toEqual("BarError");
    });

    it("preserves namespace when removeNamespace is false", () => {
      const code = loadJsonRpcErrorCode(
        { statusCode: 400, headers: {} },
        { code: "com.example#BarError" },
        false,
        true
      );
      expect(code).toEqual("com.example#BarError");
    });
  });
});
