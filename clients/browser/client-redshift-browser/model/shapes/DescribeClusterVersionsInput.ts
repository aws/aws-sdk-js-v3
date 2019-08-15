import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterVersionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterVersion: {
      shape: {
        type: "string"
      }
    },
    ClusterParameterGroupFamily: {
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
