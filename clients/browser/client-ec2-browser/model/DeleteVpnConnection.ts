import { DeleteVpnConnectionInput } from "./DeleteVpnConnectionInput";
import { DeleteVpnConnectionOutput } from "./DeleteVpnConnectionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteVpnConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVpnConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVpnConnectionInput
  },
  output: {
    shape: DeleteVpnConnectionOutput
  },
  errors: []
};
