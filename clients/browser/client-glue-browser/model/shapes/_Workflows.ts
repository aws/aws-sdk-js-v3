import { List as _List_ } from "@aws-sdk/types";
import { _Workflow } from "./_Workflow";

export const _Workflows: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _Workflow
  }
};
