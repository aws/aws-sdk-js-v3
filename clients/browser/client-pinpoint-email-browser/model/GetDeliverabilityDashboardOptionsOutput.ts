import { _DomainDeliverabilityTrackingOptions } from "./_DomainDeliverabilityTrackingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDeliverabilityDashboardOptionsOutput: _Structure_ = {
  type: "structure",
  required: ["DashboardEnabled"],
  members: {
    DashboardEnabled: {
      shape: {
        type: "boolean"
      }
    },
    SubscriptionExpiryDate: {
      shape: {
        type: "timestamp"
      }
    },
    AccountStatus: {
      shape: {
        type: "string"
      }
    },
    ActiveSubscribedDomains: {
      shape: _DomainDeliverabilityTrackingOptions
    },
    PendingExpirationSubscribedDomains: {
      shape: _DomainDeliverabilityTrackingOptions
    }
  }
};
