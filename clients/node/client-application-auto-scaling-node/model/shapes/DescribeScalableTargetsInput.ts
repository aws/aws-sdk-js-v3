import { _ResourceIdsMaxLen1600 } from "./_ResourceIdsMaxLen1600";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalableTargetsInput: _Structure_ = {
  type: "structure",
  required: ["ServiceNamespace"],
  members: {
    ServiceNamespace: {
      shape: {
        type: "string"
      }
    },
    ResourceIds: {
      shape: _ResourceIdsMaxLen1600
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
