import { _ReplicationJobList } from "./_ReplicationJobList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReplicationJobsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    replicationJobList: {
      shape: _ReplicationJobList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
