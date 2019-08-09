import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PortRange: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FromPort: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    ToPort: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
