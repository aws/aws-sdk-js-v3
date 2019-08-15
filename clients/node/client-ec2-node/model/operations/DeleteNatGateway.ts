import { DeleteNatGatewayInput } from "../shapes/DeleteNatGatewayInput";
import { DeleteNatGatewayOutput } from "../shapes/DeleteNatGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteNatGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteNatGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteNatGatewayInput
  },
  output: {
    shape: DeleteNatGatewayOutput
  },
  errors: []
};
