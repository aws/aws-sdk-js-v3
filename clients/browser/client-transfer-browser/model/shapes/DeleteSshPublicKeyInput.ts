import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSshPublicKeyInput: _Structure_ = {
  type: "structure",
  required: ["ServerId", "SshPublicKeyId", "UserName"],
  members: {
    ServerId: {
      shape: {
        type: "string"
      }
    },
    SshPublicKeyId: {
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
