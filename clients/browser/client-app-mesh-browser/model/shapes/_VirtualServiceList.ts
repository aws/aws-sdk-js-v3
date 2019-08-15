import { List as _List_ } from "@aws-sdk/types";
import { _VirtualServiceRef } from "./_VirtualServiceRef";

export const _VirtualServiceList: _List_ = {
  type: "list",
  member: {
    shape: _VirtualServiceRef
  }
};
