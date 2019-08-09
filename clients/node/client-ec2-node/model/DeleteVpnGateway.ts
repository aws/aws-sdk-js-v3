import { DeleteVpnGatewayInput } from "./DeleteVpnGatewayInput";
import { DeleteVpnGatewayOutput } from "./DeleteVpnGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteVpnGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVpnGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVpnGatewayInput
  },
  output: {
    shape: DeleteVpnGatewayOutput
  },
  errors: []
};
