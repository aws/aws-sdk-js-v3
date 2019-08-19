import { EnableMFADeviceInput } from "../shapes/EnableMFADeviceInput";
import { EnableMFADeviceOutput } from "../shapes/EnableMFADeviceOutput";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { EntityTemporarilyUnmodifiableException } from "../shapes/EntityTemporarilyUnmodifiableException";
import { InvalidAuthenticationCodeException } from "../shapes/InvalidAuthenticationCodeException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableMFADevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableMFADevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableMFADeviceInput
  },
  output: {
    shape: EnableMFADeviceOutput
  },
  errors: [
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: EntityTemporarilyUnmodifiableException
    },
    {
      shape: InvalidAuthenticationCodeException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
