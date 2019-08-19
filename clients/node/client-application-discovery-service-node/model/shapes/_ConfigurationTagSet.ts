import { List as _List_ } from "@aws-sdk/types";
import { _ConfigurationTag } from "./_ConfigurationTag";

export const _ConfigurationTagSet: _List_ = {
  type: "list",
  member: {
    shape: _ConfigurationTag
  }
};
