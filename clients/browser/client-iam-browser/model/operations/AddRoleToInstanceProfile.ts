import { AddRoleToInstanceProfileInput } from "../shapes/AddRoleToInstanceProfileInput";
import { AddRoleToInstanceProfileOutput } from "../shapes/AddRoleToInstanceProfileOutput";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UnmodifiableEntityException } from "../shapes/UnmodifiableEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
