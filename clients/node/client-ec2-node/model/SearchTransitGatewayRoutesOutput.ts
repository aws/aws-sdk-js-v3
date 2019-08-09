import { _TransitGatewayRouteList } from "./_TransitGatewayRouteList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchTransitGatewayRoutesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Routes: {
      shape: _TransitGatewayRouteList,
      locationName: "routeSet"
    },
    AdditionalRoutesAvailable: {
      shape: {
        type: "boolean"
      },
      locationName: "additionalRoutesAvailable"
    }
  }
};
