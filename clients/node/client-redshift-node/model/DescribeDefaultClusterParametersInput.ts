import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDefaultClusterParametersInput: _Structure_ = {
  type: "structure",
  required: ["ParameterGroupFamily"],
  members: {
    ParameterGroupFamily: {
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
