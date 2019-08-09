import { CreateTransitGatewayRouteInput } from "./CreateTransitGatewayRouteInput";
import { CreateTransitGatewayRouteOutput } from "./CreateTransitGatewayRouteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
