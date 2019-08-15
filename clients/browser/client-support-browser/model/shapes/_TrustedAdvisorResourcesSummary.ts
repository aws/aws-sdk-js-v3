import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TrustedAdvisorResourcesSummary: _Structure_ = {
  type: "structure",
  required: [
    "resourcesProcessed",
    "resourcesFlagged",
    "resourcesIgnored",
    "resourcesSuppressed"
  ],
  members: {
    resourcesProcessed: {
      shape: {
        type: "integer"
      }
    },
    resourcesFlagged: {
      shape: {
        type: "integer"
      }
    },
    resourcesIgnored: {
      shape: {
        type: "integer"
      }
    },
    resourcesSuppressed: {
      shape: {
        type: "integer"
      }
    }
  }
};
