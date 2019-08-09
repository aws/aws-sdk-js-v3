import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopActivityStreamOutput: _Structure_ = {
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
    }
  }
};
