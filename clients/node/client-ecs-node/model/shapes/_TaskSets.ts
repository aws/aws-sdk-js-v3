import { List as _List_ } from "@aws-sdk/types";
import { _TaskSet } from "./_TaskSet";

export const _TaskSets: _List_ = {
  type: "list",
  member: {
    shape: _TaskSet
  }
};
