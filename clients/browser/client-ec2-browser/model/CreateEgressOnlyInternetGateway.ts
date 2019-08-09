import { CreateEgressOnlyInternetGatewayInput } from "./CreateEgressOnlyInternetGatewayInput";
import { CreateEgressOnlyInternetGatewayOutput } from "./CreateEgressOnlyInternetGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateEgressOnlyInternetGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateEgressOnlyInternetGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateEgressOnlyInternetGatewayInput
  },
  output: {
    shape: CreateEgressOnlyInternetGatewayOutput
  },
  errors: []
};
