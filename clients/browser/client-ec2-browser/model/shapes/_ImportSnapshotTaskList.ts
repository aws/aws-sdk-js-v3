import { List as _List_ } from "@aws-sdk/types";
import { _ImportSnapshotTask } from "./_ImportSnapshotTask";

export const _ImportSnapshotTaskList: _List_ = {
  type: "list",
  member: {
    shape: _ImportSnapshotTask,
    locationName: "item"
  }
};
