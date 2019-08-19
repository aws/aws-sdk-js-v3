import { AdminSetUserPasswordInput } from "../shapes/AdminSetUserPasswordInput";
import { AdminSetUserPasswordOutput } from "../shapes/AdminSetUserPasswordOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InvalidPasswordException } from "../shapes/InvalidPasswordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AdminSetUserPassword: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminSetUserPassword",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminSetUserPasswordInput
  },
  output: {
    shape: AdminSetUserPasswordOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: InternalErrorException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: InvalidPasswordException
    }
  ]
};
