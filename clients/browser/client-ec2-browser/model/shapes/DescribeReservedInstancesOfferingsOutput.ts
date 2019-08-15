import { _ReservedInstancesOfferingList } from "./_ReservedInstancesOfferingList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedInstancesOfferingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedInstancesOfferings: {
      shape: _ReservedInstancesOfferingList,
      locationName: "reservedInstancesOfferingsSet"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
