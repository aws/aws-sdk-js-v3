import { RemoveAllResourcePermissionsInput } from "../shapes/RemoveAllResourcePermissionsInput";
import { RemoveAllResourcePermissionsOutput } from "../shapes/RemoveAllResourcePermissionsOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
