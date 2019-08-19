import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SSHPublicKeyMetadata: _Structure_ = {
  type: "structure",
  required: ["UserName", "SSHPublicKeyId", "Status", "UploadDate"],
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
    },
    UploadDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
