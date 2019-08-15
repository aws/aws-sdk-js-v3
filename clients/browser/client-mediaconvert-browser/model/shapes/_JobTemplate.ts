import { _AccelerationSettings } from "./_AccelerationSettings";
import { _JobTemplateSettings } from "./_JobTemplateSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _JobTemplate: _Structure_ = {
  type: "structure",
  required: ["Settings", "Name"],
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
    Category: {
      shape: {
        type: "string"
      },
      locationName: "category"
    },
    CreatedAt: {
      shape: {
        type: "timestamp",
        timestampFormat: "unixTimestamp"
      },
      locationName: "createdAt"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    LastUpdated: {
      shape: {
        type: "timestamp",
        timestampFormat: "unixTimestamp"
      },
      locationName: "lastUpdated"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
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
    Settings: {
      shape: _JobTemplateSettings,
      locationName: "settings"
    },
    StatusUpdateInterval: {
      shape: {
        type: "string"
      },
      locationName: "statusUpdateInterval"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    }
  }
};
