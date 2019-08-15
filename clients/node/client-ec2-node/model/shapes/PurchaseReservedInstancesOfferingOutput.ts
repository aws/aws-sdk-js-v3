import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseReservedInstancesOfferingOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ReservedInstancesId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstancesId"
    }
  }
};
