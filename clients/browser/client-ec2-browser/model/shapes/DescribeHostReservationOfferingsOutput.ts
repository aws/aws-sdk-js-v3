import { _HostOfferingSet } from "./_HostOfferingSet";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHostReservationOfferingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    },
    OfferingSet: {
      shape: _HostOfferingSet,
      locationName: "offeringSet"
    }
  }
};
