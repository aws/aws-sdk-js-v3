import { AdminEnableUserInput } from "./AdminEnableUserInput";
import { AdminEnableUserOutput } from "./AdminEnableUserOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminEnableUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminEnableUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminEnableUserInput
  },
  output: {
    shape: AdminEnableUserOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: UserNotFoundException
    },
    {
      shape: InternalErrorException
    }
  ]
};
