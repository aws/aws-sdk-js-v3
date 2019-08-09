import { _ResourceIdsMaxLen1600 } from "./_ResourceIdsMaxLen1600";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalingPoliciesInput: _Structure_ = {
  type: "structure",
  required: ["ServiceNamespace"],
  members: {
    PolicyNames: {
      shape: _ResourceIdsMaxLen1600
    },
    ServiceNamespace: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ScalableDimension: {
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
