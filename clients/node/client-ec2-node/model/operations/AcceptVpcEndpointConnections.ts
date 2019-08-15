import { AcceptVpcEndpointConnectionsInput } from "../shapes/AcceptVpcEndpointConnectionsInput";
import { AcceptVpcEndpointConnectionsOutput } from "../shapes/AcceptVpcEndpointConnectionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AcceptVpcEndpointConnections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptVpcEndpointConnections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcceptVpcEndpointConnectionsInput
  },
  output: {
    shape: AcceptVpcEndpointConnectionsOutput
  },
  errors: []
};
