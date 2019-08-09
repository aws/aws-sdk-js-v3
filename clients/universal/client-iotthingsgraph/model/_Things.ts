import { List as _List_ } from "@aws-sdk/types";
import { _Thing } from "./_Thing";

export const _Things: _List_ = {
  type: "list",
  member: {
    shape: _Thing
  }
};
