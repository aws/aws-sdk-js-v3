import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Blueprint: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    blueprintId: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    group: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    isActive: {
      shape: {
        type: "boolean"
      }
    },
    minPower: {
      shape: {
        type: "integer"
      }
    },
    version: {
      shape: {
        type: "string"
      }
    },
    versionCode: {
      shape: {
        type: "string"
      }
    },
    productUrl: {
      shape: {
        type: "string"
      }
    },
    licenseUrl: {
      shape: {
        type: "string"
      }
    },
    platform: {
      shape: {
        type: "string"
      }
    }
  }
};
