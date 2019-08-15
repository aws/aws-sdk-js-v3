import { List as _List_ } from "@aws-sdk/types";
import { _VirtualNodeRef } from "./_VirtualNodeRef";

export const _VirtualNodeList: _List_ = {
  type: "list",
  member: {
    shape: _VirtualNodeRef
  }
};
