import { PutUserPermissionsBoundaryInput } from "./PutUserPermissionsBoundaryInput";
import { PutUserPermissionsBoundaryOutput } from "./PutUserPermissionsBoundaryOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { InvalidInputException } from "./InvalidInputException";
import { PolicyNotAttachableException } from "./PolicyNotAttachableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutUserPermissionsBoundary: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutUserPermissionsBoundary",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutUserPermissionsBoundaryInput
  },
  output: {
    shape: PutUserPermissionsBoundaryOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: PolicyNotAttachableException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
