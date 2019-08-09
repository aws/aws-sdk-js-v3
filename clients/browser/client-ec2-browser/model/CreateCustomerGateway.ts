import { CreateCustomerGatewayInput } from "./CreateCustomerGatewayInput";
import { CreateCustomerGatewayOutput } from "./CreateCustomerGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateCustomerGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateCustomerGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateCustomerGatewayInput
  },
  output: {
    shape: CreateCustomerGatewayOutput
  },
  errors: []
};
