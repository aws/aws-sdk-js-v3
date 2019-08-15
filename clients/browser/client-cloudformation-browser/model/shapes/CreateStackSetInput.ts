import { _Parameters } from "./_Parameters";
import { _Capabilities } from "./_Capabilities";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStackSetInput: _Structure_ = {
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
    Parameters: {
      shape: _Parameters
    },
    Capabilities: {
      shape: _Capabilities
    },
    Tags: {
      shape: _Tags
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
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
