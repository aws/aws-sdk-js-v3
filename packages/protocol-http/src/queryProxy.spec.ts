import { getQueryProxy, queryToSearchParams } from "./queryProxy";

describe("getQueryProxy", () => {
  const mockQuery = {
    foo: "bar",
    baz: ["qux", "quux"],
  };
  // Query string representation of `mockQuery` for simplicity.
  const mockSearchParams = new URLSearchParams("foo=bar&baz=qux&baz=quux");

  describe("proxy works like a normal Record", () => {
    describe("access and mutation", () => {
      it("can get and set individual keys", () => {
        const searchParams = new URLSearchParams();
        const query = getQueryProxy(searchParams);
        query["foo"] = "bar";
        query["baz"] = ["qux", "quux"];
        expect(query["foo"]).toEqual("bar");
        expect(query.baz).toEqual(["qux", "quux"]);
      });

      it("can be updated using spread syntax", () => {
        let query = getQueryProxy(mockSearchParams);
        query = { ...query, another: "value" };
        expect(query).toEqual({ ...mockQuery, another: "value" });
      });

      it("can delete keys", () => {
        const query = getQueryProxy(new URLSearchParams(mockSearchParams));
        delete query["foo"];
        delete query.baz;
        expect(query).toEqual({});
      });
    });

    describe("iteration", () => {
      it("can be iterated over using Object.keys", () => {
        const query = getQueryProxy(mockSearchParams);
        const keys = Object.keys(query);
        expect(keys).toEqual(["foo", "baz"]);
      });

      it("can be iterated over using Object.values", () => {
        const query = getQueryProxy(mockSearchParams);
        const values = Object.values(query);
        expect(values).toEqual(["bar", ["qux", "quux"]]);
      });

      it("can be iterated over using Object.entries", () => {
        const query = getQueryProxy(mockSearchParams);
        const entries = Object.entries(query);
        expect(entries).toEqual([
          ["foo", "bar"],
          ["baz", ["qux", "quux"]],
        ]);
      });

      it("can be iterated over using `for..in`", () => {
        const keys: string[] = [];
        const query = getQueryProxy(mockSearchParams);
        for (const key in query) {
          keys.push(key);
        }
        expect(keys).toEqual(["foo", "baz"]);
      });
    });
  });

  describe("proxies the searchParams", () => {
    it("updates searchParams when individual keys are set on query", () => {
      const searchParams = new URLSearchParams();
      const query = getQueryProxy(searchParams);
      query["foo"] = "bar";
      query.baz = ["qux", "quux"];
      expect(searchParams).toEqual(mockSearchParams);
    });

    it("updates searchParams when keys are deleted from query", () => {
      const searchParams = new URLSearchParams(mockSearchParams);
      const query = getQueryProxy(searchParams);
      delete query["foo"];
      delete query.baz;
      expect(searchParams).toEqual(new URLSearchParams({}));
    });

    it("can get values from searchParams or query", () => {
      const query = getQueryProxy(mockSearchParams);
      expect(query["foo"]).toEqual(mockSearchParams.get("foo"));
      expect(query.baz).toEqual(mockSearchParams.getAll("baz"));
    });

    it("does not proxy properties of searchParams", () => {
      const searchParams = new URLSearchParams();
      Object.defineProperty(searchParams, "foo", {
        value: "bar",
        enumerable: true,
        writable: true,
        configurable: true,
      });
      const query = getQueryProxy(searchParams);
      Object.keys(searchParams).forEach((key) => {
        expect(query[key]).toBe(undefined);
      });
    });

    it("can use Object prototype methods", () => {
      const searchParams = new URLSearchParams(mockSearchParams);
      const query = getQueryProxy(searchParams);
      delete query["foo"];
      Object.defineProperty(query, "fizz", {
        value: "buzz",
        enumerable: true,
        writable: true,
        configurable: true,
      });
      expect(query.hasOwnProperty("foo")).toBe(false);
      expect(query.hasOwnProperty("baz")).toBe(true);
      expect(query.hasOwnProperty("fizz")).toBe(true);
      expect(query["fizz"]).toEqual("buzz");
      expect("fizz" in query).toBe(true);
      expect({ ...query }).toEqual({ fizz: "buzz", baz: ["qux", "quux"] });
      expect(searchParams.has("foo")).toBe(false);
      expect(searchParams.get("fizz")).toBe("buzz");
    });
  });
});

describe("queryToSearchParams", () => {
  it("ignores non-array, non-string query values", () => {
    const query = { foo: new Uint8Array() as any };
    const searchParams = queryToSearchParams(query);
    expect(searchParams.get("foo")).toEqual(null);
    expect(searchParams.get("bar")).toEqual(null);
  });
});
