import { EnableSsoInput } from "./EnableSsoInput";
import { EnableSsoOutput } from "./EnableSsoOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InsufficientPermissionsException } from "./InsufficientPermissionsException";
import { AuthenticationFailedException } from "./AuthenticationFailedException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const EnableSso: _Operation_ = {
  metadata: ServiceMetadata,
  name: "EnableSso",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: EnableSsoInput
  },
  output: {
    shape: EnableSsoOutput
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
