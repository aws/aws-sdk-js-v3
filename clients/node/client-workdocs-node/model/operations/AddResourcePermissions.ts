import { AddResourcePermissionsInput } from "../shapes/AddResourcePermissionsInput";
import { AddResourcePermissionsOutput } from "../shapes/AddResourcePermissionsOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddResourcePermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddResourcePermissions",
  http: {
    method: "POST",
    requestUri: "/api/v1/resources/{ResourceId}/permissions"
  },
  input: {
    shape: AddResourcePermissionsInput
  },
  output: {
    shape: AddResourcePermissionsOutput
  },
  errors: [
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
