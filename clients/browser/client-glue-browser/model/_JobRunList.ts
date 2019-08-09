import { List as _List_ } from "@aws-sdk/types";
import { _JobRun } from "./_JobRun";

export const _JobRunList: _List_ = {
  type: "list",
  member: {
    shape: _JobRun
  }
};
