import { _AccountList } from "./_AccountList";
import { _RegionList } from "./_RegionList";
import { _StackSetOperationPreferences } from "./_StackSetOperationPreferences";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteStackInstancesInput: _Structure_ = {
  type: "structure",
  required: ["StackSetName", "Accounts", "Regions", "RetainStacks"],
  members: {
    StackSetName: {
      shape: {
        type: "string"
      }
    },
    Accounts: {
      shape: _AccountList
    },
    Regions: {
      shape: _RegionList
    },
    OperationPreferences: {
      shape: _StackSetOperationPreferences
    },
    RetainStacks: {
      shape: {
        type: "boolean"
      }
    },
    OperationId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
