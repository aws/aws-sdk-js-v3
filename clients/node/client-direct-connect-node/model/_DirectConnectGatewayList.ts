import { List as _List_ } from "@aws-sdk/types";
import { _DirectConnectGateway } from "./_DirectConnectGateway";

export const _DirectConnectGatewayList: _List_ = {
  type: "list",
  member: {
    shape: _DirectConnectGateway
  }
};
