import { List as _List_ } from "@aws-sdk/types";
import { _RemediationExecutionStatus } from "./_RemediationExecutionStatus";

export const _RemediationExecutionStatuses: _List_ = {
  type: "list",
  member: {
    shape: _RemediationExecutionStatus
  }
};
