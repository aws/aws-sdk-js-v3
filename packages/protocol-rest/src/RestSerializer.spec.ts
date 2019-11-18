import { RestSerializer } from "./RestSerializer";
import { HttpEndpoint, Structure } from "@aws-sdk/types";

import {
  complexGetOperation,
  containsSubresourceGetOperation,
  minimalPostOperation,
  streamingPostOperation,
  simpleGetOperation,
  simpleHeadOperation,
  restJsonOperation
} from "./operations.fixture";

describe("RestMarshaller", () => {
  const endpoint: HttpEndpoint = {
    protocol: "https:",
    hostname: "foo.region.amazonaws.com",
    path: "/path"
  };
  const bodySerializer = {
    build: jest.fn().mockReturnValue("serialized")
  };

  const restMarshaller = new RestSerializer(
    endpoint,
    bodySerializer,
    jest.fn(),
    jest.fn()
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("#serialize", () => {
    it("should use the injected body serializer to build the HTTP request body", () => {
      const input = { foo: "bar" };
      expect(restMarshaller.serialize(minimalPostOperation, input).body).toBe(
        "serialized"
      );

      expect(bodySerializer.build.mock.calls.length).toBe(1);
      expect(bodySerializer.build.mock.calls[0]).toEqual([
        {
          hasPayload: false,
          member: minimalPostOperation.input,
          operation: minimalPostOperation,
          input
        }
      ]);
    });

    it("should use the raw payload for the body if it is not a structure", () => {
      const body = new Uint8Array(10);
      const input = { body };

      const serialized = restMarshaller.serialize(
        streamingPostOperation,
        input
      );

      expect(bodySerializer.build.mock.calls.length).toBe(0);
      expect(serialized.body).toBe(body);
    });

    it("should use the operation HTTP trait to build the request", () => {
      const serialized = restMarshaller.serialize(minimalPostOperation, {
        foo: "bar"
      });

      expect(serialized.method).toBe(minimalPostOperation.http.method);
      expect(serialized.path).toBe("/path/");
    });

    it("should set request body to null if HTTP method is GET", () => {
      const serialized = restMarshaller.serialize(simpleGetOperation, {});

      expect(serialized.body).toBe(null);
    });

    it("should set request body to null if HTTP method is HEAD", () => {
      const serialized = restMarshaller.serialize(simpleHeadOperation, {});

      expect(serialized.body).toBe(null);
    });

    describe("uri", () => {
      it("populates operation URI placeholders", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key/to/object"
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.path).toBe("/path/bucket/key/to/object");
      });

      it("populates operation URI placeholders with empty strings", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: ""
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.path).toBe("/path/bucket/");
      });

      it("uri escapes params in path", () => {
        const toSerialize = {
          Bucket: "bad/path",
          Key: "something silly!",
          Id: "i/d",
          QueryList: ["a/c", "b~d"]
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.path).toBe("/path/bad%2Fpath/something%20silly%21");
        expect(serialized.query).toEqual({
          QueryList: ["a/c", "b~d"],
          "id-param": "i/d"
        });
      });
    });

    describe("querystring", () => {
      it("populates operation querystring parameters", () => {
        const toSerialize = {
          Bucket: "",
          Key: "",
          Id: "test"
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.path).toBe("/path//");
        expect(serialized.query).toEqual({
          "id-param": "test"
        });
      });

      it("populates operation querystring list parameters", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          QueryList: ["abc", "bcd", "cde"]
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.path).toBe("/path/bucket/key");
        expect(serialized.query).toEqual({
          QueryList: ["abc", "bcd", "cde"]
        });
      });

      it("populates multiple operation querystring parameters", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          Id: "test",
          QueryList: ["abc", "bcd", "cde"]
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.path).toBe("/path/bucket/key");
        expect(serialized.query).toEqual({
          QueryList: ["abc", "bcd", "cde"],
          "id-param": "test"
        });
      });

      it("supports querystring string to string maps", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          QueryStringToStringMap: {
            foo: "bar",
            fizz: "buzz"
          }
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.path).toBe("/path/bucket/key");
        expect(serialized.query).toEqual({
          fizz: "buzz",
          foo: "bar"
        });
      });

      it("supports querystring string to string maps (iterable)", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          QueryStringToStringMap: new Map([
            ["foo", "bar"],
            ["fizz", "buzz"]
          ])
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.path).toBe("/path/bucket/key");
        expect(serialized.query).toEqual({
          fizz: "buzz",
          foo: "bar"
        });
      });

      it("supports querystring string to list of string maps", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          QueryStringToListOfStringsMap: {
            foo: ["a", "b"],
            fizz: ["c", "d"]
          }
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.path).toBe("/path/bucket/key");
        expect(serialized.query).toEqual({
          fizz: ["c", "d"],
          foo: ["a", "b"]
        });
      });

      it("supports querystring string to list of string maps (iterables)", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          QueryStringToListOfStringsMap: new Map([
            ["foo", new Set(["a", "b"])],
            ["fizz", new Set(["c", "d"])]
          ])
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.path).toBe("/path/bucket/key");
        expect(serialized.query).toEqual({
          fizz: ["c", "d"],
          foo: ["a", "b"]
        });
      });

      it("supports querystring boolean parameters", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          Boolean: true
        };

        let serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.path).toBe("/path/bucket/key");
        expect(serialized.query).toEqual({
          bool: "true"
        });
        toSerialize.Boolean = false;
        serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
        expect(serialized.path).toBe("/path/bucket/key");
        expect(serialized.query).toEqual({
          bool: "false"
        });
      });

      it(`won't clash with existing items in querystring`, () => {
        const toSerialize = {
          Id: "test"
        };

        const serialized = restMarshaller.serialize(
          containsSubresourceGetOperation,
          toSerialize
        );
        expect(serialized.path).toBe("/path/operation");
        expect(serialized.query).toEqual({
          sdk: undefined,
          "id-param": "test"
        });
      });
    });

    describe("headers", () => {
      it("can be populated", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          ACL: "public-read"
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.headers["x-amz-acl"]).toBe("public-read");
      });

      it("populates headers from integers", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderInteger: 123
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.headers["HeaderInteger"]).toBe("123");
      });

      it("populates headers from floats", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderFloat: 123.123
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.headers["x-amz-float"]).toBe("123.123");
      });

      it("populates headers from booleans", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderBoolean: true
        };

        let serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.headers["x-amz-bool"]).toBe("true");
        toSerialize.HeaderBoolean = false;
        serialized = restMarshaller.serialize(complexGetOperation, toSerialize);
        expect(serialized.headers["x-amz-bool"]).toBe("false");
      });

      it("populates headers from timestamps using rfc822 by default", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderTimestamp: new Date(0)
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.headers["x-amz-timestamp"]).toBe(
          "Thu, 01 Jan 1970 00:00:00 GMT"
        );
      });

      it("populates headers from timestamps using specified format", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderTimestampOverride: new Date(0)
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.headers["x-amz-timestamp-ovr"]).toBe(
          "1970-01-01T00:00:00Z"
        );
      });

      it("populates headers preferring timestampFormat on member over shape", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderTimestampMemberOverride: new Date(0)
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.headers["x-amz-timestamp-member-ovr"]).toBe("0");
      });

      it("populates blobs", () => {
        const base64Encoder = jest.fn().mockReturnValue("base64");
        const utf8Decoder = jest.fn();
        const restMarshaller = new RestSerializer(
          endpoint,
          bodySerializer,
          base64Encoder,
          utf8Decoder
        );
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderBlob: new Uint8Array(1024).fill(1)
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(base64Encoder.mock.calls.length).toBe(1);
        expect(utf8Decoder.mock.calls.length).toBe(0);
        expect(serialized.headers["x-amz-blob"]).toBe("base64");
      });

      it("populates blobs from string", () => {
        const base64Encoder = jest.fn().mockReturnValue("base64");
        const utf8Decoder = jest.fn();
        const restMarshaller = new RestSerializer(
          endpoint,
          bodySerializer,
          base64Encoder,
          utf8Decoder
        );
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderBlob: "I want to be a blob"
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(base64Encoder.mock.calls.length).toBe(1);
        expect(utf8Decoder.mock.calls.length).toBe(1);
        expect(serialized.headers["x-amz-blob"]).toBe("base64");
      });

      it("uses default member name if locationName not present", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderInteger: 123
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(Object.keys(serialized.headers).length).toBe(1);
        expect(serialized.headers["HeaderInteger"]).toBe("123");
      });

      it("populate maps (without locationName)", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderMap: {
            foo: "bar",
            fizz: "buzz"
          }
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.headers["HeaderMapfoo"]).toBe("bar");
        expect(serialized.headers["HeaderMapfizz"]).toBe("buzz");
      });

      it("populate maps (with locationName)", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderMapLocation: {
            foo: "bar",
            fizz: "buzz"
          }
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.headers["x-amz-map-foo"]).toBe("bar");
        expect(serialized.headers["x-amz-map-fizz"]).toBe("buzz");
      });

      it("populate maps (iterables) (with locationName)", () => {
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderMapLocation: new Map([
            ["foo", "bar"],
            ["fizz", "buzz"]
          ])
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(serialized.headers["x-amz-map-foo"]).toBe("bar");
        expect(serialized.headers["x-amz-map-fizz"]).toBe("buzz");
      });

      it("populates strings modeled as JSON", () => {
        const base64Encoder = jest.fn().mockReturnValue("base64");
        const utf8Decoder = jest.fn();
        const restMarshaller = new RestSerializer(
          endpoint,
          bodySerializer,
          base64Encoder,
          utf8Decoder
        );
        const toSerialize = {
          Bucket: "bucket",
          Key: "key",
          HeaderJSON: {
            foo: "foo",
            bar: "bar"
          }
        };

        const serialized = restMarshaller.serialize(
          complexGetOperation,
          toSerialize
        );
        expect(base64Encoder.mock.calls.length).toBe(1);
        expect(utf8Decoder.mock.calls.length).toBe(1);
        expect(serialized.headers["x-amz-json"]).toBe("base64");
      });

      describe("content-type header", () => {
        it("should not set Content-Type if payload is not supplied", () => {
          const toSerialize = {};
          const serialized = restMarshaller.serialize(
            restJsonOperation,
            toSerialize
          );
          expect(serialized.headers["Content-Type"]).toBeUndefined();
        });

        it("should set Content-Type to 'application/json' if payload is a structure", () => {
          const toSerialize = { Payload: {} };
          const serialized = restMarshaller.serialize(
            restJsonOperation,
            toSerialize
          );
          expect(serialized.headers["Content-Type"]).toBe("application/json");
        });

        it("should set Content-Type to 'binary/octet-stream' if payload is a blob", () => {
          const originPayload = (restJsonOperation.input.shape as Structure)
            .members.Payload;
          (restJsonOperation.input.shape as Structure).members.Payload = {
            shape: { type: "blob" }
          };
          const toSerialize = { Payload: "payload blob" };
          const serialized = restMarshaller.serialize(
            restJsonOperation,
            toSerialize
          );
          expect(serialized.headers["Content-Type"]).toBe(
            "binary/octet-stream"
          );
          (restJsonOperation.input
            .shape as Structure).members.Payload = originPayload;
        });

        it("generated content-type should not override the header serialized from input", () => {
          const toSerialize = {
            Payload: {},
            ContentType: "ShouldNotOverride"
          };
          const serialized = restMarshaller.serialize(
            restJsonOperation,
            toSerialize
          );
          expect(serialized.headers["Content-Type"]).toBe("ShouldNotOverride");
        });

        it("should default to use 'application/json' Content-Type if no payload", () => {
          const payloadMember = (restJsonOperation.input.shape as Structure)
            .payload;
          delete (restJsonOperation.input.shape as Structure).payload;
          const serialized = restMarshaller.serialize(restJsonOperation, {});
          expect(serialized.headers["Content-Type"]).toBe("application/json");
          if (payloadMember)
            (restJsonOperation.input
              .shape as Structure).payload = payloadMember;
        });
      });
    });
  });
});
