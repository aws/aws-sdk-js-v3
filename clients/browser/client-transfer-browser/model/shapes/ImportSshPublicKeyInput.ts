import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportSshPublicKeyInput: _Structure_ = {
  type: "structure",
  required: ["ServerId", "SshPublicKeyBody", "UserName"],
  members: {
    ServerId: {
      shape: {
        type: "string"
      }
    },
    SshPublicKeyBody: {
      shape: {
        type: "string"
      }
    },
    UserName: {
      shape: {
        type: "string"
      }
    }
  }
};
