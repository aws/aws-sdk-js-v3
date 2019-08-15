import { _BackupPlan } from "./_BackupPlan";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBackupPlanOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BackupPlan: {
      shape: _BackupPlan
    },
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
    VersionId: {
      shape: {
        type: "string"
      }
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    DeletionDate: {
      shape: {
        type: "timestamp"
      }
    },
    LastExecutionDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
