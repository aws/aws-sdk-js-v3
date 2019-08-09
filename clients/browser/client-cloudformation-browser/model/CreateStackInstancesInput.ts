import { _AccountList } from "./_AccountList";
import { _RegionList } from "./_RegionList";
import { _Parameters } from "./_Parameters";
import { _StackSetOperationPreferences } from "./_StackSetOperationPreferences";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStackInstancesInput: _Structure_ = {
  type: "structure",
  required: ["StackSetName", "Accounts", "Regions"],
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
    ParameterOverrides: {
      shape: _Parameters
    },
    OperationPreferences: {
      shape: _StackSetOperationPreferences
    },
    OperationId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
