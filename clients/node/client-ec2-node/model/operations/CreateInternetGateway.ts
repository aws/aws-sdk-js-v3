import { CreateInternetGatewayInput } from "../shapes/CreateInternetGatewayInput";
import { CreateInternetGatewayOutput } from "../shapes/CreateInternetGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateInternetGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateInternetGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateInternetGatewayInput
  },
  output: {
    shape: CreateInternetGatewayOutput
  },
  errors: []
};
