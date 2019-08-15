import { _Parameters } from "./_Parameters";
import { _RollbackConfiguration } from "./_RollbackConfiguration";
import { _NotificationARNs } from "./_NotificationARNs";
import { _Capabilities } from "./_Capabilities";
import { _ResourceTypes } from "./_ResourceTypes";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStackInput: _Structure_ = {
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
    Parameters: {
      shape: _Parameters
    },
    DisableRollback: {
      shape: {
        type: "boolean"
      }
    },
    RollbackConfiguration: {
      shape: _RollbackConfiguration
    },
    TimeoutInMinutes: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NotificationARNs: {
      shape: _NotificationARNs
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
    OnFailure: {
      shape: {
        type: "string"
      }
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
    Tags: {
      shape: _Tags
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EnableTerminationProtection: {
      shape: {
        type: "boolean"
      }
    }
  }
};
