import { Structure as _Structure_ } from "@aws-sdk/types";

export const RemoveThingFromBillingGroupInput: _Structure_ = {
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
    thingName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingArn: {
      shape: {
        type: "string"
      }
    }
  }
};
