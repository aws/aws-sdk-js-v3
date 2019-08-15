import { _ConfigurationOptionSettingsList } from "./_ConfigurationOptionSettingsList";
import { _OptionsSpecifierList } from "./_OptionsSpecifierList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateConfigurationTemplateInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "TemplateName"],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TemplateName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    OptionSettings: {
      shape: _ConfigurationOptionSettingsList
    },
    OptionsToRemove: {
      shape: _OptionsSpecifierList
    }
  }
};
