import { _ResourceKeys } from "./_ResourceKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartRemediationExecutionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailureMessage: {
      shape: {
        type: "string"
      }
    },
    FailedItems: {
      shape: _ResourceKeys
    }
  }
};
