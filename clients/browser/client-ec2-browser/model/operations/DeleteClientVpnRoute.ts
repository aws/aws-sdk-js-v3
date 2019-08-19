import { DeleteClientVpnRouteInput } from "../shapes/DeleteClientVpnRouteInput";
import { DeleteClientVpnRouteOutput } from "../shapes/DeleteClientVpnRouteOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteClientVpnRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteClientVpnRoute",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteClientVpnRouteInput
  },
  output: {
    shape: DeleteClientVpnRouteOutput
  },
  errors: []
};
