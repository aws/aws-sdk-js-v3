import { _BillingGroupNameAndArnList } from "./_BillingGroupNameAndArnList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBillingGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    billingGroups: {
      shape: _BillingGroupNameAndArnList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
