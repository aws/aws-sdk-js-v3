import { List as _List_ } from "@aws-sdk/types";
import { _BundleTask } from "./_BundleTask";

export const _BundleTaskList: _List_ = {
  type: "list",
  member: {
    shape: _BundleTask,
    locationName: "item"
  }
};
