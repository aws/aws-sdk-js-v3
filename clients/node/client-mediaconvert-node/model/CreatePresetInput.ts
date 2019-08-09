import { _PresetSettings } from "./_PresetSettings";
import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePresetInput: _Structure_ = {
  type: "structure",
  required: ["Settings", "Name"],
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
      locationName: "name"
    },
    Settings: {
      shape: _PresetSettings,
      locationName: "settings"
    },
    Tags: {
      shape: ___mapOf__string,
      locationName: "tags"
    }
  }
};
