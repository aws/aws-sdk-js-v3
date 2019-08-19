import { List as _List_ } from "@aws-sdk/types";
import { _Node } from "./_Node";

export const _NodeList: _List_ = {
  type: "list",
  member: {
    shape: _Node
  }
};
