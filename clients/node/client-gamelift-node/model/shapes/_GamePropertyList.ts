import { List as _List_ } from "@aws-sdk/types";
import { _GameProperty } from "./_GameProperty";

export const _GamePropertyList: _List_ = {
  type: "list",
  member: {
    shape: _GameProperty
  }
};
