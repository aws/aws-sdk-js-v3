import { DeleteRolePermissionsBoundaryInput } from "./DeleteRolePermissionsBoundaryInput";
import { DeleteRolePermissionsBoundaryOutput } from "./DeleteRolePermissionsBoundaryOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
