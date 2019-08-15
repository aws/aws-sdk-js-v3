import { _DeploymentCommand } from "./_DeploymentCommand";
import { _Strings } from "./_Strings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Deployment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeploymentId: {
      shape: {
        type: "string"
      }
    },
    StackId: {
      shape: {
        type: "string"
      }
    },
    AppId: {
      shape: {
        type: "string"
      }
    },
    CreatedAt: {
      shape: {
        type: "string"
      }
    },
    CompletedAt: {
      shape: {
        type: "string"
      }
    },
    Duration: {
      shape: {
        type: "integer"
      }
    },
    IamUserArn: {
      shape: {
        type: "string"
      }
    },
    Comment: {
      shape: {
        type: "string"
      }
    },
    Command: {
      shape: _DeploymentCommand
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CustomJson: {
      shape: {
        type: "string"
      }
    },
    InstanceIds: {
      shape: _Strings
    }
  }
};
