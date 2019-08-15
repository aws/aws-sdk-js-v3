import { _ActivityIds } from "./_ActivityIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeScalingActivitiesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActivityIds: {
      shape: _ActivityIds
    },
    AutoScalingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxRecords: {
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
