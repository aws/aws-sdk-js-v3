import { DetachVpnGatewayInput } from "../shapes/DetachVpnGatewayInput";
import { DetachVpnGatewayOutput } from "../shapes/DetachVpnGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DetachVpnGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DetachVpnGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DetachVpnGatewayInput
  },
  output: {
    shape: DetachVpnGatewayOutput
  },
  errors: []
};
