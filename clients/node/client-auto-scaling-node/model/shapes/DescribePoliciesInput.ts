import { _PolicyNames } from "./_PolicyNames";
import { _PolicyTypes } from "./_PolicyTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePoliciesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PolicyNames: {
      shape: _PolicyNames
    },
    PolicyTypes: {
      shape: _PolicyTypes
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    }
  }
};
