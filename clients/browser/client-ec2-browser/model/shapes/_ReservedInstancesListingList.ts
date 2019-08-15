import { List as _List_ } from "@aws-sdk/types";
import { _ReservedInstancesListing } from "./_ReservedInstancesListing";

export const _ReservedInstancesListingList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedInstancesListing,
    locationName: "item"
  }
};
