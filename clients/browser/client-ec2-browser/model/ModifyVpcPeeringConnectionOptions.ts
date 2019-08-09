import { ModifyVpcPeeringConnectionOptionsInput } from "./ModifyVpcPeeringConnectionOptionsInput";
import { ModifyVpcPeeringConnectionOptionsOutput } from "./ModifyVpcPeeringConnectionOptionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyVpcPeeringConnectionOptions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyVpcPeeringConnectionOptions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyVpcPeeringConnectionOptionsInput
  },
  output: {
    shape: ModifyVpcPeeringConnectionOptionsOutput
  },
  errors: []
};
