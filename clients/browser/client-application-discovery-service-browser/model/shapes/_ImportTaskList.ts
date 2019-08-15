import { List as _List_ } from "@aws-sdk/types";
import { _ImportTask } from "./_ImportTask";

export const _ImportTaskList: _List_ = {
  type: "list",
  member: {
    shape: _ImportTask
  }
};
