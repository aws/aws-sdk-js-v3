import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EncryptionKey: _Structure_ = {
  type: "structure",
  required: ["id", "type"],
  members: {
    id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    type: {
      shape: {
        type: "string"
      }
    }
  }
};
