import { AdminDisableUserInput } from "./AdminDisableUserInput";
import { AdminDisableUserOutput } from "./AdminDisableUserOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminDisableUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminDisableUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminDisableUserInput
  },
  output: {
    shape: AdminDisableUserOutput
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
