import { collectBody } from "@smithy/core/protocols";
import type {
  BigDecimalSchema,
  BigIntegerSchema,
  BlobSchema,
  NumericSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticStructureSchema,
  StaticUnionSchema,
  StringSchema,
  TimestampDefaultSchema,
  TimestampEpochSecondsSchema,
} from "@smithy/types";
import { describe, test as it } from "vitest";

describe("testing schema export", () => {
  it("placeholder", () => {});
});

export const widget = [
  3,
  "",
  "Struct",
  0,
  ["list", "sparseList", "map", "sparseMap", "blob", "media", "timestamp", "bigint", "bigdecimal", "scalar"],
  [
    [[1, "", "List", 0, 0] satisfies StaticListSchema, 0],
    [[1, "", "List", 0, 0] satisfies StaticListSchema, { sparse: 1 }],
    [2, "", "Map", 0, 0, 0],
    [[2, "", "Map", 0, 0, 0], { sparse: 1 }],
    21 satisfies BlobSchema,
    [0, "", "Media", { mediaType: "application/json" }, 0],
    7 satisfies TimestampEpochSecondsSchema,
    17 satisfies BigIntegerSchema,
    19 satisfies BigDecimalSchema,
    1 satisfies NumericSchema,
  ],
] satisfies StaticStructureSchema;

export const nestingWidget: StaticStructureSchema = [
  3,
  "ns",
  "Struct",
  0,
  ["string", "date", "blob", "number", "list", "map", "nested"],
  [
    0 satisfies StringSchema,
    4 satisfies TimestampDefaultSchema,
    21 satisfies BlobSchema,
    1 satisfies NumericSchema,
    64 | 1,
    128 | 0,
    () => nestingWidget,
  ],
];

export function createNestingWidget(nesting = 0) {
  const object = {
    string: "hello, world",
    number: 100000,
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    map: {
      a: "A",
      b: "B",
      c: "C",
    },
    date: new Date(0),
    blob: new Uint8Array([0, 1, 2, 3, 4, 5, 6, 7]),
    nested: undefined,
  } as any;
  if (nesting > 0) {
    object.nested = createNestingWidget(nesting - 1);
  }
  return object;
}

export const deleteObjects: StaticOperationSchema = [
  9,
  "ns",
  "DeleteObjects",
  {
    http: ["POST", "/{Bucket}?delete", 200],
  },
  [
    3,
    "ns",
    "DeleteObjectsRequest",
    {},
    ["Delete"],
    [
      [
        [
          3,
          "ns",
          "Delete",
          0,
          ["Objects"],
          [
            [
              [1, "ns", "ObjectIdentifierList", 0, [3, "ns", "ObjectIdentifier", 0, ["Key"], [[0, 0]]]],
              { xmlFlattened: 1, xmlName: "Object" },
            ],
          ],
        ],
        {
          httpPayload: 1,
          xmlName: "Delete",
        },
      ],
    ],
  ],
  [3, "ns", "DeleteObjectsResponse", 0, [], []] satisfies StaticStructureSchema,
] satisfies StaticOperationSchema;

export const context = {
  streamCollector: collectBody,
  async endpoint() {
    return {
      hostname: "localhost",
      path: "/",
      protocol: "https:",
    };
  },
} as any;

export const unionStruct = [
  3,
  "ns",
  "UnionStruct",
  0,
  ["union"],
  [[4, "ns", "Union", 0, ["string", "timestamp", "blob"], [0, 7, 21]] satisfies StaticUnionSchema],
] satisfies StaticStructureSchema;

export const unionStructControl = [
  3,
  "ns",
  "UnionStruct",
  0,
  ["union"],
  [[3, "ns", "Union", 0, ["string", "timestamp", "blob"], [0, 7, 21]] satisfies StaticStructureSchema],
] satisfies StaticStructureSchema;
