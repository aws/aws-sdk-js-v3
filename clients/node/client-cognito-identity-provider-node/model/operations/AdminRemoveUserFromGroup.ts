import { AdminRemoveUserFromGroupInput } from "../shapes/AdminRemoveUserFromGroupInput";
import { AdminRemoveUserFromGroupOutput } from "../shapes/AdminRemoveUserFromGroupOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { UserNotFoundException } from "../shapes/UserNotFoundException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
