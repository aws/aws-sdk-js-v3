import { _StackSetAccounts } from "./_StackSetAccounts";
import { _StackSetRegions } from "./_StackSetRegions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UpdateProvisioningPreferences: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackSetAccounts: {
      shape: _StackSetAccounts
    },
    StackSetRegions: {
      shape: _StackSetRegions
    },
    StackSetFailureToleranceCount: {
      shape: {
        type: "integer"
      }
    },
    StackSetFailureTolerancePercentage: {
      shape: {
        type: "integer"
      }
    },
    StackSetMaxConcurrencyCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    StackSetMaxConcurrencyPercentage: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    StackSetOperationType: {
      shape: {
        type: "string"
      }
    }
  }
};
