import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReplicationRunsInput: _Structure_ = {
  type: "structure",
  required: ["replicationJobId"],
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
