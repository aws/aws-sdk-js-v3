import { DisableKeyRotationInput } from "../shapes/DisableKeyRotationInput";
import { DisableKeyRotationOutput } from "../shapes/DisableKeyRotationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { DisabledException } from "../shapes/DisabledException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableKeyRotation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableKeyRotation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableKeyRotationInput
  },
  output: {
    shape: DisableKeyRotationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: DisabledException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: DependencyTimeoutException
    },
    {
      shape: KMSInternalException
    },
    {
      shape: KMSInvalidStateException
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};
