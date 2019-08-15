import { EnableSsoInput } from "../shapes/EnableSsoInput";
import { EnableSsoOutput } from "../shapes/EnableSsoOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InsufficientPermissionsException } from "../shapes/InsufficientPermissionsException";
import { AuthenticationFailedException } from "../shapes/AuthenticationFailedException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
