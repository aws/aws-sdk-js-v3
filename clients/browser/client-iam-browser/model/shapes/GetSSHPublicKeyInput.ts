import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSSHPublicKeyInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "SSHPublicKeyId", "Encoding"],
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
    Encoding: {
      shape: {
        type: "string"
      }
    }
  }
};
