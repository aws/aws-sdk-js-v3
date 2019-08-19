import { CreateLoginProfileInput } from "../shapes/CreateLoginProfileInput";
import { CreateLoginProfileOutput } from "../shapes/CreateLoginProfileOutput";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { PasswordPolicyViolationException } from "../shapes/PasswordPolicyViolationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLoginProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLoginProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLoginProfileInput
  },
  output: {
    shape: CreateLoginProfileOutput,
    resultWrapper: "CreateLoginProfileResult"
  },
  errors: [
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: PasswordPolicyViolationException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
