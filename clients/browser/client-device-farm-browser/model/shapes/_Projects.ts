import { List as _List_ } from "@aws-sdk/types";
import { _Project } from "./_Project";

export const _Projects: _List_ = {
  type: "list",
  member: {
    shape: _Project
  }
};
