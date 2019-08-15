import { _LaunchConfig } from "./_LaunchConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RobotApplicationConfig: _Structure_ = {
  type: "structure",
  required: ["application", "launchConfig"],
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
      shape: _LaunchConfig
    }
  }
};
