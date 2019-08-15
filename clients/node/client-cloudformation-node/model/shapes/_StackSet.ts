import { _Parameters } from "./_Parameters";
import { _Capabilities } from "./_Capabilities";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StackSet: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackSetName: {
      shape: {
        type: "string"
      }
    },
    StackSetId: {
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
    Status: {
      shape: {
        type: "string"
      }
    },
    TemplateBody: {
      shape: {
        type: "string",
        min: 1
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
    StackSetARN: {
      shape: {
        type: "string"
      }
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
    }
  }
};
