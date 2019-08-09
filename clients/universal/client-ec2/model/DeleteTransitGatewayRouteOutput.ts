import { _TransitGatewayRoute } from "./_TransitGatewayRoute";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteTransitGatewayRouteOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Route: {
      shape: _TransitGatewayRoute,
      locationName: "route"
    }
  }
};
