import { List as _List_ } from "@aws-sdk/types";
import { _Attribute } from "./_Attribute";

export const _RequiresAttributes: _List_ = {
  type: "list",
  member: {
    shape: _Attribute
  }
};
