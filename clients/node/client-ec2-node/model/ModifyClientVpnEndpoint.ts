import { ModifyClientVpnEndpointInput } from "./ModifyClientVpnEndpointInput";
import { ModifyClientVpnEndpointOutput } from "./ModifyClientVpnEndpointOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyClientVpnEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyClientVpnEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyClientVpnEndpointInput
  },
  output: {
    shape: ModifyClientVpnEndpointOutput
  },
  errors: []
};
