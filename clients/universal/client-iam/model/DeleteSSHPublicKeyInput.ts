import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSSHPublicKeyInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "SSHPublicKeyId"],
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
    }
  }
};
