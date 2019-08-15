import { List as _List_ } from "@aws-sdk/types";
import { _IpRoute } from "./_IpRoute";

export const _IpRoutes: _List_ = {
  type: "list",
  member: {
    shape: _IpRoute
  }
};
