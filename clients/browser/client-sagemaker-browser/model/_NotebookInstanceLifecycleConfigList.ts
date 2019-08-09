import { List as _List_ } from "@aws-sdk/types";
import { _NotebookInstanceLifecycleHook } from "./_NotebookInstanceLifecycleHook";

export const _NotebookInstanceLifecycleConfigList: _List_ = {
  type: "list",
  member: {
    shape: _NotebookInstanceLifecycleHook
  }
};
