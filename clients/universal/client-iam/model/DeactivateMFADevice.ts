import { DeactivateMFADeviceInput } from "./DeactivateMFADeviceInput";
import { DeactivateMFADeviceOutput } from "./DeactivateMFADeviceOutput";
import { EntityTemporarilyUnmodifiableException } from "./EntityTemporarilyUnmodifiableException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeactivateMFADevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeactivateMFADevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeactivateMFADeviceInput
  },
  output: {
    shape: DeactivateMFADeviceOutput
  },
  errors: [
    {
      shape: EntityTemporarilyUnmodifiableException
    },
    {
      shape: NoSuchEntityException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
