import { AdminRemoveUserFromGroupInput } from "./AdminRemoveUserFromGroupInput";
import { AdminRemoveUserFromGroupOutput } from "./AdminRemoveUserFromGroupOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { UserNotFoundException } from "./UserNotFoundException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AdminRemoveUserFromGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AdminRemoveUserFromGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AdminRemoveUserFromGroupInput
  },
  output: {
    shape: AdminRemoveUserFromGroupOutput
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
