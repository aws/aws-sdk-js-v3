import { CreateVpcInput } from "../shapes/CreateVpcInput";
import { CreateVpcOutput } from "../shapes/CreateVpcOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVpc: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVpc",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVpcInput
  },
  output: {
    shape: CreateVpcOutput
  },
  errors: []
};
