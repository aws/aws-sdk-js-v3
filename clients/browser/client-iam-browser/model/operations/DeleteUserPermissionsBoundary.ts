import { DeleteUserPermissionsBoundaryInput } from "../shapes/DeleteUserPermissionsBoundaryInput";
import { DeleteUserPermissionsBoundaryOutput } from "../shapes/DeleteUserPermissionsBoundaryOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteUserPermissionsBoundary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteUserPermissionsBoundary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteUserPermissionsBoundaryInput
  },
  output: {
    shape: DeleteUserPermissionsBoundaryOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
