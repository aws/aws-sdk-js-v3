import { _BillingGroupProperties } from "./_BillingGroupProperties";
import { _BillingGroupMetadata } from "./_BillingGroupMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBillingGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    billingGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    billingGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    billingGroupArn: {
      shape: {
        type: "string"
      }
    },
    version: {
      shape: {
        type: "integer"
      }
    },
    billingGroupProperties: {
      shape: _BillingGroupProperties
    },
    billingGroupMetadata: {
      shape: _BillingGroupMetadata
    }
  }
};
