import { RemoveResourcePermissionInput } from "../shapes/RemoveResourcePermissionInput";
import { RemoveResourcePermissionOutput } from "../shapes/RemoveResourcePermissionOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveResourcePermission: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveResourcePermission",
  http: {
    method: "DELETE",
    requestUri: "/api/v1/resources/{ResourceId}/permissions/{PrincipalId}"
  },
  input: {
    shape: RemoveResourcePermissionInput
  },
  output: {
    shape: RemoveResourcePermissionOutput
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
