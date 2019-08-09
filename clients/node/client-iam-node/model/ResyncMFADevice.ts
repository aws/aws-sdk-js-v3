import { ResyncMFADeviceInput } from "./ResyncMFADeviceInput";
import { ResyncMFADeviceOutput } from "./ResyncMFADeviceOutput";
import { InvalidAuthenticationCodeException } from "./InvalidAuthenticationCodeException";
import { NoSuchEntityException } from "./NoSuchEntityException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
