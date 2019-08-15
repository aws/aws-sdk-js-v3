import { _DeploymentLaunchConfig } from "./_DeploymentLaunchConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DeploymentApplicationConfig: _Structure_ = {
  type: "structure",
  required: ["application", "applicationVersion", "launchConfig"],
  members: {
    application: {
      shape: {
        type: "string",
        min: 1
      }
    },
    applicationVersion: {
      shape: {
        type: "string",
        min: 1
      }
    },
    launchConfig: {
      shape: _DeploymentLaunchConfig
    }
  }
};
