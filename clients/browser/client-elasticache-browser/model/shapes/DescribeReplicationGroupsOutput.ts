import { _ReplicationGroupList } from "./_ReplicationGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReplicationGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ReplicationGroups: {
      shape: _ReplicationGroupList
    }
  }
};
