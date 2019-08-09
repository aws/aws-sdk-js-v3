import { DeleteClientVpnEndpointInput } from "./DeleteClientVpnEndpointInput";
import { DeleteClientVpnEndpointOutput } from "./DeleteClientVpnEndpointOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteClientVpnEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteClientVpnEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteClientVpnEndpointInput
  },
  output: {
    shape: DeleteClientVpnEndpointOutput
  },
  errors: []
};
