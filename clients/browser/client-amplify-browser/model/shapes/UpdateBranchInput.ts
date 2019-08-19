import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBranchInput: _Structure_ = {
  type: "structure",
  required: ["appId", "branchName"],
  members: {
    appId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "appId"
    },
    branchName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "branchName"
    },
    description: {
      shape: {
        type: "string"
      }
    },
    framework: {
      shape: {
        type: "string"
      }
    },
    stage: {
      shape: {
        type: "string"
      }
    },
    enableNotification: {
      shape: {
        type: "boolean"
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
    },
    ttl: {
      shape: {
        type: "string"
      }
    },
    displayName: {
      shape: {
        type: "string"
      }
    }
  }
};
