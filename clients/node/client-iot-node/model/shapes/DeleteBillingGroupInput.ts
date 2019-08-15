import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBillingGroupInput: _Structure_ = {
  type: "structure",
  required: ["billingGroupName"],
  members: {
    billingGroupName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "billingGroupName"
    },
    expectedVersion: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "expectedVersion"
    }
  }
};
