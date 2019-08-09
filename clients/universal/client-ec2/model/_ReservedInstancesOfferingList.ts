import { List as _List_ } from "@aws-sdk/types";
import { _ReservedInstancesOffering } from "./_ReservedInstancesOffering";

export const _ReservedInstancesOfferingList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedInstancesOffering,
    locationName: "item"
  }
};
