import { _BillingGroupProperties } from "./_BillingGroupProperties";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateBillingGroupInput: _Structure_ = {
  type: "structure",
  required: ["billingGroupName", "billingGroupProperties"],
  members: {
    billingGroupName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "billingGroupName"
    },
    billingGroupProperties: {
      shape: _BillingGroupProperties
    },
    expectedVersion: {
      shape: {
        type: "integer"
      }
    }
  }
};
