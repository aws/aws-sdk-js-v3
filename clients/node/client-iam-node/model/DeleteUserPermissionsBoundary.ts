import { DeleteUserPermissionsBoundaryInput } from "./DeleteUserPermissionsBoundaryInput";
import { DeleteUserPermissionsBoundaryOutput } from "./DeleteUserPermissionsBoundaryOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
