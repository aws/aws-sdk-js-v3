import { List as _List_ } from "@aws-sdk/types";
import { _FailedRemediationBatch } from "./_FailedRemediationBatch";

export const _FailedRemediationBatches: _List_ = {
  type: "list",
  member: {
    shape: _FailedRemediationBatch
  }
};
