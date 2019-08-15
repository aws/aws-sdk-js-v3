import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBillingGroupOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    billingGroupName: {
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
    billingGroupId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
