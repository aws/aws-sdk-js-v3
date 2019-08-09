import { _DeploymentCommandArgs } from "./_DeploymentCommandArgs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeploymentCommand: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
    Name: {
      shape: {
        type: "string"
      }
    },
    Args: {
      shape: _DeploymentCommandArgs
    }
  }
};
