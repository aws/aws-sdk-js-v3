import { List as _List_ } from "@aws-sdk/types";
import { _GatewayInfo } from "./_GatewayInfo";

export const _Gateways: _List_ = {
  type: "list",
  member: {
    shape: _GatewayInfo
  }
};
