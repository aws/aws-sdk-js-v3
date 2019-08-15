import { _ReplicationTaskList } from "./_ReplicationTaskList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReplicationTasksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ReplicationTasks: {
      shape: _ReplicationTaskList
    }
  }
};
