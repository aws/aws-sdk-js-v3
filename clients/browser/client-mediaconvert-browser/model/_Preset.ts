import { _PresetSettings } from "./_PresetSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Preset: _Structure_ = {
  type: "structure",
  required: ["Settings", "Name"],
  members: {
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
    Settings: {
      shape: _PresetSettings,
      locationName: "settings"
    },
    Type: {
      shape: {
        type: "string"
      },
      locationName: "type"
    }
  }
};
