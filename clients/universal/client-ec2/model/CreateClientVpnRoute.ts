import { CreateClientVpnRouteInput } from "./CreateClientVpnRouteInput";
import { CreateClientVpnRouteOutput } from "./CreateClientVpnRouteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateClientVpnRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateClientVpnRoute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateClientVpnRouteInput
  },
  output: {
    shape: CreateClientVpnRouteOutput
  },
  errors: []
};
