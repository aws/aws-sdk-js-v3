import { List as _List_ } from "@aws-sdk/types";
import { _NatGatewayAddress } from "./_NatGatewayAddress";

export const _NatGatewayAddressList: _List_ = {
  type: "list",
  member: {
    shape: _NatGatewayAddress,
    locationName: "item"
  }
};
