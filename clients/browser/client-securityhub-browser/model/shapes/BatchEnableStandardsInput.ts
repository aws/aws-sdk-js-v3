import { _StandardsSubscriptionRequests } from "./_StandardsSubscriptionRequests";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchEnableStandardsInput: _Structure_ = {
  type: "structure",
  required: ["StandardsSubscriptionRequests"],
  members: {
    StandardsSubscriptionRequests: {
      shape: _StandardsSubscriptionRequests
    }
  }
};
