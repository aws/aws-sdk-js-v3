import { RejectVpcEndpointConnectionsInput } from "./RejectVpcEndpointConnectionsInput";
import { RejectVpcEndpointConnectionsOutput } from "./RejectVpcEndpointConnectionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RejectVpcEndpointConnections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RejectVpcEndpointConnections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RejectVpcEndpointConnectionsInput
  },
  output: {
    shape: RejectVpcEndpointConnectionsOutput
  },
  errors: []
};
