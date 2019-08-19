import { List as _List_ } from "@aws-sdk/types";
import { _OriginationRoute } from "./_OriginationRoute";

export const _OriginationRouteList: _List_ = {
  type: "list",
  member: {
    shape: _OriginationRoute
  }
};
