import { EnableKeyInput } from "../shapes/EnableKeyInput";
import { EnableKeyOutput } from "../shapes/EnableKeyOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const EnableKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableKeyInput
  },
  output: {
    shape: EnableKeyOutput
  },
  errors: [
    {
      shape: NotFoundException
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
      shape: LimitExceededException
    },
    {
      shape: KMSInvalidStateException
    }
  ]
};
