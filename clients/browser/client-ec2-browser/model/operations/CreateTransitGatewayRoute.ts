import { CreateTransitGatewayRouteInput } from "../shapes/CreateTransitGatewayRouteInput";
import { CreateTransitGatewayRouteOutput } from "../shapes/CreateTransitGatewayRouteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTransitGatewayRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTransitGatewayRoute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTransitGatewayRouteInput
  },
  output: {
    shape: CreateTransitGatewayRouteOutput
  },
  errors: []
};
