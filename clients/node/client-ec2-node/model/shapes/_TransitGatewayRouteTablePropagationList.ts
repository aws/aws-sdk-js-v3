import { List as _List_ } from "@aws-sdk/types";
import { _TransitGatewayRouteTablePropagation } from "./_TransitGatewayRouteTablePropagation";

export const _TransitGatewayRouteTablePropagationList: _List_ = {
  type: "list",
  member: {
    shape: _TransitGatewayRouteTablePropagation,
    locationName: "item"
  }
};
