import { _StandardsSubscriptionArns } from "./_StandardsSubscriptionArns";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetEnabledStandardsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StandardsSubscriptionArns: {
      shape: _StandardsSubscriptionArns
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
