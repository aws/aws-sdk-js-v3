import { MessageHeaders } from "@aws-sdk/types";
import { fromUtf8, toUtf8 } from "@aws-sdk/util-utf8";

import { HeaderMarshaller } from "./HeaderMarshaller";
import { Int64 } from "./Int64";

describe("HeaderMarshaller", () => {
  const marshaller = new HeaderMarshaller(toUtf8, fromUtf8);
  const name = Uint8Array.from([0x04, 0xf0, 0x9f, 0xa6, 0x84]);

  const testCases: Array<[string, Uint8Array, MessageHeaders]> = [
    [
      "boolean true headers",
      Uint8Array.from([...name, 0]),
      {
        "🦄": {
          type: "boolean",
          value: true,
        },
      },
    ],
    [
      "boolean false headers",
      Uint8Array.from([...name, 1]),
      {
        "🦄": {
          type: "boolean",
          value: false,
        },
      },
    ],
    [
      "byte headers",
      Uint8Array.from([...name, 2, 0x7f]),
      {
        "🦄": {
          type: "byte",
          value: 127,
        },
      },
    ],
    [
      "short headers",
      Uint8Array.from([...name, 3, 0x7f, 0xff]),
      {
        "🦄": {
          type: "short",
          value: 32767,
        },
      },
    ],
    [
      "integer headers",
      Uint8Array.from([...name, 4, 0x7f, 0xff, 0xff, 0xff]),
      {
        "🦄": {
          type: "integer",
          value: 2147483647,
        },
      },
    ],
    [
      "long headers",
      Uint8Array.from([...name, 5, 0x00, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff]),
      {
        "🦄": {
          type: "long",
          value: new Int64(Uint8Array.from([0x00, 0x1f, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff])),
        },
      },
    ],
    [
      "binary headers",
      Uint8Array.from([...name, 6, 0x00, 0x08, 0xde, 0xad, 0xbe, 0xef, 0xca, 0xfe, 0xba, 0xbe]),
      {
        "🦄": {
          type: "binary",
          value: Uint8Array.from([0xde, 0xad, 0xbe, 0xef, 0xca, 0xfe, 0xba, 0xbe]),
        },
      },
    ],
    [
      "string headers",
      Uint8Array.from([
        ...name,
        7,
        0x00,
        0x2e,
        0xd8,
        0xaf,
        0xd8,
        0xb3,
        0xd8,
        0xaa,
        0xe2,
        0x80,
        0x8c,
        0xd9,
        0x86,
        0xd9,
        0x88,
        0xd8,
        0xb4,
        0xd8,
        0xaa,
        0xd9,
        0x87,
        0xe2,
        0x80,
        0x8c,
        0xd9,
        0x87,
        0xd8,
        0xa7,
        0x20,
        0xd9,
        0x86,
        0xd9,
        0x85,
        0xdb,
        0x8c,
        0xe2,
        0x80,
        0x8c,
        0xd8,
        0xb3,
        0xd9,
        0x88,
        0xd8,
        0xb2,
        0xd9,
        0x86,
        0xd8,
        0xaf,
      ]),
      {
        "🦄": {
          type: "string",
          value: "دست‌نوشته‌ها نمی‌سوزند",
        },
      },
    ],
    [
      "timestamp headers",
      Uint8Array.from([...name, 8, 0x00, 0x00, 0x01, 0x61, 0x97, 0x16, 0xac, 0xc2]),
      {
        "🦄": {
          type: "timestamp",
          value: new Date(1518658301122),
        },
      },
    ],
    [
      "UUID headers",
      Uint8Array.from([
        ...name,
        9,
        0xff,
        0xff,
        0xff,
        0xff,
        0xff,
        0xff,
        0xff,
        0xff,
        0xff,
        0xff,
        0xff,
        0xff,
        0xff,
        0xff,
        0xff,
        0xff,
      ]),
      {
        "🦄": {
          type: "uuid",
          value: "ffffffff-ffff-ffff-ffff-ffffffffffff",
        },
      },
    ],
    [
      "a sequence of headers",
      Uint8Array.from([
        0x04, 0xf0, 0x9f, 0xa6, 0x84, 0x06, 0x00, 0x04, 0xde, 0xad, 0xbe, 0xef, 0x04, 0xf0, 0x9f, 0x8f, 0x87, 0x00,
        0x04, 0xf0, 0x9f, 0x90, 0x8e, 0x07, 0x00, 0x07, 0xe2, 0x98, 0x83, 0xf0, 0x9f, 0x92, 0xa9, 0x04, 0xf0, 0x9f,
        0x90, 0xb4, 0x01,
      ]),
      {
        "🦄": {
          type: "binary",
          value: Uint8Array.from([0xde, 0xad, 0xbe, 0xef]),
        },
        "🏇": {
          type: "boolean",
          value: true,
        },
        "🐎": {
          type: "string",
          value: "☃💩",
        },
        "🐴": {
          type: "boolean",
          value: false,
        },
      },
    ],
  ];

  describe("#format", () => {
    for (const [description, encoded, decoded] of testCases) {
      it(`should format ${description}`, () => {
        expect(marshaller.format(decoded)).toEqual(encoded);
      });
    }

    it("should throw if it receives an invalid UUID", () => {
      expect(() =>
        marshaller.format({
          uuid: {
            type: "uuid",
            value: "foo",
          },
        })
      ).toThrowError("Invalid UUID received");
    });
  });

  describe("#parse", () => {
    for (const [description, encoded, decoded] of testCases) {
      it(`should parse ${description}`, () => {
        expect(marshaller.parse(new DataView(encoded.buffer))).toEqual(decoded);
      });
    }

    it("should throw when unrecognized header types are encountered", () => {
      const header = Uint8Array.from([...name, 10]);

      expect(() => marshaller.parse(new DataView(header.buffer))).toThrowError("Unrecognized header type tag");
    });
  });
});
