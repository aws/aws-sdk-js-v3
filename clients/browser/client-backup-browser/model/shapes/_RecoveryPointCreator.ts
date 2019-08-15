import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecoveryPointCreator: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupPlanId: {
      shape: {
        type: "string"
      }
    },
    BackupPlanArn: {
      shape: {
        type: "string"
      }
    },
    BackupPlanVersion: {
      shape: {
        type: "string"
      }
    },
    BackupRuleId: {
      shape: {
        type: "string"
      }
    }
  }
};
