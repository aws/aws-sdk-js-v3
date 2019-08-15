import { SearchTransitGatewayRoutesInput } from "../shapes/SearchTransitGatewayRoutesInput";
import { SearchTransitGatewayRoutesOutput } from "../shapes/SearchTransitGatewayRoutesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SearchTransitGatewayRoutes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SearchTransitGatewayRoutes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: SearchTransitGatewayRoutesInput
  },
  output: {
    shape: SearchTransitGatewayRoutesOutput
  },
  errors: []
};
