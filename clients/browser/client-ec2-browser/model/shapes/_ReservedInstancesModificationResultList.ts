import { List as _List_ } from "@aws-sdk/types";
import { _ReservedInstancesModificationResult } from "./_ReservedInstancesModificationResult";

export const _ReservedInstancesModificationResultList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedInstancesModificationResult,
    locationName: "item"
  }
};
