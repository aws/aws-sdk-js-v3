import { DeleteCustomerGatewayInput } from "../shapes/DeleteCustomerGatewayInput";
import { DeleteCustomerGatewayOutput } from "../shapes/DeleteCustomerGatewayOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteCustomerGateway: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCustomerGateway",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCustomerGatewayInput
  },
  output: {
    shape: DeleteCustomerGatewayOutput
  },
  errors: []
};
