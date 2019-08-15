import { DeleteInternetGatewayInput } from "../shapes/DeleteInternetGatewayInput";
import { DeleteInternetGatewayOutput } from "../shapes/DeleteInternetGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteInternetGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInternetGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteInternetGatewayInput
  },
  output: {
    shape: DeleteInternetGatewayOutput
  },
  errors: []
};
