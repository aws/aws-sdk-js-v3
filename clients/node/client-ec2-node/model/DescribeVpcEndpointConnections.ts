import { DescribeVpcEndpointConnectionsInput } from "./DescribeVpcEndpointConnectionsInput";
import { DescribeVpcEndpointConnectionsOutput } from "./DescribeVpcEndpointConnectionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeVpcEndpointConnections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcEndpointConnections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcEndpointConnectionsInput
  },
  output: {
    shape: DescribeVpcEndpointConnectionsOutput
  },
  errors: []
};
