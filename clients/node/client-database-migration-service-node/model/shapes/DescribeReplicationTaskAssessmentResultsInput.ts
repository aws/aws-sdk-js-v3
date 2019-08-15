import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReplicationTaskAssessmentResultsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReplicationTaskArn: {
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
