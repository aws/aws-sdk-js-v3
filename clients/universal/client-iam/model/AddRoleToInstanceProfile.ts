import { AddRoleToInstanceProfileInput } from "./AddRoleToInstanceProfileInput";
import { AddRoleToInstanceProfileOutput } from "./AddRoleToInstanceProfileOutput";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { UnmodifiableEntityException } from "./UnmodifiableEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AddRoleToInstanceProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddRoleToInstanceProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AddRoleToInstanceProfileInput
  },
  output: {
    shape: AddRoleToInstanceProfileOutput
  },
  errors: [
    {
      shape: NoSuchEntityException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: UnmodifiableEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
