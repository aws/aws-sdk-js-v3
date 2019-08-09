import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalingPoliciesInput: _Structure_ = {
  type: "structure",
  required: ["FleetId"],
  members: {
    FleetId: {
      shape: {
        type: "string"
      }
    },
    StatusFilter: {
      shape: {
        type: "string"
      }
    },
    Limit: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
