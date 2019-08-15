import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SSHPublicKey: _Structure_ = {
  type: "structure",
  required: [
    "UserName",
    "SSHPublicKeyId",
    "Fingerprint",
    "SSHPublicKeyBody",
    "Status"
  ],
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
    Fingerprint: {
      shape: {
        type: "string",
        min: 48
      }
    },
    SSHPublicKeyBody: {
      shape: {
        type: "string",
        min: 1
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
