import { PutItemInput$ } from "@aws-sdk/client-dynamodb";
import { PutBucketAclRequest$ } from "@aws-sdk/client-s3";
import { JsonCodec } from "@aws-sdk/core/protocols";
import { CborCodec } from "@smithy/core/cbor";
import { NormalizedSchema } from "@smithy/core/schema";
import { NumericValue } from "@smithy/core/serde";
import type { TimestampEpochSecondsSchema } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { printBytes } from "../byte-printer";

describe("schemas", () => {
  it("can be used to create a runtime type validator", async () => {
    // example: validating an object using a schema.

    /**
     * @param $ - NormalizedSchema.of() wrapping the schema object.
     * @param object - data to validate.
     * @param path - recursion path.
     *
     * @returns list of errors.
     */
    function validate($: NormalizedSchema, object: unknown, path = "object"): string[] {
      const errors: string[] = [];
      if (object == null) {
        return errors;
      }
      if ($.isStringSchema()) {
        if (typeof object !== "string") {
          errors.push(`${path}: expected string, got ${typeof object}`);
        }
      } else if ($.isNumericSchema()) {
        if (typeof object !== "number") {
          errors.push(`${path}: expected number, got ${typeof object}`);
        }
      } else if ($.isBigIntegerSchema()) {
        if (typeof object !== "bigint") {
          errors.push(`${path}: expected bigint, got ${typeof object}`);
        }
      } else if ($.isBigDecimalSchema()) {
        if (!(object instanceof NumericValue)) {
          errors.push(`${path}: expected NumericValue, got ${typeof object}`);
        }
      } else if ($.isBooleanSchema()) {
        if (typeof object !== "boolean") {
          errors.push(`${path}: expected boolean, got ${typeof object}`);
        }
      } else if ($.isBlobSchema()) {
        if ($.isStreaming()) {
          // many types are allowed for streaming payloads.
        } else {
          if (!(object instanceof Uint8Array)) {
            errors.push(`${path}: expected Uint8Array, got ${typeof object}`);
          }
        }
      } else if ($.isTimestampSchema()) {
        if (!(object instanceof Date)) {
          errors.push(`${path}: expected Date, got ${typeof object}`);
        }
      } else if ($.isMapSchema()) {
        if (typeof object !== "object") {
          errors.push(`expected map object, got ${typeof object}`);
        } else {
          const map$ = $.getValueSchema();
          for (const [key, value] of Object.entries(object)) {
            errors.push(...validate(map$, value, path + `["${key}"]`));
          }
        }
      } else if ($.isListSchema()) {
        if (!Array.isArray(object)) {
          errors.push(`expected array (list), got ${typeof object}`);
        } else {
          const list$ = $.getValueSchema();
          for (let i = 0; i < object.length; ++i) {
            const value = object[i];
            errors.push(...validate(list$, value, path + `[${i}]`));
          }
        }
      } else if ($.isStructSchema()) {
        if (typeof object !== "object") {
          errors.push(`${path}: expected struct of type ${$.getName()}, got ${typeof object}`);
        } else {
          const keys = new Set(Object.keys(object));
          for (const [member, member$] of $.structIterator()) {
            keys.delete(member);
            errors.push(...validate(member$, (object as any)[member], path + `.${member}`));
          }
          if (keys.size > 0) {
            errors.unshift(`${path}: unmatched keys: ${Array.from(keys).join(", ")}`);
          }
        }
      }

      return errors;
    }

    {
      const putBucketAclRequest = {
        BucketRegion: "us-west-2",
        AccessControlPolicy: {
          Grants: [
            {
              Grantee: {
                ID: 1,
                Type: "unknown",
                DisplayName: "user name",
                EmailAddres: "___@___",
              },
            },
          ],
          Owner: {
            DisplayName: "owner",
            ID: 1,
          },
        },
      };
      const errors = validate(NormalizedSchema.of(PutBucketAclRequest$), putBucketAclRequest);
      expect(errors).toEqual([
        "object: unmatched keys: BucketRegion",
        "object.AccessControlPolicy.Grants[0].Grantee: unmatched keys: EmailAddres",
        "object.AccessControlPolicy.Grants[0].Grantee.ID: expected string, got number",
        "object.AccessControlPolicy.Owner.ID: expected string, got number",
      ]);
    }
    {
      const errors = validate(NormalizedSchema.of(PutItemInput$), {
        Tablename: "my-table",
        Item: {
          id: 5,
          data: {
            M: {
              greeting: {
                S: "Hello",
              },
              audience: {
                S: "world",
              },
              numbers: {
                L: [1, 2, 3, 4],
              },
            },
          },
        },
      });
      expect(errors).toEqual([
        "object: unmatched keys: Tablename",
        'object.Item["id"]: expected struct of type AttributeValue, got number',
        'object.Item["data"].M["numbers"].L[0]: expected struct of type AttributeValue, got number',
        'object.Item["data"].M["numbers"].L[1]: expected struct of type AttributeValue, got number',
        'object.Item["data"].M["numbers"].L[2]: expected struct of type AttributeValue, got number',
        'object.Item["data"].M["numbers"].L[3]: expected struct of type AttributeValue, got number',
      ]);
    }
  });

  it("codecs can be used to serialize and deserialize objects with schemas", async () => {
    const myData = {
      TableName: "",
      Item: {
        id: {
          S: "1",
        },
        binaryData: {
          B: new Uint8Array([0, 1, 2, 3]),
        },
      },
    };

    {
      const jsonCodec = new JsonCodec({
        timestampFormat: {
          useTrait: true,
          default: 7 as const satisfies TimestampEpochSecondsSchema,
        },
        jsonName: false,
      });
      const serializer = jsonCodec.createSerializer();
      serializer.write(PutItemInput$, myData);
      const serialization = serializer.flush();
      expect(serialization).toEqual(`{"TableName":"","Item":{"id":{"S":"1"},"binaryData":{"B":"AAECAw=="}}}`);
      const deserializer = jsonCodec.createDeserializer();
      const deserialization = await deserializer.read(PutItemInput$, serialization);
      expect(deserialization).toEqual(myData);
    }

    {
      const cborCodec = new CborCodec();
      const serializer = cborCodec.createSerializer();
      serializer.write(PutItemInput$, myData);
      const serialization = serializer.flush();
      expect(printBytes(serialization)).toEqual([
        "101_00010 (5 - map, 2)",
        "011_01001 (3 - utf8 string, 9)",
        "010_10100 (2 - unstructured bytestring, 20)",
        "011_00001 (3 - utf8 string, 1)",
        "011_00010 (3 - utf8 string, 2)",
        "011_01100 (3 - utf8 string, 12)",
        "011_00101 (3 - utf8 string, 5)",
        "010_01110 (2 - unstructured bytestring, 14)",
        "011_00001 (3 - utf8 string, 1)",
        "011_01101 (3 - utf8 string, 13)",
        "011_00101 (3 - utf8 string, 5)",
        "011_00000 (3 - utf8 string, 0)",
        "011_00100 (3 - utf8 string, 4)",
        "010_01001 (2 - unstructured bytestring, 9)",
        "011_10100 (3 - utf8 string, 20)",
        "011_00101 (3 - utf8 string, 5)",
        "011_01101 (3 - utf8 string, 13)",
        "101_00010 (5 - map, 2)",
        "011_00010 (3 - utf8 string, 2)",
        "011_01001 (3 - utf8 string, 9)",
        "011_00100 (3 - utf8 string, 4)",
        "101_00001 (5 - map, 1)",
        "011_00001 (3 - utf8 string, 1)",
        "010_10011 (2 - unstructured bytestring, 19)",
        "011_00001 (3 - utf8 string, 1)",
        "001_10001 (1 - Neg Uint64, 17)",
        "011_01010 (3 - utf8 string, 10)",
        "011_00010 (3 - utf8 string, 2)",
        "011_01001 (3 - utf8 string, 9)",
        "011_01110 (3 - utf8 string, 14)",
        "011_00001 (3 - utf8 string, 1)",
        "011_10010 (3 - utf8 string, 18)",
        "011_11001 (3 - utf8 string, 25)",
        "010_00100 (2 - unstructured bytestring, 4)",
        "011_00001 (3 - utf8 string, 1)",
        "011_10100 (3 - utf8 string, 20)",
        "011_00001 (3 - utf8 string, 1)",
        "101_00001 (5 - map, 1)",
        "011_00001 (3 - utf8 string, 1)",
        "010_00010 (2 - unstructured bytestring, 2)",
        "010_00100 (2 - unstructured bytestring, 4)",
        "000_00000 (0 - Uint64, 0)",
        "000_00001 (0 - Uint64, 1)",
        "000_00010 (0 - Uint64, 2)",
        "000_00011 (0 - Uint64, 3)",
      ]);
      const deserializer = cborCodec.createDeserializer();
      const deserialization = await deserializer.read(PutItemInput$, serialization);
      expect(deserialization).toEqual({
        TableName: "",
        Item: {
          id: {
            S: "1",
          },
          binaryData: {
            B: Buffer.from(new Uint8Array([0, 1, 2, 3])),
          },
        },
      });
    }
  });
});
