import { List as _List_ } from "@aws-sdk/types";
import { _ActionConfigurationProperty } from "./_ActionConfigurationProperty";

export const _ActionConfigurationPropertyList: _List_ = {
  type: "list",
  member: {
    shape: _ActionConfigurationProperty
  }
};
