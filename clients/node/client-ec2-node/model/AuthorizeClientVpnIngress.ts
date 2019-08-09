import { AuthorizeClientVpnIngressInput } from "./AuthorizeClientVpnIngressInput";
import { AuthorizeClientVpnIngressOutput } from "./AuthorizeClientVpnIngressOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AuthorizeClientVpnIngress: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AuthorizeClientVpnIngress",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AuthorizeClientVpnIngressInput
  },
  output: {
    shape: AuthorizeClientVpnIngressOutput
  },
  errors: []
};
