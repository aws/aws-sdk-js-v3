import { DisableSsoInput } from "./DisableSsoInput";
import { DisableSsoOutput } from "./DisableSsoOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InsufficientPermissionsException } from "./InsufficientPermissionsException";
import { AuthenticationFailedException } from "./AuthenticationFailedException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
