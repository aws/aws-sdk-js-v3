import { List as _List_ } from "@aws-sdk/types";
import { _ServerProcess } from "./_ServerProcess";

export const _ServerProcessList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ServerProcess
  }
};
