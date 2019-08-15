import { _SpotFleetRequestConfigSet } from "./_SpotFleetRequestConfigSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSpotFleetRequestsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    SpotFleetRequestConfigs: {
      shape: _SpotFleetRequestConfigSet,
      locationName: "spotFleetRequestConfigSet"
    }
  }
};
