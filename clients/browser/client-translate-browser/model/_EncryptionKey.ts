import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionKey: _Structure_ = {
  type: "structure",
  required: ["Type", "Id"],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
