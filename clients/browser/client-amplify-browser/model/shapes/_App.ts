import { _TagMap } from "./_TagMap";
import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { _CustomRules } from "./_CustomRules";
import { _ProductionBranch } from "./_ProductionBranch";
import { _AutoBranchCreationPatterns } from "./_AutoBranchCreationPatterns";
import { _AutoBranchCreationConfig } from "./_AutoBranchCreationConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _App: _Structure_ = {
  type: "structure",
  required: [
    "appId",
    "appArn",
    "name",
    "description",
    "repository",
    "platform",
    "createTime",
    "updateTime",
    "environmentVariables",
    "defaultDomain",
    "enableBranchAutoBuild",
    "enableBasicAuth"
  ],
  members: {
    appId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    appArn: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _TagMap
    },
    description: {
      shape: {
        type: "string"
      }
    },
    repository: {
      shape: {
        type: "string"
      }
    },
    platform: {
      shape: {
        type: "string"
      }
    },
    createTime: {
      shape: {
        type: "timestamp"
      }
    },
    updateTime: {
      shape: {
        type: "timestamp"
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
    defaultDomain: {
      shape: {
        type: "string",
        min: 1
      }
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
    productionBranch: {
      shape: _ProductionBranch
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
