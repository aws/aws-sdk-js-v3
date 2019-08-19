import { DeleteVpnConnectionRouteInput } from "../shapes/DeleteVpnConnectionRouteInput";
import { DeleteVpnConnectionRouteOutput } from "../shapes/DeleteVpnConnectionRouteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVpnConnectionRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVpnConnectionRoute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVpnConnectionRouteInput
  },
  output: {
    shape: DeleteVpnConnectionRouteOutput
  },
  errors: []
};
