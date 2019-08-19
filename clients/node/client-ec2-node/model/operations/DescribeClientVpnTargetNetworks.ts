import { DescribeClientVpnTargetNetworksInput } from "../shapes/DescribeClientVpnTargetNetworksInput";
import { DescribeClientVpnTargetNetworksOutput } from "../shapes/DescribeClientVpnTargetNetworksOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClientVpnTargetNetworks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClientVpnTargetNetworks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeClientVpnTargetNetworksInput
  },
  output: {
    shape: DescribeClientVpnTargetNetworksOutput
  },
  errors: []
};
