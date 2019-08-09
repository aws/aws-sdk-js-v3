import { List as _List_ } from "@aws-sdk/types";
import { _ReservedNodeOffering } from "./_ReservedNodeOffering";

export const _ReservedNodeOfferingList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedNodeOffering,
    locationName: "ReservedNodeOffering"
  }
};
