import { ReplaceTransitGatewayRouteInput } from "../shapes/ReplaceTransitGatewayRouteInput";
import { ReplaceTransitGatewayRouteOutput } from "../shapes/ReplaceTransitGatewayRouteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ReplaceTransitGatewayRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ReplaceTransitGatewayRoute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ReplaceTransitGatewayRouteInput
  },
  output: {
    shape: ReplaceTransitGatewayRouteOutput
  },
  errors: []
};
