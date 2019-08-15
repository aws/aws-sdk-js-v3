import { RejectVpcEndpointConnectionsInput } from "../shapes/RejectVpcEndpointConnectionsInput";
import { RejectVpcEndpointConnectionsOutput } from "../shapes/RejectVpcEndpointConnectionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
