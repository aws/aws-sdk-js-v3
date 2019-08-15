import { _CapacityReservationSet } from "./_CapacityReservationSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCapacityReservationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    CapacityReservations: {
      shape: _CapacityReservationSet,
      locationName: "capacityReservationSet"
    }
  }
};
