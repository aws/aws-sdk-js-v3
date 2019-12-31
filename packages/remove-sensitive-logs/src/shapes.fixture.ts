/*import {
  Blob,
  Boolean,
  Float,
  Integer,
  List,
  Map,
  String,
  Structure,
  Timestamp
} from "@aws-sdk/types";*/

export const structureWithSensitiveMember = {
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

export const listWithSensitiveMember = {
  type: "list",
  member: {
    shape: { type: "string" },
    sensitive: true
  }
};

export const mapWithSensitiveValue = {
  type: "map",
  key: {
    shape: { type: "string" }
  },
  value: {
    shape: { type: "string" },
    sensitive: true
  }
};

export const sensitiveStructureShape = {
  type: "structure",
  required: [],
  members: {},
  sensitive: true
};

export const sensitiveListShape = {
  type: "list",
  member: {
    shape: { type: "string" }
  },
  sensitive: true
};

export const sensitiveMapShape = {
  type: "map",
  key: {
    shape: { type: "string" }
  },
  value: {
    shape: { type: "string" }
  },
  sensitive: true
};

export const sensitiveStringShape = {
  type: "string",
  sensitive: true
};

export const sensitiveBlobShape = {
  type: "blob",
  sensitive: true
};

export const sensitiveTimestampShape = {
  type: "timestamp",
  sensitive: true
};

export const sensitiveBooleanShape = {
  type: "boolean",
  sensitive: true
};

export const sensitiveIntegerShape = {
  type: "integer",
  sensitive: true
};

export const sensitiveFloatShape = {
  type: "float",
  sensitive: true
};

export const recursiveShape = {
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
