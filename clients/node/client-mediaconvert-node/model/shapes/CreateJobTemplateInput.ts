import { _AccelerationSettings } from "./_AccelerationSettings";
import { _JobTemplateSettings } from "./_JobTemplateSettings";
import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateJobTemplateInput: _Structure_ = {
  type: "structure",
  required: ["Settings", "Name"],
  members: {
    AccelerationSettings: {
      shape: _AccelerationSettings,
      locationName: "accelerationSettings"
    },
    Category: {
      shape: {
        type: "string"
      },
      locationName: "category"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
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
    Tags: {
      shape: ___mapOf__string,
      locationName: "tags"
    }
  }
};
