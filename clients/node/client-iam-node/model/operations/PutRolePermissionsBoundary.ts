import { PutRolePermissionsBoundaryInput } from "../shapes/PutRolePermissionsBoundaryInput";
import { PutRolePermissionsBoundaryOutput } from "../shapes/PutRolePermissionsBoundaryOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { UnmodifiableEntityException } from "../shapes/UnmodifiableEntityException";
import { PolicyNotAttachableException } from "../shapes/PolicyNotAttachableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
