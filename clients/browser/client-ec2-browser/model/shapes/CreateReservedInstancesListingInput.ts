import { _PriceScheduleSpecificationList } from "./_PriceScheduleSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateReservedInstancesListingInput: _Structure_ = {
  type: "structure",
  required: [
    "ClientToken",
    "InstanceCount",
    "PriceSchedules",
    "ReservedInstancesId"
  ],
  members: {
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    InstanceCount: {
      shape: {
        type: "integer"
      },
      locationName: "instanceCount"
    },
    PriceSchedules: {
      shape: _PriceScheduleSpecificationList,
      locationName: "priceSchedules"
    },
    ReservedInstancesId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstancesId"
    }
  }
};
