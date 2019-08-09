import { _Accounts } from "./_Accounts";
import { _Regions } from "./_Regions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Accounts: {
      shape: _Accounts
    },
    Regions: {
      shape: _Regions
    },
    TargetLocationMaxConcurrency: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetLocationMaxErrors: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ExecutionRoleName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
