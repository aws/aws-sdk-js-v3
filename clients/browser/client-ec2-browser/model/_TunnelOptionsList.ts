import { List as _List_ } from "@aws-sdk/types";
import { _VpnTunnelOptionsSpecification } from "./_VpnTunnelOptionsSpecification";

export const _TunnelOptionsList: _List_ = {
  type: "list",
  member: {
    shape: _VpnTunnelOptionsSpecification,
    locationName: "item"
  }
};
