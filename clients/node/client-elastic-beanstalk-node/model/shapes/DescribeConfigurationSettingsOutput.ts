import { _ConfigurationSettingsDescriptionList } from "./_ConfigurationSettingsDescriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationSettingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ConfigurationSettings: {
      shape: _ConfigurationSettingsDescriptionList
    }
  }
};
