import { List as _List_ } from "@aws-sdk/types";
import { _TransitGatewayRoute } from "./_TransitGatewayRoute";

export const _TransitGatewayRouteList: _List_ = {
  type: "list",
  member: {
    shape: _TransitGatewayRoute,
    locationName: "item"
  }
};
