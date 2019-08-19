import { _AccelerationSettings } from "./_AccelerationSettings";
import { _JobSettings } from "./_JobSettings";
import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateJobInput: _Structure_ = {
  type: "structure",
  required: ["Role", "Settings"],
  members: {
    AccelerationSettings: {
      shape: _AccelerationSettings,
      locationName: "accelerationSettings"
    },
    BillingTagsSource: {
      shape: {
        type: "string"
      },
      locationName: "billingTagsSource"
    },
    ClientRequestToken: {
      shape: {
        type: "string"
      },
      locationName: "clientRequestToken"
    },
    JobTemplate: {
      shape: {
        type: "string"
      },
      locationName: "jobTemplate"
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
    StatusUpdateInterval: {
      shape: {
        type: "string"
      },
      locationName: "statusUpdateInterval"
    },
    UserMetadata: {
      shape: ___mapOf__string,
      locationName: "userMetadata"
    }
  }
};
