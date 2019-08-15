import { AttachVpnGatewayInput } from "../shapes/AttachVpnGatewayInput";
import { AttachVpnGatewayOutput } from "../shapes/AttachVpnGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AttachVpnGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AttachVpnGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AttachVpnGatewayInput
  },
  output: {
    shape: AttachVpnGatewayOutput
  },
  errors: []
};
