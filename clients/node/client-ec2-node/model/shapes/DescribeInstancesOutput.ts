import { _ReservationList } from "./_ReservationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeInstancesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Reservations: {
      shape: _ReservationList,
      locationName: "reservationSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
