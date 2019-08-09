import { CreateLoginProfileInput } from "./CreateLoginProfileInput";
import { CreateLoginProfileOutput } from "./CreateLoginProfileOutput";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { PasswordPolicyViolationException } from "./PasswordPolicyViolationException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
