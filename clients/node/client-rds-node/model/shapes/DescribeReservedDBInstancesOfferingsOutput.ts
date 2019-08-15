import { _ReservedDBInstancesOfferingList } from "./_ReservedDBInstancesOfferingList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeReservedDBInstancesOfferingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Marker: {
      shape: {
        type: "string"
      }
    },
    ReservedDBInstancesOfferings: {
      shape: _ReservedDBInstancesOfferingList
    }
  }
};
