import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateReservationInput: _Structure_ = {
  type: "structure",
  required: ["ReservationId"],
  members: {
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    ReservationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "reservationId"
    }
  }
};
