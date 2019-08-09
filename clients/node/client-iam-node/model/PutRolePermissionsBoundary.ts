import { PutRolePermissionsBoundaryInput } from "./PutRolePermissionsBoundaryInput";
import { PutRolePermissionsBoundaryOutput } from "./PutRolePermissionsBoundaryOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { PolicyNotAttachableException } from "./PolicyNotAttachableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutRolePermissionsBoundary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutRolePermissionsBoundary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutRolePermissionsBoundaryInput
  },
  output: {
    shape: PutRolePermissionsBoundaryOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: UnmodifiableEntityException
    },
    {
      shape: PolicyNotAttachableException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
