import { _ClusterSubnetGroups } from "./_ClusterSubnetGroups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterSubnetGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ClusterSubnetGroups: {
      shape: _ClusterSubnetGroups
    }
  }
};
