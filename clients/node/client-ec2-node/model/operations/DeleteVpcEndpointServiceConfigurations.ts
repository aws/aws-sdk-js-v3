import { DeleteVpcEndpointServiceConfigurationsInput } from "../shapes/DeleteVpcEndpointServiceConfigurationsInput";
import { DeleteVpcEndpointServiceConfigurationsOutput } from "../shapes/DeleteVpcEndpointServiceConfigurationsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVpcEndpointServiceConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVpcEndpointServiceConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteVpcEndpointServiceConfigurationsInput
  },
  output: {
    shape: DeleteVpcEndpointServiceConfigurationsOutput
  },
  errors: []
};
