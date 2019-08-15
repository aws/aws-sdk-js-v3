import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PortMapping: _Structure_ = {
  type: "structure",
  required: [],
  members: {
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
