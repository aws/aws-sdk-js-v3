import { List as _List_ } from "@aws-sdk/types";
import { _Key } from "./_Key";

export const _KeyList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Key
  }
};
