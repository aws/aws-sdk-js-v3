import { Structure as _Structure_ } from "@aws-sdk/types";

export const RestoreServerInput: _Structure_ = {
  type: "structure",
  required: ["BackupId", "ServerName"],
  members: {
    BackupId: {
      shape: {
        type: "string"
      }
    },
    ServerName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InstanceType: {
      shape: {
        type: "string"
      }
    },
    KeyPair: {
      shape: {
        type: "string"
      }
    }
  }
};
