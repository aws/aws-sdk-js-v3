import { DisableKeyInput } from "../shapes/DisableKeyInput";
import { DisableKeyOutput } from "../shapes/DisableKeyOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { DependencyTimeoutException } from "../shapes/DependencyTimeoutException";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableKey: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableKey",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableKeyInput
  },
  output: {
    shape: DisableKeyOutput
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
      shape: KMSInvalidStateException
    }
  ]
};
