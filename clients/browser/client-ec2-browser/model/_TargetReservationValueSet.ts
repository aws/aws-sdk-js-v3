import { List as _List_ } from "@aws-sdk/types";
import { _TargetReservationValue } from "./_TargetReservationValue";

export const _TargetReservationValueSet: _List_ = {
  type: "list",
  member: {
    shape: _TargetReservationValue,
    locationName: "item"
  }
};
