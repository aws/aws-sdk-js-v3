import { HttpHeaders } from "./";

describe("HttpHeaders", () => {
  describe("constructor", () => {
    it("should support initializing the map with key/value pairs", () => {
      const headers = new HttpHeaders([["foo", "bar"], ["fizz", "buzz"]]);

      expect(headers.get("foo")).toBe("bar");
      expect(headers.get("fizz")).toBe("buzz");
    });
  });

  describe("#[Symbol.iterator]", () => {
    it("should yield all headers as they were originally set", () => {
      const headers = new HttpHeaders();
      headers.set("FoO", "bar");
      headers.set("fIzZ", "buzz");

      expect([...headers]).toEqual([["FoO", "bar"], ["fIzZ", "buzz"]]);
    });

    it("should prevent modifications to the header pair from affecting the instance's header store", () => {
      const headers = new HttpHeaders();
      headers.set("foo", "bar");

      for (const pair of headers) {
        pair[1] = "baz";
      }

      expect(headers.get("foo")).toBe("bar");
    });
  });

  describe(".[Symbol.toStringTag]", () => {
    it("should self-report as a Map", () => {
      const headers = new HttpHeaders();
      expect(headers[Symbol.toStringTag]).toBe("Map");
      expect(Object.prototype.toString.call(headers)).toBe("[object Map]");
    });
  });

  describe("#clear", () => {
    it("should remove all headers", () => {
      const headers = new HttpHeaders();
      headers.set("FoO", "bar");
      headers.set("fIzZ", "buzz");

      headers.clear();

      expect(headers.size).toBe(0);
    });
  });

  describe("#delete", () => {
    it("should remove a single header by case-insensitive name", () => {
      const headers = new HttpHeaders();
      headers.set("FoO", "bar");

      expect(headers.delete("foo")).toBe(true);
      expect(headers.delete("FoO")).toBe(false);
      expect(headers.size).toBe(0);
    });
  });

  describe("#entries", () => {
    it("should yield all headers as they were originally set", () => {
      const headers = new HttpHeaders();
      headers.set("FoO", "bar");
      headers.set("fIzZ", "buzz");

      expect([...headers]).toEqual([["FoO", "bar"], ["fIzZ", "buzz"]]);
    });
  });

  describe("#forEach", () => {
    it("should invoke a callback with each header pair in its original casing", () => {
      const headers = new HttpHeaders();
      headers.set("FoO", "bar");
      headers.set("fIzZ", "buzz");

      const cb = jest.fn();

      headers.forEach(cb);

      expect(cb.mock.calls).toEqual([
        ["bar", "FoO", headers],
        ["buzz", "fIzZ", headers]
      ]);
    });

    it("should support setting a custom this arg", () => {
      class Recorder {
        readonly invocations: Array<any> = [];

        invoke() {
          this.invocations.push([...arguments]);
        }
      }
      const headers = new HttpHeaders();
      headers.set("FoO", "bar");
      headers.set("fIzZ", "buzz");

      const recorder = new Recorder();
      headers.forEach(recorder.invoke, recorder);

      expect(recorder.invocations).toEqual([
        ["bar", "FoO", headers],
        ["buzz", "fIzZ", headers]
      ]);
    });
  });

  describe("#get", () => {
    it("should get a single header by case-insensitive name", () => {
      const headers = new HttpHeaders();
      headers.set("FoO", "bar");

      expect(headers.get("foo")).toBe("bar");
    });

    it("should return undefined if no header with the requested name was set", () => {
      expect(new HttpHeaders().get("foo")).toBe(undefined);
    });
  });

  describe("#keys", () => {
    it("should yield all header names as they were originally set", () => {
      const headers = new HttpHeaders();
      headers.set("FoO", "bar");
      headers.set("fIzZ", "buzz");

      expect([...headers.keys()]).toEqual(["FoO", "fIzZ"]);
    });
  });

  describe("#has", () => {
    it("should report if a single header (with a case-insensitive name) is set on the object", () => {
      const headers = new HttpHeaders();
      headers.set("FoO", "bar");

      expect(headers.has("foo")).toBe(true);
    });
  });

  describe("#set", () => {
    it("should add a single header by case-insensitive name", () => {
      const headers = new HttpHeaders();
      headers.set("FoO", "bar");

      expect(headers.get("foo")).toBe("bar");
    });

    it("should overwrite a single header by case-insensitive name", () => {
      const headers = new HttpHeaders();
      headers.set("FoO", "bar");
      headers.set("foo", "baz");

      expect(headers.get("FoO")).toBe("baz");
      expect(headers.size).toBe(1);
    });
  });

  describe(".size", () => {
    it("should report the number of headers set on the object", () => {
      const headers = new HttpHeaders();
      headers.set("foo", "bar");
      headers.set("fizz", "buzz");

      expect(headers.size).toBe(2);
    });
  });

  describe("#values", () => {
    it("should yield all header values", () => {
      const headers = new HttpHeaders();
      headers.set("FoO", "bar");
      headers.set("fIzZ", "buzz");

      expect([...headers.values()]).toEqual(["bar", "buzz"]);
    });
  });

  describe("#withHeader", () => {
    it("should return a clone of the object with an added header without modifying the original object", () => {
      const headers = new HttpHeaders();
      const copy = headers.withHeader("foo", "bar");

      expect(copy.has("foo")).toBe(true);
      expect(headers.has("foo")).toBe(false);
    });
  });

  describe("#withoutHeader", () => {
    it("should return a clone of the object with a header removed without modifying the original object", () => {
      const headers = new HttpHeaders().set("foo", "bar");
      const copy = headers.withoutHeader("foo");

      expect(headers.has("foo")).toBe(true);
      expect(copy.has("foo")).toBe(false);
    });
  });
});
