import { RemoveAllResourcePermissionsInput } from "./RemoveAllResourcePermissionsInput";
import { RemoveAllResourcePermissionsOutput } from "./RemoveAllResourcePermissionsOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RemoveAllResourcePermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveAllResourcePermissions",
  http: {
    method: "DELETE",
    requestUri: "/api/v1/resources/{ResourceId}/permissions"
  },
  input: {
    shape: RemoveAllResourcePermissionsInput
  },
  output: {
    shape: RemoveAllResourcePermissionsOutput
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
