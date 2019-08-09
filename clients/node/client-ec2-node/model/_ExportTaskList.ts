import { List as _List_ } from "@aws-sdk/types";
import { _ExportTask } from "./_ExportTask";

export const _ExportTaskList: _List_ = {
  type: "list",
  member: {
    shape: _ExportTask,
    locationName: "item"
  }
};
