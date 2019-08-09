import { ModifyVpnConnectionInput } from "./ModifyVpnConnectionInput";
import { ModifyVpnConnectionOutput } from "./ModifyVpnConnectionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyVpnConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyVpnConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyVpnConnectionInput
  },
  output: {
    shape: ModifyVpnConnectionOutput
  },
  errors: []
};
