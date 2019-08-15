import { DeleteRolePermissionsBoundaryInput } from "../shapes/DeleteRolePermissionsBoundaryInput";
import { DeleteRolePermissionsBoundaryOutput } from "../shapes/DeleteRolePermissionsBoundaryOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { UnmodifiableEntityException } from "../shapes/UnmodifiableEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteRolePermissionsBoundary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRolePermissionsBoundary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRolePermissionsBoundaryInput
  },
  output: {
    shape: DeleteRolePermissionsBoundaryOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: UnmodifiableEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
