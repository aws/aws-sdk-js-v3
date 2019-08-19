import { _BackupPlanInput } from "./_BackupPlanInput";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBackupPlanInput: _Structure_ = {
  type: "structure",
  required: ["BackupPlan"],
  members: {
    BackupPlan: {
      shape: _BackupPlanInput
    },
    BackupPlanTags: {
      shape: _Tags
    },
    CreatorRequestId: {
      shape: {
        type: "string"
      }
    }
  }
};
