import { PutUserPermissionsBoundaryInput } from "../shapes/PutUserPermissionsBoundaryInput";
import { PutUserPermissionsBoundaryOutput } from "../shapes/PutUserPermissionsBoundaryOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { PolicyNotAttachableException } from "../shapes/PolicyNotAttachableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
