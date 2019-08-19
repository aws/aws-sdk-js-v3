import { ___listOfReservation } from "./___listOfReservation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListReservationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    Reservations: {
      shape: ___listOfReservation,
      locationName: "reservations"
    }
  }
};
