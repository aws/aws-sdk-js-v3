import { ListResourceServersInput } from "./ListResourceServersInput";
import { ListResourceServersOutput } from "./ListResourceServersOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
