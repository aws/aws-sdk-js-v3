import { _FailedRemediationBatches } from "./_FailedRemediationBatches";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRemediationConfigurationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedBatches: {
      shape: _FailedRemediationBatches
    }
  }
};
