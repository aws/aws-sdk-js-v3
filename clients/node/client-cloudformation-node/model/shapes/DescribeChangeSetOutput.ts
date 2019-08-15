import { _Parameters } from "./_Parameters";
import { _NotificationARNs } from "./_NotificationARNs";
import { _RollbackConfiguration } from "./_RollbackConfiguration";
import { _Capabilities } from "./_Capabilities";
import { _Tags } from "./_Tags";
import { _Changes } from "./_Changes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeChangeSetOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ChangeSetName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ChangeSetId: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    ExecutionStatus: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    StatusReason: {
      shape: {
        type: "string"
      }
    },
    NotificationARNs: {
      shape: _NotificationARNs
    },
    RollbackConfiguration: {
      shape: _RollbackConfiguration
    },
    Capabilities: {
      shape: _Capabilities
    },
    Tags: {
      shape: _Tags
    },
    Changes: {
      shape: _Changes
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
