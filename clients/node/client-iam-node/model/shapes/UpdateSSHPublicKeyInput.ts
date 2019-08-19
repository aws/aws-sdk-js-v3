import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSSHPublicKeyInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "SSHPublicKeyId", "Status"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SSHPublicKeyId: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
