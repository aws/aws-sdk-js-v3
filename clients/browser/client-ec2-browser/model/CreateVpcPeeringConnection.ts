import { CreateVpcPeeringConnectionInput } from "./CreateVpcPeeringConnectionInput";
import { CreateVpcPeeringConnectionOutput } from "./CreateVpcPeeringConnectionOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateVpcPeeringConnection: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVpcPeeringConnection",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVpcPeeringConnectionInput
  },
  output: {
    shape: CreateVpcPeeringConnectionOutput
  },
  errors: []
};
