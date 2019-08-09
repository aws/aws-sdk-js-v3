import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { _CustomRules } from "./_CustomRules";
import { _AutoBranchCreationPatterns } from "./_AutoBranchCreationPatterns";
import { _AutoBranchCreationConfig } from "./_AutoBranchCreationConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateAppInput: _Structure_ = {
  type: "structure",
  required: ["appId"],
  members: {
    appId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "appId"
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    platform: {
      shape: {
        type: "string"
      }
    },
    iamServiceRoleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    environmentVariables: {
      shape: _EnvironmentVariables
    },
    enableBranchAutoBuild: {
      shape: {
        type: "boolean"
      }
    },
    enableBasicAuth: {
      shape: {
        type: "boolean"
      }
    },
    basicAuthCredentials: {
      shape: {
        type: "string"
      }
    },
    customRules: {
      shape: _CustomRules
    },
    buildSpec: {
      shape: {
        type: "string",
        min: 1
      }
    },
    enableAutoBranchCreation: {
      shape: {
        type: "boolean"
      }
    },
    autoBranchCreationPatterns: {
      shape: _AutoBranchCreationPatterns
    },
    autoBranchCreationConfig: {
      shape: _AutoBranchCreationConfig
    }
  }
};
