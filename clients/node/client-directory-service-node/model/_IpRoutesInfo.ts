import { List as _List_ } from "@aws-sdk/types";
import { _IpRouteInfo } from "./_IpRouteInfo";

export const _IpRoutesInfo: _List_ = {
  type: "list",
  member: {
    shape: _IpRouteInfo
  }
};
