import { _SubscriptionAttributesMap } from "./_SubscriptionAttributesMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetSubscriptionAttributesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attributes: {
      shape: _SubscriptionAttributesMap
    }
  }
};
