import { _DomainDeliverabilityTrackingOptions } from "./_DomainDeliverabilityTrackingOptions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutDeliverabilityDashboardOptionInput: _Structure_ = {
  type: "structure",
  required: ["DashboardEnabled"],
  members: {
    DashboardEnabled: {
      shape: {
        type: "boolean"
      }
    },
    SubscribedDomains: {
      shape: _DomainDeliverabilityTrackingOptions
    }
  }
};
