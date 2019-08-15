import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobSummary: _Structure_ = {
  type: "structure",
  required: [
    "jobArn",
    "jobId",
    "commitId",
    "commitMessage",
    "commitTime",
    "startTime",
    "status",
    "jobType"
  ],
  members: {
    jobArn: {
      shape: {
        type: "string"
      }
    },
    jobId: {
      shape: {
        type: "string"
      }
    },
    commitId: {
      shape: {
        type: "string"
      }
    },
    commitMessage: {
      shape: {
        type: "string"
      }
    },
    commitTime: {
      shape: {
        type: "timestamp"
      }
    },
    startTime: {
      shape: {
        type: "timestamp"
      }
    },
    status: {
      shape: {
        type: "string"
      }
    },
    endTime: {
      shape: {
        type: "timestamp"
      }
    },
    jobType: {
      shape: {
        type: "string"
      }
    }
  }
};
