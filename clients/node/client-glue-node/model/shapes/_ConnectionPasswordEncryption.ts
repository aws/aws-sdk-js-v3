import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConnectionPasswordEncryption: _Structure_ = {
  type: "structure",
  required: ["ReturnConnectionPasswordEncrypted"],
  members: {
    ReturnConnectionPasswordEncrypted: {
      shape: {
        type: "boolean"
      }
    },
    AwsKmsKeyId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
