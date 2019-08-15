import { _HostReservationSet } from "./_HostReservationSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHostReservationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HostReservationSet: {
      shape: _HostReservationSet,
      locationName: "hostReservationSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
