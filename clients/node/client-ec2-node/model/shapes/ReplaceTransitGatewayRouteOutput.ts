import { _TransitGatewayRoute } from "./_TransitGatewayRoute";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ReplaceTransitGatewayRouteOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Route: {
      shape: _TransitGatewayRoute,
      locationName: "route"
    }
  }
};
