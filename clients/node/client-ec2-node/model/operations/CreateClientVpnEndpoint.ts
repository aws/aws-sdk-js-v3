import { CreateClientVpnEndpointInput } from "../shapes/CreateClientVpnEndpointInput";
import { CreateClientVpnEndpointOutput } from "../shapes/CreateClientVpnEndpointOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateClientVpnEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateClientVpnEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateClientVpnEndpointInput
  },
  output: {
    shape: CreateClientVpnEndpointOutput
  },
  errors: []
};
