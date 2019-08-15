import { ResyncMFADeviceInput } from "../shapes/ResyncMFADeviceInput";
import { ResyncMFADeviceOutput } from "../shapes/ResyncMFADeviceOutput";
import { InvalidAuthenticationCodeException } from "../shapes/InvalidAuthenticationCodeException";
import { NoSuchEntityException } from "../shapes/NoSuchEntityException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ResyncMFADevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResyncMFADevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResyncMFADeviceInput
  },
  output: {
    shape: ResyncMFADeviceOutput
  },
  errors: [
    {
      shape: InvalidAuthenticationCodeException
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
