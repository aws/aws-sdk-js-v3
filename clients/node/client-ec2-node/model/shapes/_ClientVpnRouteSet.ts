import { List as _List_ } from "@aws-sdk/types";
import { _ClientVpnRoute } from "./_ClientVpnRoute";

export const _ClientVpnRouteSet: _List_ = {
  type: "list",
  member: {
    shape: _ClientVpnRoute,
    locationName: "item"
  }
};
