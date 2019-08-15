import { _TransitGatewayRouteTableAssociationList } from "./_TransitGatewayRouteTableAssociationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTransitGatewayRouteTableAssociationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Associations: {
      shape: _TransitGatewayRouteTableAssociationList,
      locationName: "associations"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
