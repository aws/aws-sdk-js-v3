import { List as _List_ } from "@aws-sdk/types";
import { _ConfigurationItem } from "./_ConfigurationItem";

export const _ConfigurationItemList: _List_ = {
  type: "list",
  member: {
    shape: _ConfigurationItem
  }
};
