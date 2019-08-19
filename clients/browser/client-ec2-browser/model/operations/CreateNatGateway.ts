import { CreateNatGatewayInput } from "../shapes/CreateNatGatewayInput";
import { CreateNatGatewayOutput } from "../shapes/CreateNatGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateNatGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateNatGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateNatGatewayInput
  },
  output: {
    shape: CreateNatGatewayOutput
  },
  errors: []
};
