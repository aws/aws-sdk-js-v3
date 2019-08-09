import { ModifyVpcEndpointInput } from "./ModifyVpcEndpointInput";
import { ModifyVpcEndpointOutput } from "./ModifyVpcEndpointOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ModifyVpcEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyVpcEndpoint",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyVpcEndpointInput
  },
  output: {
    shape: ModifyVpcEndpointOutput
  },
  errors: []
};
