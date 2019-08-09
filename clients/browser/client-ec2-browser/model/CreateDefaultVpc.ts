import { CreateDefaultVpcInput } from "./CreateDefaultVpcInput";
import { CreateDefaultVpcOutput } from "./CreateDefaultVpcOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDefaultVpc: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDefaultVpc",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDefaultVpcInput
  },
  output: {
    shape: CreateDefaultVpcOutput
  },
  errors: []
};
