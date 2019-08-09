import { RemoveResourcePermissionInput } from "./RemoveResourcePermissionInput";
import { RemoveResourcePermissionOutput } from "./RemoveResourcePermissionOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
