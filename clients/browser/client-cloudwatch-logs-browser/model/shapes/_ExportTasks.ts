import { List as _List_ } from "@aws-sdk/types";
import { _ExportTask } from "./_ExportTask";

export const _ExportTasks: _List_ = {
  type: "list",
  member: {
    shape: _ExportTask
  }
};
