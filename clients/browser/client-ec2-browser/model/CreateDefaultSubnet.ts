import { CreateDefaultSubnetInput } from "./CreateDefaultSubnetInput";
import { CreateDefaultSubnetOutput } from "./CreateDefaultSubnetOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateDefaultSubnet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDefaultSubnet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDefaultSubnetInput
  },
  output: {
    shape: CreateDefaultSubnetOutput
  },
  errors: []
};
