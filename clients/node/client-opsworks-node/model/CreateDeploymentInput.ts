import { _Strings } from "./_Strings";
import { _DeploymentCommand } from "./_DeploymentCommand";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateDeploymentInput: _Structure_ = {
  type: "structure",
  required: ["StackId", "Command"],
  members: {
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
    InstanceIds: {
      shape: _Strings
    },
    LayerIds: {
      shape: _Strings
    },
    Command: {
      shape: _DeploymentCommand
    },
    Comment: {
      shape: {
        type: "string"
      }
    },
    CustomJson: {
      shape: {
        type: "string"
      }
    }
  }
};
