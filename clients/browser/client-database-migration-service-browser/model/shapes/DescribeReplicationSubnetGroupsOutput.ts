import { _ReplicationSubnetGroups } from "./_ReplicationSubnetGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReplicationSubnetGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ReplicationSubnetGroups: {
      shape: _ReplicationSubnetGroups
    }
  }
};
