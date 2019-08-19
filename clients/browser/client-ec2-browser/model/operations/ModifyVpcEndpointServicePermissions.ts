import { ModifyVpcEndpointServicePermissionsInput } from "../shapes/ModifyVpcEndpointServicePermissionsInput";
import { ModifyVpcEndpointServicePermissionsOutput } from "../shapes/ModifyVpcEndpointServicePermissionsOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ModifyVpcEndpointServicePermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ModifyVpcEndpointServicePermissions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ModifyVpcEndpointServicePermissionsInput
  },
  output: {
    shape: ModifyVpcEndpointServicePermissionsOutput
  },
  errors: []
};
