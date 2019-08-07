import { ListIdentitiesInput } from "./ListIdentitiesInput";
import { ListIdentitiesOutput } from "./ListIdentitiesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListIdentities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListIdentities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListIdentitiesInput
  },
  output: {
    shape: ListIdentitiesOutput
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
