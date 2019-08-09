import { List as _List_ } from "@aws-sdk/types";
import { _ReservedInstancesModification } from "./_ReservedInstancesModification";

export const _ReservedInstancesModificationList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedInstancesModification,
    locationName: "item"
  }
};
