import { List as _List_ } from "@aws-sdk/types";
import { _App } from "./_App";

export const _Apps: _List_ = {
  type: "list",
  member: {
    shape: _App
  }
};
