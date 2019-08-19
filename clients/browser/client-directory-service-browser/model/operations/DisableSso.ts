import { DisableSsoInput } from "../shapes/DisableSsoInput";
import { DisableSsoOutput } from "../shapes/DisableSsoOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InsufficientPermissionsException } from "../shapes/InsufficientPermissionsException";
import { AuthenticationFailedException } from "../shapes/AuthenticationFailedException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisableSso: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisableSso",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisableSsoInput
  },
  output: {
    shape: DisableSsoOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InsufficientPermissionsException
    },
    {
      shape: AuthenticationFailedException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
