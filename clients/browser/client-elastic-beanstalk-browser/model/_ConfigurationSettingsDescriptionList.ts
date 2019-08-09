import { List as _List_ } from "@aws-sdk/types";
import { _ConfigurationSettingsDescription } from "./_ConfigurationSettingsDescription";

export const _ConfigurationSettingsDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _ConfigurationSettingsDescription
  }
};
