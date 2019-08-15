import { List as _List_ } from "@aws-sdk/types";
import { _ReservedInstances } from "./_ReservedInstances";

export const _ReservedInstancesList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedInstances,
    locationName: "item"
  }
};
