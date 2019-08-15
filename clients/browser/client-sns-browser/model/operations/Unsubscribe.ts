import { UnsubscribeInput } from "../shapes/UnsubscribeInput";
import { UnsubscribeOutput } from "../shapes/UnsubscribeOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { AuthorizationErrorException } from "../shapes/AuthorizationErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidSecurityException } from "../shapes/InvalidSecurityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const Unsubscribe: _Operation_ = {
  metadata: ServiceMetadata,
  name: "Unsubscribe",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UnsubscribeInput
  },
  output: {
    shape: UnsubscribeOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: AuthorizationErrorException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidSecurityException
    }
  ]
};
