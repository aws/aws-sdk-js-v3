import { List as _List_ } from "@aws-sdk/types";
import { _Attribute } from "./_Attribute";

export const _Attributes: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Attribute
  }
};
