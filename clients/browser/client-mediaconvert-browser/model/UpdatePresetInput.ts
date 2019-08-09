import { _PresetSettings } from "./_PresetSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePresetInput: _Structure_ = {
  type: "structure",
  required: ["Name"],
  members: {
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
      location: "uri",
      locationName: "name"
    },
    Settings: {
      shape: _PresetSettings,
      locationName: "settings"
    }
  }
};
