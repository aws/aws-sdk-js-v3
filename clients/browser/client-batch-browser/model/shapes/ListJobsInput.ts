import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    jobQueue: {
      shape: {
        type: "string"
      }
    },
    arrayJobId: {
      shape: {
        type: "string"
      }
    },
    multiNodeJobId: {
      shape: {
        type: "string"
      }
    },
    jobStatus: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
