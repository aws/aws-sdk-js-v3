import { _FleetUtilizationList } from "./_FleetUtilizationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetUtilizationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetUtilization: {
      shape: _FleetUtilizationList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
