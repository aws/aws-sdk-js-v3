import { _ReservationValue } from "./_ReservationValue";
import { _TargetConfiguration } from "./_TargetConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TargetReservationValue: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservationValue: {
      shape: _ReservationValue,
      locationName: "reservationValue"
    },
    TargetConfiguration: {
      shape: _TargetConfiguration,
      locationName: "targetConfiguration"
    }
  }
};
