import { EnableMFADeviceInput } from "./EnableMFADeviceInput";
import { EnableMFADeviceOutput } from "./EnableMFADeviceOutput";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { EntityTemporarilyUnmodifiableException } from "./EntityTemporarilyUnmodifiableException";
import { InvalidAuthenticationCodeException } from "./InvalidAuthenticationCodeException";
import { LimitExceededException } from "./LimitExceededException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
