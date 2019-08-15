import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Datapoint: _Structure_ = {
  type: "structure",
  required: [],
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
