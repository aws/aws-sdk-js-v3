import { ApplySecurityGroupsToClientVpnTargetNetworkInput } from "../shapes/ApplySecurityGroupsToClientVpnTargetNetworkInput";
import { ApplySecurityGroupsToClientVpnTargetNetworkOutput } from "../shapes/ApplySecurityGroupsToClientVpnTargetNetworkOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ApplySecurityGroupsToClientVpnTargetNetwork: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ApplySecurityGroupsToClientVpnTargetNetwork",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ApplySecurityGroupsToClientVpnTargetNetworkInput
  },
  output: {
    shape: ApplySecurityGroupsToClientVpnTargetNetworkOutput
  },
  errors: []
};
