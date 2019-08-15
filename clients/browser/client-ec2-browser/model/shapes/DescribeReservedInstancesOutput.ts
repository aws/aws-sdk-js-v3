import { _ReservedInstancesList } from "./_ReservedInstancesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedInstances: {
      shape: _ReservedInstancesList,
      locationName: "reservedInstancesSet"
    }
  }
};
