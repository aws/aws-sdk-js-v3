import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstancePortInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    fromPort: {
      shape: {
        type: "integer"
      }
    },
    toPort: {
      shape: {
        type: "integer"
      }
    },
    protocol: {
      shape: {
        type: "string"
      }
    },
    accessFrom: {
      shape: {
        type: "string"
      }
    },
    accessType: {
      shape: {
        type: "string"
      }
    },
    commonName: {
      shape: {
        type: "string"
      }
    },
    accessDirection: {
      shape: {
        type: "string"
      }
    }
  }
};
