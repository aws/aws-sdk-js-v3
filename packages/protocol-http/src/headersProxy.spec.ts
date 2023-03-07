import { Fields } from "./Fields";
import { getHeadersProxy, headersToFields, headerValueToFieldValues } from "./headersProxy";

describe("getHeadersProxy", () => {
  const mockHeaders = {
    foo: "bar",
    baz: "qux,quux",
  };
  const mockFields = Fields.from([
    { name: "foo", values: ["bar"] },
    { name: "baz", values: ["qux", "quux"] },
  ]);

  describe("proxy works like a normal Record", () => {
    describe("access and mutation", () => {
      it("can get and set individual keys", () => {
        const headers = getHeadersProxy(new Fields({}));
        headers["foo"] = "bar";
        headers.baz = "qux,quux";
        expect(headers["foo"]).toEqual("bar");
        expect(headers.baz).toEqual("qux,quux");
      });

      it("can be updated using object spread syntax", () => {
        let headers = getHeadersProxy(mockFields);
        headers = { ...headers, another: "value" };
        expect(headers).toEqual({ ...mockHeaders, another: "value" });
      });

      it("can delete keys", () => {
        const headers = getHeadersProxy(new Fields({ fields: mockFields.getAll() }));
        delete headers["foo"];
        delete headers.baz;
        expect(headers).toEqual({});
      });
    });

    describe("iteration", () => {
      it("can be iterated over using Object.keys", () => {
        const headers = getHeadersProxy(mockFields);
        const keys = Object.keys(headers);
        expect(keys).toEqual(["foo", "baz"]);
      });

      it("can be iterated over using Object.values", () => {
        const headers = getHeadersProxy(mockFields);
        const values = Object.values(headers);
        expect(values).toEqual(["bar", "qux,quux"]);
      });

      it("can be iterated over using Object.entries", () => {
        const headers = getHeadersProxy(mockFields);
        const entries = Object.entries(headers);
        expect(entries).toEqual([
          ["foo", "bar"],
          ["baz", "qux,quux"],
        ]);
      });

      it("can be iterated over using `for..in`", () => {
        const keys: string[] = [];
        const headers = getHeadersProxy(mockFields);
        for (const key in headers) {
          keys.push(key);
        }
        expect(keys).toEqual(["foo", "baz"]);
      });
    });
  });

  describe("proxies the fields", () => {
    it("updates fields when individual keys are set on headers", () => {
      const fields = new Fields({});
      const headers = getHeadersProxy(fields);
      headers["foo"] = "bar";
      headers.baz = "qux,quux";
      expect(fields).toEqual(mockFields);
    });

    it("updates fields when keys are deleted from headers", () => {
      const fields = new Fields({ fields: mockFields.getAll() });
      const headers = getHeadersProxy(fields);
      delete headers["foo"];
      delete headers.baz;
      expect(fields).toEqual(new Fields({}));
    });

    it("can get values from fields or headers", () => {
      const headers = getHeadersProxy(mockFields);
      expect(headers["foo"]).toEqual(mockFields.getField("foo")?.values.join(","));
      expect(headers.baz).toEqual(mockFields.getField("baz")?.values.join(","));
    });

    it("does not proxy class properties of fields", () => {
      const fields = new Fields({});
      Object.defineProperty(fields, "foo", {
        value: "bar",
        enumerable: true,
        writable: true,
        configurable: true,
      });
      const headers = getHeadersProxy(fields);
      Object.keys(fields).forEach((key) => {
        expect(headers[key]).toBe(undefined);
      });
    });

    it("can use Object prototype methods", () => {
      const fields = new Fields({ fields: mockFields.getAll() });
      const headers = getHeadersProxy(fields);
      delete headers["foo"];
      Object.defineProperty(headers, "fizz", {
        value: "buzz",
        enumerable: true,
        writable: true,
        configurable: true,
      });
      expect(headers.hasOwnProperty("foo")).toBe(false);
      expect(headers.hasOwnProperty("baz")).toBe(true);
      expect(headers.hasOwnProperty("fizz")).toBe(true);
      expect(headers["fizz"]).toEqual("buzz");
      expect("fizz" in headers).toBe(true);
      expect(headers.hasOwnProperty("encoding")).toBe(false);
      expect({ ...headers }).toEqual({ fizz: "buzz", baz: "qux,quux" });
      expect(fields.getField("foo")).not.toBeDefined();
      expect(fields.getField("fizz")?.toString()).toEqual("buzz");
    });
  });
});

describe("headersToFields", () => {
  it("ignores null and undefined values", () => {
    const headers = { foo: null as any, bar: undefined as any };
    const fields = headersToFields(headers);
    expect(fields.getField("foo")).not.toBeDefined();
  });
});

describe("headerValueToFieldValues", () => {
  it("ignores null and undefined values", () => {
    expect(headerValueToFieldValues(undefined as any)).not.toBeDefined();
    expect(headerValueToFieldValues(null as any)).not.toBeDefined();
  });
  it("parses single string value", () => {
    const headerValue = "foo";
    expect(headerValueToFieldValues(headerValue)).toEqual(["foo"]);
  });
  it("parses comma-separated string value", () => {
    const headerValue = "foo,bar";
    expect(headerValueToFieldValues(headerValue)).toEqual(["foo", "bar"]);
  });
  it("preserves whitespace", () => {
    const headerValue = "foo,    bar ";
    expect(headerValueToFieldValues(headerValue)).toEqual(["foo", "    bar "]);
  });
});
