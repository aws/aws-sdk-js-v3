import { DescribeVpcPeeringConnectionsInput } from "./DescribeVpcPeeringConnectionsInput";
import { DescribeVpcPeeringConnectionsOutput } from "./DescribeVpcPeeringConnectionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeVpcPeeringConnections: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcPeeringConnections",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcPeeringConnectionsInput
  },
  output: {
    shape: DescribeVpcPeeringConnectionsOutput
  },
  errors: []
};
