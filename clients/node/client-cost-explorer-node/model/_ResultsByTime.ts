import { List as _List_ } from "@aws-sdk/types";
import { _ResultByTime } from "./_ResultByTime";

export const _ResultsByTime: _List_ = {
  type: "list",
  member: {
    shape: _ResultByTime
  }
};
