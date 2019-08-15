import { _TransitGatewayPropagation } from "./_TransitGatewayPropagation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisableTransitGatewayRouteTablePropagationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Propagation: {
      shape: _TransitGatewayPropagation,
      locationName: "propagation"
    }
  }
};
