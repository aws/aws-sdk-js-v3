import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutEncryptionConfigInput: _Structure_ = {
  type: "structure",
  required: ["Type"],
  members: {
    KeyId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    }
  }
};
