import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeviceEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Value: {
      shape: {
        type: "string"
      }
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
