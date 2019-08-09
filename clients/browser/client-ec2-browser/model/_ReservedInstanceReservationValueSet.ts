import { List as _List_ } from "@aws-sdk/types";
import { _ReservedInstanceReservationValue } from "./_ReservedInstanceReservationValue";

export const _ReservedInstanceReservationValueSet: _List_ = {
  type: "list",
  member: {
    shape: _ReservedInstanceReservationValue,
    locationName: "item"
  }
};
