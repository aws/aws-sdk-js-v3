import { _FilterList } from "./_FilterList";
import { _ReservedInstancesModificationIdStringList } from "./_ReservedInstancesModificationIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedInstancesModificationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    ReservedInstancesModificationIds: {
      shape: _ReservedInstancesModificationIdStringList,
      locationName: "ReservedInstancesModificationId"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
