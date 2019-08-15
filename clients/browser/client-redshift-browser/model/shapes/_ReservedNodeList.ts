import { List as _List_ } from "@aws-sdk/types";
import { _ReservedNode } from "./_ReservedNode";

export const _ReservedNodeList: _List_ = {
  type: "list",
  member: {
    shape: _ReservedNode,
    locationName: "ReservedNode"
  }
};
