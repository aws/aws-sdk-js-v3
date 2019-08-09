import { _TransitGatewayAssociation } from "./_TransitGatewayAssociation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateTransitGatewayRouteTableOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Association: {
      shape: _TransitGatewayAssociation,
      locationName: "association"
    }
  }
};
