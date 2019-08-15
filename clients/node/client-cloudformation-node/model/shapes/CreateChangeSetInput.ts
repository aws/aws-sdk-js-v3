import { _Parameters } from "./_Parameters";
import { _Capabilities } from "./_Capabilities";
import { _ResourceTypes } from "./_ResourceTypes";
import { _RollbackConfiguration } from "./_RollbackConfiguration";
import { _NotificationARNs } from "./_NotificationARNs";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateChangeSetInput: _Structure_ = {
  type: "structure",
  required: ["StackName", "ChangeSetName"],
  members: {
    StackName: {
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
    NotificationARNs: {
      shape: _NotificationARNs
    },
    Tags: {
      shape: _Tags
    },
    ChangeSetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeSetType: {
      shape: {
        type: "string"
      }
    }
  }
};
