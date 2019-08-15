import { DisassociateTransitGatewayRouteTableInput } from "../shapes/DisassociateTransitGatewayRouteTableInput";
import { DisassociateTransitGatewayRouteTableOutput } from "../shapes/DisassociateTransitGatewayRouteTableOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateTransitGatewayRouteTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateTransitGatewayRouteTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateTransitGatewayRouteTableInput
  },
  output: {
    shape: DisassociateTransitGatewayRouteTableOutput
  },
  errors: []
};
