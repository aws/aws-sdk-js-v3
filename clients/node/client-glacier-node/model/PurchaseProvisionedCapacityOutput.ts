import { Structure as _Structure_ } from "@aws-sdk/types";

export const PurchaseProvisionedCapacityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    capacityId: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "x-amz-capacity-id"
    }
  }
};
