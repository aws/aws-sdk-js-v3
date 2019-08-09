import { ResetUserPasswordInput } from "./ResetUserPasswordInput";
import { ResetUserPasswordOutput } from "./ResetUserPasswordOutput";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { UserDoesNotExistException } from "./UserDoesNotExistException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResetUserPassword: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResetUserPassword",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResetUserPasswordInput
  },
  output: {
    shape: ResetUserPasswordOutput
  },
  errors: [
    {
      shape: DirectoryUnavailableException
    },
    {
      shape: UserDoesNotExistException
    },
    {
      shape: InvalidPasswordException
    },
    {
      shape: UnsupportedOperationException
    },
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
