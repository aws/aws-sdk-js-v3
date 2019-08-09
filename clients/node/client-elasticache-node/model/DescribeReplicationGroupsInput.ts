import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReplicationGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationGroupId: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
