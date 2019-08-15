import { List as _List_ } from "@aws-sdk/types";
import { _Reservation } from "./_Reservation";

export const ___listOfReservation: _List_ = {
  type: "list",
  member: {
    shape: _Reservation
  }
};
