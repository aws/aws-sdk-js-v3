import { Structure as _Structure_ } from "@aws-sdk/types";

export const UploadSSHPublicKeyInput: _Structure_ = {
  type: "structure",
  required: ["UserName", "SSHPublicKeyBody"],
  members: {
    UserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SSHPublicKeyBody: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
