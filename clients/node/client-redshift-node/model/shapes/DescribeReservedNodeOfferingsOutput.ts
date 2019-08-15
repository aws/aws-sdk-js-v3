import { _ReservedNodeOfferingList } from "./_ReservedNodeOfferingList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedNodeOfferingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ReservedNodeOfferings: {
      shape: _ReservedNodeOfferingList
    }
  }
};
