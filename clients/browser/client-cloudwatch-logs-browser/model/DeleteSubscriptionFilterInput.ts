import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteSubscriptionFilterInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName", "filterName"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    filterName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
