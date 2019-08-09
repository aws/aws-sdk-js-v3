import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FileSystemSize: _Structure_ = {
  type: "structure",
  required: ["Value"],
  members: {
    Value: {
      shape: {
        type: "integer"
      }
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      }
    },
    ValueInIA: {
      shape: {
        type: "integer"
      }
    },
    ValueInStandard: {
      shape: {
        type: "integer"
      }
    }
  }
};
