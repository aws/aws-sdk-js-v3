import { AcceptVpcEndpointConnectionsInput } from "./AcceptVpcEndpointConnectionsInput";
import { AcceptVpcEndpointConnectionsOutput } from "./AcceptVpcEndpointConnectionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
