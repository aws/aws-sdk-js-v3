import { _ReservedInstancesListingList } from "./_ReservedInstancesListingList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelReservedInstancesListingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedInstancesListings: {
      shape: _ReservedInstancesListingList,
      locationName: "reservedInstancesListingsSet"
    }
  }
};
