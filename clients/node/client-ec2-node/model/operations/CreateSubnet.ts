import { CreateSubnetInput } from "../shapes/CreateSubnetInput";
import { CreateSubnetOutput } from "../shapes/CreateSubnetOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateSubnet: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateSubnet",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateSubnetInput
  },
  output: {
    shape: CreateSubnetOutput
  },
  errors: []
};
