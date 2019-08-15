import { List as _List_ } from "@aws-sdk/types";
import { _RouteRef } from "./_RouteRef";

export const _RouteList: _List_ = {
  type: "list",
  member: {
    shape: _RouteRef
  }
};
