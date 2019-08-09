import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteAccessKeyInput: _Structure_ = {
  type: "structure",
  required: ["AccessKeyId"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AccessKeyId: {
      shape: {
        type: "string",
        min: 16
      }
    }
  }
};
