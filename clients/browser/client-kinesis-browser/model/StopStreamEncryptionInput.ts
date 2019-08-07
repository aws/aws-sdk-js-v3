import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopStreamEncryptionInput: _Structure_ = {
  type: "structure",
  required: ["StreamName", "EncryptionType", "KeyId"],
  members: {
    StreamName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EncryptionType: {
      shape: {
        type: "string"
      }
    },
    KeyId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
