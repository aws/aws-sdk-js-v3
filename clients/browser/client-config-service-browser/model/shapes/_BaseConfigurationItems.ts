import { List as _List_ } from "@aws-sdk/types";
import { _BaseConfigurationItem } from "./_BaseConfigurationItem";

export const _BaseConfigurationItems: _List_ = {
  type: "list",
  member: {
    shape: _BaseConfigurationItem
  }
};
