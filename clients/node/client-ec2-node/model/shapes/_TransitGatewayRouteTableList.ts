import { List as _List_ } from "@aws-sdk/types";
import { _TransitGatewayRouteTable } from "./_TransitGatewayRouteTable";

export const _TransitGatewayRouteTableList: _List_ = {
  type: "list",
  member: {
    shape: _TransitGatewayRouteTable,
    locationName: "item"
  }
};
