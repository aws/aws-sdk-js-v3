import { List as _List_ } from "@aws-sdk/types";
import { _CapacityReservation } from "./_CapacityReservation";

export const _CapacityReservationSet: _List_ = {
  type: "list",
  member: {
    shape: _CapacityReservation,
    locationName: "item"
  }
};
