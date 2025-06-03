import { list, map, op, SCHEMA, sim, struct } from "@smithy/core/schema";
import { describe, test as it } from "vitest";

describe("testing schema export", () => {
  it("placeholder", () => {});
});

export const widget = struct(
  "",
  "Struct",
  0,
  ["list", "sparseList", "map", "sparseMap", "blob", "media", "timestamp", "bigint", "bigdecimal", "scalar"],
  [
    [list("", "List", 0, 0), 0],
    [list("", "List", 0, 0), { sparse: 1 }],
    map("", "Map", 0, 0, 0),
    [map("", "Map", 0, 0, 0), { sparse: 1 }],
    SCHEMA.BLOB,
    sim("", "Media", 0, { mediaType: "application/json" }),
    SCHEMA.TIMESTAMP_EPOCH_SECONDS,
    SCHEMA.BIG_INTEGER,
    SCHEMA.BIG_DECIMAL,
    SCHEMA.NUMERIC,
  ]
);

export const deleteObjects = op(
  "ns",
  "DeleteObjects",
  {
    http: ["POST", "/{Bucket}?delete", 200],
  },
  struct(
    "ns",
    "DeleteObjectsRequest",
    {},
    ["Delete"],
    [
      [
        struct(
          "ns",
          "Delete",
          0,
          ["Objects"],
          [
            [
              list("ns", "ObjectIdentifierList", 0, struct("ns", "ObjectIdentifier", 0, ["Key"], [[0, 0]])),
              { xmlFlattened: 1, xmlName: "Object" },
            ],
          ]
        ),
        {
          httpPayload: 1,
          xmlName: "Delete",
        },
      ],
    ]
  ),
  struct("ns", "DeleteObjectsResponse", 0, [], [])
);

export const context = {
  async endpoint() {
    return {
      hostname: "localhost",
      path: "/",
      protocol: "https:",
    };
  },
} as any;
