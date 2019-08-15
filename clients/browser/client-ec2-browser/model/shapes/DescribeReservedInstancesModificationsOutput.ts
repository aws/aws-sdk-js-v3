import { _ReservedInstancesModificationList } from "./_ReservedInstancesModificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedInstancesModificationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    ReservedInstancesModifications: {
      shape: _ReservedInstancesModificationList,
      locationName: "reservedInstancesModificationsSet"
    }
  }
};
