import { RevokeClientVpnIngressInput } from "./RevokeClientVpnIngressInput";
import { RevokeClientVpnIngressOutput } from "./RevokeClientVpnIngressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RevokeClientVpnIngress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeClientVpnIngress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RevokeClientVpnIngressInput
  },
  output: {
    shape: RevokeClientVpnIngressOutput
  },
  errors: []
};
