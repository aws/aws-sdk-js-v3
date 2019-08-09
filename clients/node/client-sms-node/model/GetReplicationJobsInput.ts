import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReplicationJobsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    replicationJobId: {
      shape: {
        type: "string"
      }
    },
    nextToken: {
      shape: {
        type: "string"
      }
    },
    maxResults: {
      shape: {
        type: "integer"
      }
    }
  }
};
