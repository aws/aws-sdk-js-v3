import { List as _List_ } from "@aws-sdk/types";
import { _NatGateway } from "./_NatGateway";

export const _NatGatewayList: _List_ = {
  type: "list",
  member: {
    shape: _NatGateway,
    locationName: "item"
  }
};
