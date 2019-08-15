import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOrderableClusterOptionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterVersion: {
      shape: {
        type: "string"
      }
    },
    NodeType: {
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
