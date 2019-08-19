import { List as _List_ } from "@aws-sdk/types";
import { _VirtualRouterListener } from "./_VirtualRouterListener";

export const _VirtualRouterListeners: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _VirtualRouterListener
  }
};
