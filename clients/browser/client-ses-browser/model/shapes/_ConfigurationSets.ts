import { List as _List_ } from "@aws-sdk/types";
import { _ConfigurationSet } from "./_ConfigurationSet";

export const _ConfigurationSets: _List_ = {
  type: "list",
  member: {
    shape: _ConfigurationSet
  }
};
