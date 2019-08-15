import { ModifyVpcEndpointServiceConfigurationInput } from "../shapes/ModifyVpcEndpointServiceConfigurationInput";
import { ModifyVpcEndpointServiceConfigurationOutput } from "../shapes/ModifyVpcEndpointServiceConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyVpcEndpointServiceConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyVpcEndpointServiceConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyVpcEndpointServiceConfigurationInput
  },
  output: {
    shape: ModifyVpcEndpointServiceConfigurationOutput
  },
  errors: []
};
