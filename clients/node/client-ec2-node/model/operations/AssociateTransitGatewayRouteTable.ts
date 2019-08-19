import { AssociateTransitGatewayRouteTableInput } from "../shapes/AssociateTransitGatewayRouteTableInput";
import { AssociateTransitGatewayRouteTableOutput } from "../shapes/AssociateTransitGatewayRouteTableOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateTransitGatewayRouteTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateTransitGatewayRouteTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateTransitGatewayRouteTableInput
  },
  output: {
    shape: AssociateTransitGatewayRouteTableOutput
  },
  errors: []
};
