import { ResetUserPasswordInput } from "../shapes/ResetUserPasswordInput";
import { ResetUserPasswordOutput } from "../shapes/ResetUserPasswordOutput";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { UserDoesNotExistException } from "../shapes/UserDoesNotExistException";
import { InvalidPasswordException } from "../shapes/InvalidPasswordException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
