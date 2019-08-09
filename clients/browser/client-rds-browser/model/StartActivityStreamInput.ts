import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartActivityStreamInput: _Structure_ = {
  type: "structure",
  required: ["ResourceArn", "Mode", "KmsKeyId"],
  members: {
    ResourceArn: {
      shape: {
        type: "string"
      }
    },
    Mode: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
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
