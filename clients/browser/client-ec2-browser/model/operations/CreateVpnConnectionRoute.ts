import { CreateVpnConnectionRouteInput } from "../shapes/CreateVpnConnectionRouteInput";
import { CreateVpnConnectionRouteOutput } from "../shapes/CreateVpnConnectionRouteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVpnConnectionRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVpnConnectionRoute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVpnConnectionRouteInput
  },
  output: {
    shape: CreateVpnConnectionRouteOutput
  },
  errors: []
};
