import { ListResourceServersInput } from "../shapes/ListResourceServersInput";
import { ListResourceServersOutput } from "../shapes/ListResourceServersOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListResourceServers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListResourceServers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListResourceServersInput
  },
  output: {
    shape: ListResourceServersOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    }
  ]
};
