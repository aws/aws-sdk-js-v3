import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteReservationInput: _Structure_ = {
  type: "structure",
  required: ["ReservationId"],
  members: {
    ReservationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "reservationId"
    }
  }
};
