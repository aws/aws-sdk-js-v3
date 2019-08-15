import { _CapacityReservation } from "./_CapacityReservation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCapacityReservationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CapacityReservation: {
      shape: _CapacityReservation,
      locationName: "capacityReservation"
    }
  }
};
