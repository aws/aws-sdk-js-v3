import { _TagMap } from "./_TagMap";
import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { _CustomDomains } from "./_CustomDomains";
import { _AssociatedResources } from "./_AssociatedResources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Branch: _Structure_ = {
  type: "structure",
  required: [
    "branchArn",
    "branchName",
    "description",
    "stage",
    "displayName",
    "enableNotification",
    "createTime",
    "updateTime",
    "environmentVariables",
    "enableAutoBuild",
    "customDomains",
    "framework",
    "activeJobId",
    "totalNumberOfJobs",
    "enableBasicAuth",
    "ttl"
  ],
  members: {
    branchArn: {
      shape: {
        type: "string"
      }
    },
    branchName: {
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
    tags: {
      shape: _TagMap
    },
    stage: {
      shape: {
        type: "string"
      }
    },
    displayName: {
      shape: {
        type: "string"
      }
    },
    enableNotification: {
      shape: {
        type: "boolean"
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
    environmentVariables: {
      shape: _EnvironmentVariables
    },
    enableAutoBuild: {
      shape: {
        type: "boolean"
      }
    },
    customDomains: {
      shape: _CustomDomains
    },
    framework: {
      shape: {
        type: "string"
      }
    },
    activeJobId: {
      shape: {
        type: "string"
      }
    },
    totalNumberOfJobs: {
      shape: {
        type: "string"
      }
    },
    enableBasicAuth: {
      shape: {
        type: "boolean"
      }
    },
    thumbnailUrl: {
      shape: {
        type: "string",
        min: 1
      }
    },
    basicAuthCredentials: {
      shape: {
        type: "string"
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
    associatedResources: {
      shape: _AssociatedResources
    }
  }
};
