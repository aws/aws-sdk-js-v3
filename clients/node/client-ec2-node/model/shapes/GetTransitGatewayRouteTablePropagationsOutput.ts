import { _TransitGatewayRouteTablePropagationList } from "./_TransitGatewayRouteTablePropagationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetTransitGatewayRouteTablePropagationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayRouteTablePropagations: {
      shape: _TransitGatewayRouteTablePropagationList,
      locationName: "transitGatewayRouteTablePropagations"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      locationName: "nextToken"
    }
  }
};
