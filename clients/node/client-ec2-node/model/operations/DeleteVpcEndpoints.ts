import { DeleteVpcEndpointsInput } from "../shapes/DeleteVpcEndpointsInput";
import { DeleteVpcEndpointsOutput } from "../shapes/DeleteVpcEndpointsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVpcEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVpcEndpoints",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVpcEndpointsInput
  },
  output: {
    shape: DeleteVpcEndpointsOutput
  },
  errors: []
};
