import { Fields } from "./Fields";
import { HttpRequest } from "./httpRequest";

describe("HttpRequest", () => {
  describe("construction", () => {
    it.each([
      ["constructor", new HttpRequest({})],
      ["`from` factory method", HttpRequest.from({})],
    ])("sets default values when using %s", (_, request) => {
      expect(request.method).toEqual("GET");
      expect(request.destination.toString()).toEqual("https://localhost/");
      expect(request.fields).toEqual(Fields.from([]));
      expect(request.headers).toEqual({});
      expect(request.query).toEqual({});
    });

    it("populates `destination` and `fields` when using constructor", () => {
      // Don't use any of the default values
      const request = new HttpRequest({
        protocol: "http",
        hostname: "foo.com",
        port: 9000,
        path: "/bar",
        query: {
          baz: "qux",
        },
        headers: {
          foo: "bar",
        },
      });
      expect(request.destination).toEqual(new URL("http://foo.com:9000/bar?baz=qux"));
      expect(request.fields.getField("foo")?.toString()).toEqual("bar");
    });

    it("can be constructed with object spread syntax", () => {
      const baseRequest = new HttpRequest({
        headers: { foo: "bar" },
        body: "body",
      });
      const updatedRequest = new HttpRequest({
        ...baseRequest,
        headers: {
          ...baseRequest.headers,
          baz: "qux",
        },
      });
      expect(updatedRequest.body).toEqual(baseRequest.body);
      expect(updatedRequest.headers).toEqual({ ...baseRequest.headers, baz: "qux" });
    });
  });

  describe("deprecated properties and their getters/setters", () => {
    const mockHeaders = {
      foo: "bar",
      baz: "qux",
    };
    const mockQuery = {
      foo: "bar",
      baz: ["qux", "quux"],
    };
    const mockFields = Fields.from([
      { name: "foo", values: ["bar"] },
      { name: "baz", values: ["qux"] },
    ]);
    const mockDestination = new URL("https://localhost/foo?foo=bar&baz=qux&baz=quux");

    it("can be set via constructor", () => {
      const request = new HttpRequest({ headers: mockHeaders, query: mockQuery });
      expect(request.headers).toEqual(mockHeaders);
      expect(request.query).toEqual(mockQuery);
    });

    it("can be set explicitly", () => {
      const request = new HttpRequest({});
      request.headers = mockHeaders;
      request.query = mockQuery;
      expect(request.headers).toEqual(mockHeaders);
      expect(request.query).toEqual(mockQuery);
    });

    it("updates non-deprecated property when set via setter", () => {
      const request = new HttpRequest({});
      request.headers = mockHeaders;
      request.query = mockQuery;
      request.path = "foo";
      expect(request.fields).toEqual(mockFields);
      expect(request.destination).toEqual(mockDestination);
    });
  });

  describe("clone", () => {
    const mockRequest = HttpRequest.from({
      destination: new URL("https://localhost/?foo=bar&baz=qux&baz=quux"),
      fields: Fields.from([{ name: "foo", values: ["bar", "baz"] }]),
      body: new Uint8Array(16),
    });

    it("deep-copies `destination`", () => {
      const clone = mockRequest.clone();
      clone.destination.pathname = "path";
      expect(mockRequest.destination.pathname).toEqual("/");
      expect(clone.destination.pathname).toEqual("/path");
    });

    it("deep-copies `fields`", () => {
      const clone = mockRequest.clone();
      clone.fields.getField("foo")?.remove("bar");
      expect(mockRequest.fields.getField("foo")?.toString()).toEqual("bar, baz");
      expect(clone.fields.getField("foo")?.toString()).toEqual("baz");
    });

    it("deep-copies header proxy", () => {
      const clone = mockRequest.clone();
      delete clone.headers.foo;
      expect(Object.keys(mockRequest.headers)).toEqual(["foo"]);
      expect(Object.keys(clone.headers)).toEqual([]);
    });

    it("almost deep-copies query proxy", () => {
      const clone = mockRequest.clone();
      delete clone.query["foo"];
      // Once we retrieve the array, its no longer tied to the proxy, so
      // updating it doesn't change the proxy target. Hence, "almost".
      (clone.query["baz"] as string[]).shift();

      expect(Object.keys(mockRequest.query)).toEqual(["foo", "baz"]);
      expect(Object.keys(clone.query)).toEqual(["baz"]);
      expect(mockRequest.query["baz"]).toEqual(["qux", "quux"]);
      expect(clone.query["baz"]).toEqual(["qux", "quux"]);
    });
  });
});
