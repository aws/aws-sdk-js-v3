import { List as _List_ } from "@aws-sdk/types";
import { _Field } from "./_Field";

export const _FieldList: _List_ = {
  type: "list",
  member: {
    shape: _Field
  }
};
