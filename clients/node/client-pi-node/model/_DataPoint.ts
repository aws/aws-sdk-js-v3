import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DataPoint: _Structure_ = {
  type: "structure",
  required: ["Timestamp", "Value"],
  members: {
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    Value: {
      shape: {
        type: "float"
      }
    }
  }
};
