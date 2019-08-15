import { _TargetAuditCheckNames } from "./_TargetAuditCheckNames";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartOnDemandAuditTaskInput: _Structure_ = {
  type: "structure",
  required: ["targetCheckNames"],
  members: {
    targetCheckNames: {
      shape: _TargetAuditCheckNames
    }
  }
};
