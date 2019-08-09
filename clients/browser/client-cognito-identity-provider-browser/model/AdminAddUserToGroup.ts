import { AdminAddUserToGroupInput } from "./AdminAddUserToGroupInput";
import { AdminAddUserToGroupOutput } from "./AdminAddUserToGroupOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminAddUserToGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminAddUserToGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminAddUserToGroupInput
  },
  output: {
    shape: AdminAddUserToGroupOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
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
