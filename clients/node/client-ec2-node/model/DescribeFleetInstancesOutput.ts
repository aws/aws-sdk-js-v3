import { _ActiveInstanceSet } from "./_ActiveInstanceSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetInstancesOutput: _Structure_ = {
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
    FleetId: {
      shape: {
        type: "string"
      },
      locationName: "fleetId"
    }
  }
};
