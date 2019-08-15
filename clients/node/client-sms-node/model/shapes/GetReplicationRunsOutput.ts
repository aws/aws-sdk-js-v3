import { _ReplicationJob } from "./_ReplicationJob";
import { _ReplicationRunList } from "./_ReplicationRunList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReplicationRunsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    replicationJob: {
      shape: _ReplicationJob
    },
    replicationRunList: {
      shape: _ReplicationRunList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
