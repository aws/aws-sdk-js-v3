import { _Metadata } from "./_Metadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartRestoreJobInput: _Structure_ = {
  type: "structure",
  required: ["RecoveryPointArn", "Metadata", "IamRoleArn"],
  members: {
    RecoveryPointArn: {
      shape: {
        type: "string"
      }
    },
    Metadata: {
      shape: _Metadata
    },
    IamRoleArn: {
      shape: {
        type: "string"
      }
    },
    IdempotencyToken: {
      shape: {
        type: "string"
      }
    },
    ResourceType: {
      shape: {
        type: "string"
      }
    }
  }
};
