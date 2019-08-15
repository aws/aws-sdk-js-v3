import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobSummary: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobArn: {
      shape: {
        type: "string"
      }
    },
    jobId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    targetSelection: {
      shape: {
        type: "string"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    lastUpdatedAt: {
      shape: {
        type: "timestamp"
      }
    },
    completedAt: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
