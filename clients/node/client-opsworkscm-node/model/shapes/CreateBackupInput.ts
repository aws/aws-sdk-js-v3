import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBackupInput: _Structure_ = {
  type: "structure",
  required: ["ServerName"],
  members: {
    ServerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    }
  }
};
