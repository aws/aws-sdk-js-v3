import { _ValidationMessagesList } from "./_ValidationMessagesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ValidateConfigurationSettingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Messages: {
      shape: _ValidationMessagesList
    }
  }
};
