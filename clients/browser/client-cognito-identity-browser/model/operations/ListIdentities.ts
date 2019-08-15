import { ListIdentitiesInput } from "../shapes/ListIdentitiesInput";
import { ListIdentitiesOutput } from "../shapes/ListIdentitiesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
