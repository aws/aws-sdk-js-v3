import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AutoBranchCreationConfig: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    stage: {
      shape: {
        type: "string"
      }
    },
    framework: {
      shape: {
        type: "string"
      }
    },
    enableAutoBuild: {
      shape: {
        type: "boolean"
      }
    },
    environmentVariables: {
      shape: _EnvironmentVariables
    },
    basicAuthCredentials: {
      shape: {
        type: "string"
      }
    },
    enableBasicAuth: {
      shape: {
        type: "boolean"
      }
    },
    buildSpec: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
