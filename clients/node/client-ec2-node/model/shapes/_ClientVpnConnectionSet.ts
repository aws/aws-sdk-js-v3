import { List as _List_ } from "@aws-sdk/types";
import { _ClientVpnConnection } from "./_ClientVpnConnection";

export const _ClientVpnConnectionSet: _List_ = {
  type: "list",
  member: {
    shape: _ClientVpnConnection,
    locationName: "item"
  }
};
