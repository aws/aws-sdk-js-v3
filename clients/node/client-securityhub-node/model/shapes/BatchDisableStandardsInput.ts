import { _StandardsSubscriptionArns } from "./_StandardsSubscriptionArns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDisableStandardsInput: _Structure_ = {
  type: "structure",
  required: ["StandardsSubscriptionArns"],
  members: {
    StandardsSubscriptionArns: {
      shape: _StandardsSubscriptionArns
    }
  }
};
