import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TapeRecoveryPointInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TapeARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    TapeRecoveryPointTime: {
      shape: {
        type: "timestamp"
      }
    },
    TapeSizeInBytes: {
      shape: {
        type: "integer"
      }
    },
    TapeStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
