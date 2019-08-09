import { AdminSetUserPasswordInput } from "./AdminSetUserPasswordInput";
import { AdminSetUserPasswordOutput } from "./AdminSetUserPasswordOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InvalidParameterException } from "./InvalidParameterException";
import { InvalidPasswordException } from "./InvalidPasswordException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
