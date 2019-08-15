import { _Lifecycle } from "./_Lifecycle";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BackupRule: _Structure_ = {
  type: "structure",
  required: ["RuleName", "TargetBackupVaultName"],
  members: {
    RuleName: {
      shape: {
        type: "string"
      }
    },
    TargetBackupVaultName: {
      shape: {
        type: "string"
      }
    },
    ScheduleExpression: {
      shape: {
        type: "string"
      }
    },
    StartWindowMinutes: {
      shape: {
        type: "integer"
      }
    },
    CompletionWindowMinutes: {
      shape: {
        type: "integer"
      }
    },
    Lifecycle: {
      shape: _Lifecycle
    },
    RecoveryPointTags: {
      shape: _Tags
    },
    RuleId: {
      shape: {
        type: "string"
      }
    }
  }
};
