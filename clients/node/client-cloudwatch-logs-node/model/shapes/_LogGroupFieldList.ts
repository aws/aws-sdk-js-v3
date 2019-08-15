import { List as _List_ } from "@aws-sdk/types";
import { _LogGroupField } from "./_LogGroupField";

export const _LogGroupFieldList: _List_ = {
  type: "list",
  member: {
    shape: _LogGroupField
  }
};
