import { _AccelerationSettings } from "./_AccelerationSettings";
import { ___listOfOutputGroupDetail } from "./___listOfOutputGroupDetail";
import { _JobSettings } from "./_JobSettings";
import { _Timing } from "./_Timing";
import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Job: _Structure_ = {
  type: "structure",
  required: ["Role", "Settings"],
  members: {
    AccelerationSettings: {
      shape: _AccelerationSettings,
      locationName: "accelerationSettings"
    },
    Arn: {
      shape: {
        type: "string"
      },
      locationName: "arn"
    },
    BillingTagsSource: {
      shape: {
        type: "string"
      },
      locationName: "billingTagsSource"
    },
    CreatedAt: {
      shape: {
        type: "timestamp",
        timestampFormat: "unixTimestamp"
      },
      locationName: "createdAt"
    },
    CurrentPhase: {
      shape: {
        type: "string"
      },
      locationName: "currentPhase"
    },
    ErrorCode: {
      shape: {
        type: "integer"
      },
      locationName: "errorCode"
    },
    ErrorMessage: {
      shape: {
        type: "string"
      },
      locationName: "errorMessage"
    },
    Id: {
      shape: {
        type: "string"
      },
      locationName: "id"
    },
    JobPercentComplete: {
      shape: {
        type: "integer"
      },
      locationName: "jobPercentComplete"
    },
    JobTemplate: {
      shape: {
        type: "string"
      },
      locationName: "jobTemplate"
    },
    OutputGroupDetails: {
      shape: ___listOfOutputGroupDetail,
      locationName: "outputGroupDetails"
    },
    Priority: {
      shape: {
        type: "integer",
        min: -50
      },
      locationName: "priority"
    },
    Queue: {
      shape: {
        type: "string"
      },
      locationName: "queue"
    },
    RetryCount: {
      shape: {
        type: "integer"
      },
      locationName: "retryCount"
    },
    Role: {
      shape: {
        type: "string"
      },
      locationName: "role"
    },
    Settings: {
      shape: _JobSettings,
      locationName: "settings"
    },
    Status: {
      shape: {
        type: "string"
      },
      locationName: "status"
    },
    StatusUpdateInterval: {
      shape: {
        type: "string"
      },
      locationName: "statusUpdateInterval"
    },
    Timing: {
      shape: _Timing,
      locationName: "timing"
    },
    UserMetadata: {
      shape: ___mapOf__string,
      locationName: "userMetadata"
    }
  }
};
