import { _BackupRulesInput } from "./_BackupRulesInput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _BackupPlanInput: _Structure_ = {
  type: "structure",
  required: ["BackupPlanName", "Rules"],
  members: {
    BackupPlanName: {
      shape: {
        type: "string"
      }
    },
    Rules: {
      shape: _BackupRulesInput
    }
  }
};
