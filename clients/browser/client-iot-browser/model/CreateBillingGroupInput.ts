import { _BillingGroupProperties } from "./_BillingGroupProperties";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBillingGroupInput: _Structure_ = {
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
    billingGroupProperties: {
      shape: _BillingGroupProperties
    },
    tags: {
      shape: _TagList
    }
  }
};
