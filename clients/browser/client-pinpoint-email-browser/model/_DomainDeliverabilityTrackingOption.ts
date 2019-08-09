import { _InboxPlacementTrackingOption } from "./_InboxPlacementTrackingOption";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainDeliverabilityTrackingOption: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Domain: {
      shape: {
        type: "string"
      }
    },
    SubscriptionStartDate: {
      shape: {
        type: "timestamp"
      }
    },
    InboxPlacementTrackingOption: {
      shape: _InboxPlacementTrackingOption
    }
  }
};
