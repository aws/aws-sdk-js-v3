import { _ActiveInstanceSet } from "./_ActiveInstanceSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSpotFleetInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ActiveInstances: {
      shape: _ActiveInstanceSet,
      locationName: "activeInstanceSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    SpotFleetRequestId: {
      shape: {
        type: "string"
      },
      locationName: "spotFleetRequestId"
    }
  }
};
