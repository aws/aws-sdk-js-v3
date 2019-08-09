import { ListUsersInGroupInput } from "./ListUsersInGroupInput";
import { ListUsersInGroupOutput } from "./ListUsersInGroupOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
