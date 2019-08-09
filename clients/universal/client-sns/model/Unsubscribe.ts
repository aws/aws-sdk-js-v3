import { UnsubscribeInput } from "./UnsubscribeInput";
import { UnsubscribeOutput } from "./UnsubscribeOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalErrorException } from "./InternalErrorException";
import { AuthorizationErrorException } from "./AuthorizationErrorException";
import { NotFoundException } from "./NotFoundException";
import { InvalidSecurityException } from "./InvalidSecurityException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
