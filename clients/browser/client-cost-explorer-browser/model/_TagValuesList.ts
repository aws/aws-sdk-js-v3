import { List as _List_ } from "@aws-sdk/types";
import { _TagValues } from "./_TagValues";

export const _TagValuesList: _List_ = {
  type: "list",
  member: {
    shape: _TagValues
  }
};
