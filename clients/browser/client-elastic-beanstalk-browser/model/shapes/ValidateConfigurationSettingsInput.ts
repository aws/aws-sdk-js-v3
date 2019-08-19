import { _ConfigurationOptionSettingsList } from "./_ConfigurationOptionSettingsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ValidateConfigurationSettingsInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationName", "OptionSettings"],
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
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    },
    OptionSettings: {
      shape: _ConfigurationOptionSettingsList
    }
  }
};
