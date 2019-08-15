import { CreateVpcEndpointServiceConfigurationInput } from "../shapes/CreateVpcEndpointServiceConfigurationInput";
import { CreateVpcEndpointServiceConfigurationOutput } from "../shapes/CreateVpcEndpointServiceConfigurationOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateVpcEndpointServiceConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVpcEndpointServiceConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVpcEndpointServiceConfigurationInput
  },
  output: {
    shape: CreateVpcEndpointServiceConfigurationOutput
  },
  errors: []
};
