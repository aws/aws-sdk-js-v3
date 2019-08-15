import { DeleteEgressOnlyInternetGatewayInput } from "../shapes/DeleteEgressOnlyInternetGatewayInput";
import { DeleteEgressOnlyInternetGatewayOutput } from "../shapes/DeleteEgressOnlyInternetGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEgressOnlyInternetGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEgressOnlyInternetGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteEgressOnlyInternetGatewayInput
  },
  output: {
    shape: DeleteEgressOnlyInternetGatewayOutput
  },
  errors: []
};
