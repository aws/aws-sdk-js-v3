import { AddResourcePermissionsInput } from "./AddResourcePermissionsInput";
import { AddResourcePermissionsOutput } from "./AddResourcePermissionsOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
