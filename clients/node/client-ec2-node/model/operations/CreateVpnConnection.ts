import { CreateVpnConnectionInput } from "../shapes/CreateVpnConnectionInput";
import { CreateVpnConnectionOutput } from "../shapes/CreateVpnConnectionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVpnConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVpnConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVpnConnectionInput
  },
  output: {
    shape: CreateVpnConnectionOutput
  },
  errors: []
};
