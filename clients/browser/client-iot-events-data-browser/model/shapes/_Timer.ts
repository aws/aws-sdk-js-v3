import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Timer: _Structure_ = {
  type: "structure",
  required: ["name", "timestamp"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    timestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
