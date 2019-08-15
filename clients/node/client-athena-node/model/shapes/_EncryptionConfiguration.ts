import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionConfiguration: _Structure_ = {
  type: "structure",
  required: ["EncryptionOption"],
  members: {
    EncryptionOption: {
      shape: {
        type: "string"
      }
    },
    KmsKey: {
      shape: {
        type: "string"
      }
    }
  }
};
