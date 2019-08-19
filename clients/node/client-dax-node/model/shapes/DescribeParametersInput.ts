import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeParametersInput: _Structure_ = {
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
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
