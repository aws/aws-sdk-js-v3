import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReplicationInstanceTaskLogsInput: _Structure_ = {
  type: "structure",
  required: ["ReplicationInstanceArn"],
  members: {
    ReplicationInstanceArn: {
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
