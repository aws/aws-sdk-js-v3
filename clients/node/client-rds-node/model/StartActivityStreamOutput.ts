import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartActivityStreamOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    KinesisStreamName: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    Mode: {
      shape: {
        type: "string"
      }
    },
    ApplyImmediately: {
      shape: {
        type: "boolean"
      }
    }
  }
};
