import { List as _List_ } from "@aws-sdk/types";
import { _Edge } from "./_Edge";

export const _EdgeList: _List_ = {
  type: "list",
  member: {
    shape: _Edge
  }
};
