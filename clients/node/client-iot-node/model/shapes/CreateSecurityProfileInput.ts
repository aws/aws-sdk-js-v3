import { _Behaviors } from "./_Behaviors";
import { _AlertTargets } from "./_AlertTargets";
import { _AdditionalMetricsToRetainList } from "./_AdditionalMetricsToRetainList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSecurityProfileInput: _Structure_ = {
  type: "structure",
  required: ["securityProfileName"],
  members: {
    securityProfileName: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "securityProfileName"
    },
    securityProfileDescription: {
      shape: {
        type: "string"
      }
    },
    behaviors: {
      shape: _Behaviors
    },
    alertTargets: {
      shape: _AlertTargets
    },
    additionalMetricsToRetain: {
      shape: _AdditionalMetricsToRetainList
    },
    tags: {
      shape: _TagList
    }
  }
};
