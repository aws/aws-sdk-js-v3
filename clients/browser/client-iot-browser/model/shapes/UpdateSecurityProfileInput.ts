import { _Behaviors } from "./_Behaviors";
import { _AlertTargets } from "./_AlertTargets";
import { _AdditionalMetricsToRetainList } from "./_AdditionalMetricsToRetainList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSecurityProfileInput: _Structure_ = {
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
    deleteBehaviors: {
      shape: {
        type: "boolean"
      }
    },
    deleteAlertTargets: {
      shape: {
        type: "boolean"
      }
    },
    deleteAdditionalMetricsToRetain: {
      shape: {
        type: "boolean"
      }
    },
    expectedVersion: {
      shape: {
        type: "integer"
      },
      location: "querystring",
      locationName: "expectedVersion"
    }
  }
};
