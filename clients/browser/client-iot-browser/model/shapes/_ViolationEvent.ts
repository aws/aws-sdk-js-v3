import { _Behavior } from "./_Behavior";
import { _MetricValue } from "./_MetricValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ViolationEvent: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    violationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    thingName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    securityProfileName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    behavior: {
      shape: _Behavior
    },
    metricValue: {
      shape: _MetricValue
    },
    violationEventType: {
      shape: {
        type: "string"
      }
    },
    violationEventTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
