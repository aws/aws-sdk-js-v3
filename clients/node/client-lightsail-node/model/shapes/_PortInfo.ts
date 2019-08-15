import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PortInfo: _Structure_ = {
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
    }
  }
};
