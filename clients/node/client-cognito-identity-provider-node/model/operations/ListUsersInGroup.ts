import { ListUsersInGroupInput } from "../shapes/ListUsersInGroupInput";
import { ListUsersInGroupOutput } from "../shapes/ListUsersInGroupOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListUsersInGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUsersInGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUsersInGroupInput
  },
  output: {
    shape: ListUsersInGroupOutput
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
      shape: InternalErrorException
    }
  ]
};
