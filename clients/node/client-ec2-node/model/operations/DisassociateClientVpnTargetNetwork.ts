import { DisassociateClientVpnTargetNetworkInput } from "../shapes/DisassociateClientVpnTargetNetworkInput";
import { DisassociateClientVpnTargetNetworkOutput } from "../shapes/DisassociateClientVpnTargetNetworkOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateClientVpnTargetNetwork: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateClientVpnTargetNetwork",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateClientVpnTargetNetworkInput
  },
  output: {
    shape: DisassociateClientVpnTargetNetworkOutput
  },
  errors: []
};
