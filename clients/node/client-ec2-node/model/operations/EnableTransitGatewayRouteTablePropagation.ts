import { EnableTransitGatewayRouteTablePropagationInput } from "../shapes/EnableTransitGatewayRouteTablePropagationInput";
import { EnableTransitGatewayRouteTablePropagationOutput } from "../shapes/EnableTransitGatewayRouteTablePropagationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableTransitGatewayRouteTablePropagation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableTransitGatewayRouteTablePropagation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableTransitGatewayRouteTablePropagationInput
  },
  output: {
    shape: EnableTransitGatewayRouteTablePropagationOutput
  },
  errors: []
};
