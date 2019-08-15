import { List as _List_ } from "@aws-sdk/types";
import { _Pipeline } from "./_Pipeline";

export const _Pipelines: _List_ = {
  type: "list",
  member: {
    shape: _Pipeline
  }
};
