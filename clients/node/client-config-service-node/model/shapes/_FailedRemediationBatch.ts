import { _RemediationConfigurations } from "./_RemediationConfigurations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _FailedRemediationBatch: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailureMessage: {
      shape: {
        type: "string"
      }
    },
    FailedItems: {
      shape: _RemediationConfigurations
    }
  }
};
