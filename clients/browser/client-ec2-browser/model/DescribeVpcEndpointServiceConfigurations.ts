import { DescribeVpcEndpointServiceConfigurationsInput } from "./DescribeVpcEndpointServiceConfigurationsInput";
import { DescribeVpcEndpointServiceConfigurationsOutput } from "./DescribeVpcEndpointServiceConfigurationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeVpcEndpointServiceConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcEndpointServiceConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcEndpointServiceConfigurationsInput
  },
  output: {
    shape: DescribeVpcEndpointServiceConfigurationsOutput
  },
  errors: []
};
