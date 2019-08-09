import { List as _List_ } from "@aws-sdk/types";
import { _ReservedInstancesId } from "./_ReservedInstancesId";

export const _ReservedIntancesIds: _List_ = {
  type: "list",
  member: {
    shape: _ReservedInstancesId,
    locationName: "item"
  }
};
