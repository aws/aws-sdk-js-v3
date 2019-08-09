import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterParametersInput: _Structure_ = {
  type: "structure",
  required: ["ParameterGroupName"],
  members: {
    ParameterGroupName: {
      shape: {
        type: "string"
      }
    },
    Source: {
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
