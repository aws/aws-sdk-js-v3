import { GetTransitGatewayRouteTablePropagationsInput } from "./GetTransitGatewayRouteTablePropagationsInput";
import { GetTransitGatewayRouteTablePropagationsOutput } from "./GetTransitGatewayRouteTablePropagationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetTransitGatewayRouteTablePropagations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetTransitGatewayRouteTablePropagations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetTransitGatewayRouteTablePropagationsInput
  },
  output: {
    shape: GetTransitGatewayRouteTablePropagationsOutput
  },
  errors: []
};
