import { ListUsersInput } from "../shapes/ListUsersInput";
import { ListUsersOutput } from "../shapes/ListUsersOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListUsers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUsers",
  http: {
    method: "GET",
    requestUri: "/users-summary/{InstanceId}"
  },
  input: {
    shape: ListUsersInput
  },
  output: {
    shape: ListUsersOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServiceException
    }
  ]
};
