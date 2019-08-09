import { Structure as _Structure_ } from "@aws-sdk/types";

export const CancelReservedInstancesListingInput: _Structure_ = {
  type: "structure",
  required: ["ReservedInstancesListingId"],
  members: {
    ReservedInstancesListingId: {
      shape: {
        type: "string"
      },
      locationName: "reservedInstancesListingId"
    }
  }
};
