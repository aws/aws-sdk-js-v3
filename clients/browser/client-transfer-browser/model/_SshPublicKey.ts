import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SshPublicKey: _Structure_ = {
  type: "structure",
  required: ["DateImported", "SshPublicKeyBody", "SshPublicKeyId"],
  members: {
    DateImported: {
      shape: {
        type: "timestamp"
      }
    },
    SshPublicKeyBody: {
      shape: {
        type: "string"
      }
    },
    SshPublicKeyId: {
      shape: {
        type: "string"
      }
    }
  }
};
