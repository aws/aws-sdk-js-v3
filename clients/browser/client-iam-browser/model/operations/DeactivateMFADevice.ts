import { DeactivateMFADeviceInput } from "../shapes/DeactivateMFADeviceInput";
import { DeactivateMFADeviceOutput } from "../shapes/DeactivateMFADeviceOutput";
import { EntityTemporarilyUnmodifiableException } from "../shapes/EntityTemporarilyUnmodifiableException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
