import { _Parameters } from "./_Parameters";
import { _Capabilities } from "./_Capabilities";
import { _ResourceTypes } from "./_ResourceTypes";
import { _RollbackConfiguration } from "./_RollbackConfiguration";
import { _NotificationARNs } from "./_NotificationARNs";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateStackInput: _Structure_ = {
  type: "structure",
  required: ["StackName"],
  members: {
    StackName: {
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
    StackPolicyDuringUpdateBody: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StackPolicyDuringUpdateURL: {
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
    ResourceTypes: {
      shape: _ResourceTypes
    },
    RoleARN: {
      shape: {
        type: "string",
        min: 20
      }
    },
    RollbackConfiguration: {
      shape: _RollbackConfiguration
    },
    StackPolicyBody: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StackPolicyURL: {
      shape: {
        type: "string",
        min: 1
      }
    },
    NotificationARNs: {
      shape: _NotificationARNs
    },
    Tags: {
      shape: _Tags
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
