import { _AccountGateResult } from "./_AccountGateResult";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackSetOperationResultSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Account: {
      shape: {
        type: "string"
      }
    },
    Region: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusReason: {
      shape: {
        type: "string"
      }
    },
    AccountGateResult: {
      shape: _AccountGateResult
    }
  }
};
