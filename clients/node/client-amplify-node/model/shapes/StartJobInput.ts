import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartJobInput: _Structure_ = {
  type: "structure",
  required: ["appId", "branchName", "jobType"],
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
    jobId: {
      shape: {
        type: "string"
      }
    },
    jobType: {
      shape: {
        type: "string"
      }
    },
    jobReason: {
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
    }
  }
};
