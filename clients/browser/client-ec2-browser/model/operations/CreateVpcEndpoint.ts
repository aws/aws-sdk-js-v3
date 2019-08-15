import { CreateVpcEndpointInput } from "../shapes/CreateVpcEndpointInput";
import { CreateVpcEndpointOutput } from "../shapes/CreateVpcEndpointOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVpcEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVpcEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVpcEndpointInput
  },
  output: {
    shape: CreateVpcEndpointOutput
  },
  errors: []
};
