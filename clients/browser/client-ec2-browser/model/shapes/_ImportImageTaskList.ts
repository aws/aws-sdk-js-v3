import { List as _List_ } from "@aws-sdk/types";
import { _ImportImageTask } from "./_ImportImageTask";

export const _ImportImageTaskList: _List_ = {
  type: "list",
  member: {
    shape: _ImportImageTask,
    locationName: "item"
  }
};
