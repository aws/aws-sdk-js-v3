import { DescribeClientVpnEndpointsInput } from "./DescribeClientVpnEndpointsInput";
import { DescribeClientVpnEndpointsOutput } from "./DescribeClientVpnEndpointsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeClientVpnEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClientVpnEndpoints",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClientVpnEndpointsInput
  },
  output: {
    shape: DescribeClientVpnEndpointsOutput
  },
  errors: []
};
