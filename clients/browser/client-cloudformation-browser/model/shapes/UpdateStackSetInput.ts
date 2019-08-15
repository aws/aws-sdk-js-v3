import { _Parameters } from "./_Parameters";
import { _Capabilities } from "./_Capabilities";
import { _Tags } from "./_Tags";
import { _StackSetOperationPreferences } from "./_StackSetOperationPreferences";
import { _AccountList } from "./_AccountList";
import { _RegionList } from "./_RegionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateStackSetInput: _Structure_ = {
  type: "structure",
  required: ["StackSetName"],
  members: {
    StackSetName: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TemplateBody: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TemplateURL: {
      shape: {
        type: "string",
        min: 1
      }
    },
    UsePreviousTemplate: {
      shape: {
        type: "boolean"
      }
    },
    Parameters: {
      shape: _Parameters
    },
    Capabilities: {
      shape: _Capabilities
    },
    Tags: {
      shape: _Tags
    },
    OperationPreferences: {
      shape: _StackSetOperationPreferences
    },
    AdministrationRoleARN: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ExecutionRoleName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    OperationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Accounts: {
      shape: _AccountList
    },
    Regions: {
      shape: _RegionList
    }
  }
};
