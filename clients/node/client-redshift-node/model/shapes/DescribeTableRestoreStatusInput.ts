import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTableRestoreStatusInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    TableRestoreRequestId: {
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
