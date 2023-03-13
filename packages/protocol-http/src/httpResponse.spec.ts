import { Fields } from "./Fields";
import { HttpResponse } from "./httpResponse";

describe("HttpResponse", () => {
  describe("construction", () => {
    it.each([
      ["constructor", new HttpResponse({ statusCode: 200 })],
      ["`from` factory method", HttpResponse.from({ status: 200 })],
    ])("can be constructed using %s", (_, response) => {
      expect(response.status).toEqual(200);
      expect(response.fields).toEqual(Fields.from([]));
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toEqual({});
    });
    it("populates `fields` when using constructor", () => {
      const response = new HttpResponse({ statusCode: 200, headers: { foo: "bar" } });
      expect(response.fields.getField("foo")?.toString()).toEqual("bar");
    });

    it("can be constructed with object spread syntax", () => {
      const baseResponse = new HttpResponse({
        statusCode: 200,
        headers: { foo: "bar" },
        body: "body",
      });
      const updatedResponse = new HttpResponse({
        ...baseResponse,
        headers: {
          ...baseResponse.headers,
          baz: "qux",
        },
      });
      expect(updatedResponse.body).toEqual(baseResponse.body);
      expect(updatedResponse.headers).toEqual({ ...baseResponse.headers, baz: "qux" });
    });
  });

  describe("deprecated properties and their getters/setters", () => {
    const mockHeaders = {
      foo: "bar",
      baz: "qux",
    };
    const mockFields = Fields.from([
      { name: "foo", values: ["bar"] },
      { name: "baz", values: ["qux"] },
    ]);

    it("can be set via constructor", () => {
      const response = new HttpResponse({ headers: mockHeaders, statusCode: 200 });
      expect(response.headers).toEqual(mockHeaders);
      expect(response.statusCode).toEqual(200);
    });

    it("can be set explicitly", () => {
      const response = new HttpResponse({ statusCode: 200 });
      response.headers = mockHeaders;
      response.statusCode = 201;
      expect(response.headers).toEqual(mockHeaders);
      expect(response.statusCode).toEqual(201);
    });

    it("updates non-deprecated property when set via constructor", () => {
      const response = new HttpResponse({ statusCode: 200 });
      response.headers = mockHeaders;
      response.statusCode = 201;
      expect(response.fields).toEqual(mockFields);
      expect(response.status).toEqual(201);
    });
  });
});
