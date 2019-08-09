import { _Behaviors } from "./_Behaviors";
import { _AlertTargets } from "./_AlertTargets";
import { _AdditionalMetricsToRetainList } from "./_AdditionalMetricsToRetainList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateSecurityProfileOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    securityProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    securityProfileArn: {
      shape: {
        type: "string"
      }
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
    version: {
      shape: {
        type: "integer"
      }
    },
    creationDate: {
      shape: {
        type: "timestamp"
      }
    },
    lastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
