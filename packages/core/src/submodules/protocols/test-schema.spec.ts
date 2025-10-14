import type {
  BigDecimalSchema,
  BigIntegerSchema,
  BlobSchema,
  NumericSchema,
  StaticListSchema,
  StaticOperationSchema,
  StaticStructureSchema,
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
  async endpoint() {
    return {
      hostname: "localhost",
      path: "/",
      protocol: "https:",
    };
  },
} as any;
