import { List as _List_ } from "@aws-sdk/types";
import { _VirtualGateway } from "./_VirtualGateway";

export const _VirtualGatewayList: _List_ = {
  type: "list",
  member: {
    shape: _VirtualGateway
  }
};
