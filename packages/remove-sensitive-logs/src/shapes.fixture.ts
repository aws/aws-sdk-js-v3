import {
  Blob,
  Boolean,
  Float,
  Integer,
  List,
  Map,
  String,
  Structure,
  Timestamp
} from "@aws-sdk/types";

export const structureWithSensitiveMember: Structure = {
  type: "structure",
  required: [],
  members: {
    foo: {
      shape: { type: "string" },
      sensitive: true
    },
    bar: {
      shape: { type: "string" }
    }
  }
};

export const listWithSensitiveMember: List = {
  type: "list",
  member: {
    shape: { type: "string" },
    sensitive: true
  }
};

export const mapWithSensitiveValue: Map = {
  type: "map",
  key: {
    shape: { type: "string" }
  },
  value: {
    shape: { type: "string" },
    sensitive: true
  }
};

export const sensitiveStructureShape: Structure = {
  type: "structure",
  required: [],
  members: {},
  sensitive: true
};

export const sensitiveListShape: List = {
  type: "list",
  member: {
    shape: { type: "string" }
  },
  sensitive: true
};

export const sensitiveMapShape: Map = {
  type: "map",
  key: {
    shape: { type: "string" }
  },
  value: {
    shape: { type: "string" }
  },
  sensitive: true
};

export const sensitiveStringShape: String = {
  type: "string",
  sensitive: true
};

export const sensitiveBlobShape: Blob = {
  type: "blob",
  sensitive: true
};

export const sensitiveTimestampShape: Timestamp = {
  type: "timestamp",
  sensitive: true
};

export const sensitiveBooleanShape: Boolean = {
  type: "boolean",
  sensitive: true
};

export const sensitiveIntegerShape: Integer = {
  type: "integer",
  sensitive: true
};

export const sensitiveFloatShape: Float = {
  type: "float",
  sensitive: true
};

export const recursiveShape: Structure = {
  type: "structure",
  required: [],
  members: {
    foo: { shape: { type: "string" } },
    bar: {
      shape: {
        type: "list",
        member: {
          shape: {
            type: "map",
            key: { shape: { type: "string" } },
            value: {
              shape: {
                type: "blob",
                sensitive: true
              }
            }
          }
        }
      }
    }
  }
};
