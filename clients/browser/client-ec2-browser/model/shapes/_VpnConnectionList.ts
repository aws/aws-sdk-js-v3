import { List as _List_ } from "@aws-sdk/types";
import { _VpnConnection } from "./_VpnConnection";

export const _VpnConnectionList: _List_ = {
  type: "list",
  member: {
    shape: _VpnConnection,
    locationName: "item"
  }
};
