import { _TransitGatewayRouteTable } from "./_TransitGatewayRouteTable";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTransitGatewayRouteTableOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayRouteTable: {
      shape: _TransitGatewayRouteTable,
      locationName: "transitGatewayRouteTable"
    }
  }
};
