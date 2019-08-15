import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAccessKeyInput: _Structure_ = {
  type: "structure",
  required: ["AccessKeyId", "Status"],
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
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
