import { List as _List_ } from "@aws-sdk/types";
import { _TagKeyOnly } from "./_TagKeyOnly";

export const _TagKeyList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _TagKeyOnly
  }
};
