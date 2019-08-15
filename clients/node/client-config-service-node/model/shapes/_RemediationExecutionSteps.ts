import { List as _List_ } from "@aws-sdk/types";
import { _RemediationExecutionStep } from "./_RemediationExecutionStep";

export const _RemediationExecutionSteps: _List_ = {
  type: "list",
  member: {
    shape: _RemediationExecutionStep
  }
};
