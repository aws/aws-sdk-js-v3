import { _Parameters } from "./_Parameters";
import { _RollbackConfiguration } from "./_RollbackConfiguration";
import { _NotificationARNs } from "./_NotificationARNs";
import { _Capabilities } from "./_Capabilities";
import { _Outputs } from "./_Outputs";
import { _Tags } from "./_Tags";
import { _StackDriftInformation } from "./_StackDriftInformation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Stack: _Structure_ = {
  type: "structure",
  required: ["StackName", "CreationTime", "StackStatus"],
  members: {
    StackId: {
      shape: {
        type: "string"
      }
    },
    StackName: {
      shape: {
        type: "string"
      }
    },
    ChangeSetId: {
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
    Parameters: {
      shape: _Parameters
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    DeletionTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastUpdatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    RollbackConfiguration: {
      shape: _RollbackConfiguration
    },
    StackStatus: {
      shape: {
        type: "string"
      }
    },
    StackStatusReason: {
      shape: {
        type: "string"
      }
    },
    DisableRollback: {
      shape: {
        type: "boolean"
      }
    },
    NotificationARNs: {
      shape: _NotificationARNs
    },
    TimeoutInMinutes: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Capabilities: {
      shape: _Capabilities
    },
    Outputs: {
      shape: _Outputs
    },
    RoleARN: {
      shape: {
        type: "string",
        min: 20
      }
    },
    Tags: {
      shape: _Tags
    },
    EnableTerminationProtection: {
      shape: {
        type: "boolean"
      }
    },
    ParentId: {
      shape: {
        type: "string"
      }
    },
    RootId: {
      shape: {
        type: "string"
      }
    },
    DriftInformation: {
      shape: _StackDriftInformation
    }
  }
};
