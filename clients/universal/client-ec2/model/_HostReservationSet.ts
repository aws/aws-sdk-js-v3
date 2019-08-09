import { List as _List_ } from "@aws-sdk/types";
import { _HostReservation } from "./_HostReservation";

export const _HostReservationSet: _List_ = {
  type: "list",
  member: {
    shape: _HostReservation,
    locationName: "item"
  }
};
