import { CreateTransitGatewayInput } from "../shapes/CreateTransitGatewayInput";
import { CreateTransitGatewayOutput } from "../shapes/CreateTransitGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTransitGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTransitGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTransitGatewayInput
  },
  output: {
    shape: CreateTransitGatewayOutput
  },
  errors: []
};
