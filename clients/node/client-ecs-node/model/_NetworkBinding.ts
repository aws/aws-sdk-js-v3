import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkBinding: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bindIP: {
      shape: {
        type: "string"
      }
    },
    containerPort: {
      shape: {
        type: "integer"
      }
    },
    hostPort: {
      shape: {
        type: "integer"
      }
    },
    protocol: {
      shape: {
        type: "string"
      }
    }
  }
};
