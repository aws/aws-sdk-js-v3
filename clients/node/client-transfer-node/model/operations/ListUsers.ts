import { ListUsersInput } from "../shapes/ListUsersInput";
import { ListUsersOutput } from "../shapes/ListUsersOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InternalServiceError } from "../shapes/InternalServiceError";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListUsers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUsers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUsersInput
  },
  output: {
    shape: ListUsersOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
    {
      shape: InternalServiceError
    },
    {
      shape: InvalidNextTokenException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
