import { List as _List_ } from "@aws-sdk/types";
import { _TransitGatewayRouteTableAssociation } from "./_TransitGatewayRouteTableAssociation";

export const _TransitGatewayRouteTableAssociationList: _List_ = {
  type: "list",
  member: {
    shape: _TransitGatewayRouteTableAssociation,
    locationName: "item"
  }
};
