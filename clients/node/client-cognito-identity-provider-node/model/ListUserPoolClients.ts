import { ListUserPoolClientsInput } from "./ListUserPoolClientsInput";
import { ListUserPoolClientsOutput } from "./ListUserPoolClientsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
