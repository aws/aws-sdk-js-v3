import { DescribeVpcEndpointServicePermissionsInput } from "../shapes/DescribeVpcEndpointServicePermissionsInput";
import { DescribeVpcEndpointServicePermissionsOutput } from "../shapes/DescribeVpcEndpointServicePermissionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVpcEndpointServicePermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVpcEndpointServicePermissions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeVpcEndpointServicePermissionsInput
  },
  output: {
    shape: DescribeVpcEndpointServicePermissionsOutput
  },
  errors: []
};
