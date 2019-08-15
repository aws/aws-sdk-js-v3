import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateKmsKeyInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName", "kmsKeyId"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    kmsKeyId: {
      shape: {
        type: "string"
      }
    }
  }
};
