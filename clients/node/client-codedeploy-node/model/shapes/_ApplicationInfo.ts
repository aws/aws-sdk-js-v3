import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    applicationId: {
      shape: {
        type: "string"
      }
    },
    applicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    createTime: {
      shape: {
        type: "timestamp"
      }
    },
    linkedToGitHub: {
      shape: {
        type: "boolean"
      }
    },
    gitHubAccountName: {
      shape: {
        type: "string"
      }
    },
    computePlatform: {
      shape: {
        type: "string"
      }
    }
  }
};
