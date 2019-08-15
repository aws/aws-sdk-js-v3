import { List as _List_ } from "@aws-sdk/types";
import { _VpnGateway } from "./_VpnGateway";

export const _VpnGatewayList: _List_ = {
  type: "list",
  member: {
    shape: _VpnGateway,
    locationName: "item"
  }
};
