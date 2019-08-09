import { _ReplicationInstanceList } from "./_ReplicationInstanceList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReplicationInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ReplicationInstances: {
      shape: _ReplicationInstanceList
    }
  }
};
