import { DescribeVpcEndpointServicesInput } from "./DescribeVpcEndpointServicesInput";
import { DescribeVpcEndpointServicesOutput } from "./DescribeVpcEndpointServicesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeVpcEndpointServices: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcEndpointServices",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcEndpointServicesInput
  },
  output: {
    shape: DescribeVpcEndpointServicesOutput
  },
  errors: []
};
