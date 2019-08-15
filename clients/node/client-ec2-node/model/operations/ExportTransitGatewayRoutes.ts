import { ExportTransitGatewayRoutesInput } from "../shapes/ExportTransitGatewayRoutesInput";
import { ExportTransitGatewayRoutesOutput } from "../shapes/ExportTransitGatewayRoutesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ExportTransitGatewayRoutes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ExportTransitGatewayRoutes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ExportTransitGatewayRoutesInput
  },
  output: {
    shape: ExportTransitGatewayRoutesOutput
  },
  errors: []
};
