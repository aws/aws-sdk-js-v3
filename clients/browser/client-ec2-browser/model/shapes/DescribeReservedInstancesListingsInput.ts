import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedInstancesListingsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    ReservedInstancesId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstancesId"
    },
    ReservedInstancesListingId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstancesListingId"
    }
  }
};
