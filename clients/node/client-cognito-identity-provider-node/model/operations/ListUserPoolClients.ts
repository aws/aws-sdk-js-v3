import { ListUserPoolClientsInput } from "../shapes/ListUserPoolClientsInput";
import { ListUserPoolClientsOutput } from "../shapes/ListUserPoolClientsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListUserPoolClients: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListUserPoolClients",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListUserPoolClientsInput
  },
  output: {
    shape: ListUserPoolClientsOutput
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
