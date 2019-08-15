import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendSSHPublicKeyOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RequestId: {
      shape: {
        type: "string"
      }
    },
    Success: {
      shape: {
        type: "boolean"
      }
    }
  }
};
