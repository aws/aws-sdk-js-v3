import { List as _List_ } from "@aws-sdk/types";
import { _VpnStaticRoute } from "./_VpnStaticRoute";

export const _VpnStaticRouteList: _List_ = {
  type: "list",
  member: {
    shape: _VpnStaticRoute,
    locationName: "item"
  }
};
