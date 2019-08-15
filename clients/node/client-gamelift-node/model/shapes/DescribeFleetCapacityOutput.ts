import { _FleetCapacityList } from "./_FleetCapacityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetCapacityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FleetCapacity: {
      shape: _FleetCapacityList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
