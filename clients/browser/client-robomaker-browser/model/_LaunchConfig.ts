import { _EnvironmentVariableMap } from "./_EnvironmentVariableMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LaunchConfig: _Structure_ = {
  type: "structure",
  required: ["packageName", "launchFile"],
  members: {
    packageName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    launchFile: {
      shape: {
        type: "string",
        min: 1
      }
    },
    environmentVariables: {
      shape: _EnvironmentVariableMap
    }
  }
};
