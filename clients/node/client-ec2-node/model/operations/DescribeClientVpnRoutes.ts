import { DescribeClientVpnRoutesInput } from "../shapes/DescribeClientVpnRoutesInput";
import { DescribeClientVpnRoutesOutput } from "../shapes/DescribeClientVpnRoutesOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClientVpnRoutes: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClientVpnRoutes",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClientVpnRoutesInput
  },
  output: {
    shape: DescribeClientVpnRoutesOutput
  },
  errors: []
};
