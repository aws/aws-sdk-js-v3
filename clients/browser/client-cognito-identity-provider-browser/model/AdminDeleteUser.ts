import { AdminDeleteUserInput } from "./AdminDeleteUserInput";
import { AdminDeleteUserOutput } from "./AdminDeleteUserOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminDeleteUser: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminDeleteUser",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminDeleteUserInput
  },
  output: {
    shape: AdminDeleteUserOutput
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
