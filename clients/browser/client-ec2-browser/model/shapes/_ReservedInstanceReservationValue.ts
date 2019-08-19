import { _ReservationValue } from "./_ReservationValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReservedInstanceReservationValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservationValue: {
      shape: _ReservationValue,
      locationName: "reservationValue"
    },
    ReservedInstanceId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstanceId"
    }
  }
};
