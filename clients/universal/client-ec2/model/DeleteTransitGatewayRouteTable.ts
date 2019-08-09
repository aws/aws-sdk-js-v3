import { DeleteTransitGatewayRouteTableInput } from "./DeleteTransitGatewayRouteTableInput";
import { DeleteTransitGatewayRouteTableOutput } from "./DeleteTransitGatewayRouteTableOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteTransitGatewayRouteTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteTransitGatewayRouteTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteTransitGatewayRouteTableInput
  },
  output: {
    shape: DeleteTransitGatewayRouteTableOutput
  },
  errors: []
};
