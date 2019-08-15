import { DisableTransitGatewayRouteTablePropagationInput } from "../shapes/DisableTransitGatewayRouteTablePropagationInput";
import { DisableTransitGatewayRouteTablePropagationOutput } from "../shapes/DisableTransitGatewayRouteTablePropagationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableTransitGatewayRouteTablePropagation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableTransitGatewayRouteTablePropagation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableTransitGatewayRouteTablePropagationInput
  },
  output: {
    shape: DisableTransitGatewayRouteTablePropagationOutput
  },
  errors: []
};
